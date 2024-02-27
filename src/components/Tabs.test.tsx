import { render, fireEvent, screen } from "@testing-library/react";
import Tabs from "./Tabs";
import "@testing-library/jest-dom";
import { useFetch } from "@/hooks/useFetch";
import { mockDuelData } from "@/testUtils/mocks";

jest.mock("../hooks/useFetch");

const mockUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

describe("Tabs", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockUseFetch.mockReturnValue({
      data: mockDuelData,
      isLoading: false,
      error: null,
    });
  });

  it("should render without crashing", () => {
    render(<Tabs />);
    expect(screen.getByText("NFL")).toBeInTheDocument();
    expect(screen.getByText("Teams")).toBeInTheDocument();
    expect(screen.getByText("Duel")).toBeInTheDocument();
  });

  it("should initially select Teams tab", () => {
    render(<Tabs />);
    expect(screen.getByText("Teams")).toHaveClass("bg-blue-500 text-gray-900");
  });

  it("should switch to Duel tab when clicked", () => {
    render(<Tabs />);
    fireEvent.click(screen.getByText("Duel"));
    expect(screen.getByText("Duel")).toHaveClass("bg-blue-500 text-gray-900");
  });

  it("should render Teams component when Teams tab is selected", () => {
    render(<Tabs />);

    expect(screen.getByText("Compare")).toBeInTheDocument();
  });

  it("should render Duel component when Duel tab is selected", () => {
    render(<Tabs />);
    fireEvent.click(screen.getByText("Duel"));

    expect(screen.getByText("Washington Huskies(+4.5)")).toBeInTheDocument();
  });
});
