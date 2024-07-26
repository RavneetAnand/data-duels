import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useFetch } from "@/hooks/useFetch";
import { mockTeamData } from "@/__test__/testUtils/mocks";
import { Tab } from "@/components/Tabs";
import Teams from "@/components/Teams";

jest.mock("../hooks/useFetch");

const mockUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

describe("Teams", () => {
  let selectedTeams: number[];
  let setSelectedTeams: jest.Mock;
  let setTabSelected: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    selectedTeams = [];
    setSelectedTeams = jest.fn();
    setTabSelected = jest.fn();

    mockUseFetch.mockReturnValue({
      data: mockTeamData,
      isLoading: false,
      error: null,
    });
  });

  it("should render without crashing", () => {
    mockUseFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<Teams selectedTeams={selectedTeams} setSelectedTeams={setSelectedTeams} setTabSelected={setTabSelected} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display teams when data is fetched", async () => {
    render(<Teams selectedTeams={selectedTeams} setSelectedTeams={setSelectedTeams} setTabSelected={setTabSelected} />);
    await waitFor(() => expect(screen.getByText(mockTeamData[0].name)).toBeInTheDocument());
  });

  it("should display error message when there is an error", () => {
    mockUseFetch.mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error("An error occurred"),
    });

    render(<Teams selectedTeams={selectedTeams} setSelectedTeams={setSelectedTeams} setTabSelected={setTabSelected} />);
    expect(screen.getByText("Error: An error occurred")).toBeInTheDocument();
  });

  it("should call setSelectedTeams when a team is selected", async () => {
    render(<Teams selectedTeams={selectedTeams} setSelectedTeams={setSelectedTeams} setTabSelected={setTabSelected} />);
    await waitFor(() => fireEvent.click(screen.getByTestId("select-team-1")));
    expect(setSelectedTeams).toHaveBeenCalledWith([mockTeamData[0].id]);
  });

  it("should call setTabSelected when Compare button is clicked", async () => {
    selectedTeams = [mockTeamData[0].id, mockTeamData[1].id];
    render(<Teams selectedTeams={selectedTeams} setSelectedTeams={setSelectedTeams} setTabSelected={setTabSelected} />);
    await waitFor(() => fireEvent.click(screen.getByText("Compare")));
    expect(setTabSelected).toHaveBeenCalledWith(Tab.DUEL);
  });
});
