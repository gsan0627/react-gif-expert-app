import { getGifs } from "../../helpers/getGifs";

describe("GetGifs Fetch tests", () => {
  test("must bring 10 items", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBe(10);
  });

  test("must bring 0 items", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
