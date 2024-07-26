import { useFetch } from "@/hooks/useFetch";
import { renderHook, waitFor } from "@testing-library/react";

let mockFetch: jest.Mock = jest.fn();

describe("useFetch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = mockFetch;
  });

  it("should return data on successful fetch", async () => {
    const mockData = { message: "success" };
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const { result } = renderHook(() => useFetch({ url: "https://example.com", options: { method: "GET" } }));

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.data).toEqual(mockData);
      expect(result.current.error).toBeNull();
    });
  });

  it("should return error on failed fetch", async () => {
    const mockError = new Error("fetch failed");
    mockFetch.mockRejectedValueOnce(() => mockError);

    const { result } = renderHook(() => useFetch({ url: "https://example.com", options: { method: "GET" } }));

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.data).toBeNull();
      expect(result.current.error).toEqual(mockError);
    });
  });
});
