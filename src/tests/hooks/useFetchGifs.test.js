import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom";

describe("Tests on the useFetchGifs hook", () => {
  test("Should return the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => {
      return useFetchGifs("Batman");
    });
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("It should return an array of images and the loading in false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => {
      return useFetchGifs("Batman");
    });

    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
