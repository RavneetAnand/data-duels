import { render, waitFor, screen } from "@testing-library/react";
import Duel from "./Duel";
import { useFetch } from "../../hooks/useFetch";
import { TeamStatsType } from "./Duel";
import "@testing-library/jest-dom";
import { mockDuelData } from "@/testUtils/mocks";

jest.mock("../../hooks/useFetch");

const mockUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

const renderDuel = () => {
  render(<Duel teams={[1, 2]} />);
};

describe("Duel", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render loading state initially", () => {
    mockUseFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    renderDuel();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render error message when fetch fails", async () => {
    const error = new Error("Failed to fetch");
    mockUseFetch.mockReturnValue({
      data: null,
      isLoading: false,
      error,
    });

    renderDuel();

    await waitFor(() =>
      expect(screen.getByText(`Error: ${error.message}`)).toBeInTheDocument()
    );
  });

  it("should render team stats and duel cards when data is available", async () => {
    const teamStats: TeamStatsType[] = mockDuelData;

    mockUseFetch.mockReturnValue({
      data: teamStats,
      isLoading: false,
      error: null,
    });

    renderDuel();
    await waitFor(() => {
      expect(screen.getByText("v/s")).toBeInTheDocument();
      expect(screen.getByText("Passing Leaders")).toBeInTheDocument();
      expect(screen.getByText("Rushing Leaders")).toBeInTheDocument();
      expect(screen.getByText("Receiving Leaders")).toBeInTheDocument();
      expect(screen.getByText("Touchdown Leaders")).toBeInTheDocument();
    });
  });
});
