import { Coordinates } from "../src/types/coordinates.type";
import { moveMk2 } from "../src/moveMk2";

describe("moveMk2", () => {
  it("should return the final coordinates, given the initial coordinate and a path", () => {
    const coordinates: Coordinates = {
      x: 4,
      y: 12,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 4,
      y: 13,
    };

    const path = "FFRLRRF";

    const finalCoordinates = moveMk2(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should not return negative values for x coordinate", () => {
    const coordinates: Coordinates = {
      x: 2,
      y: 3,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 0,
      y: 3,
    };

    const path = "LFFFFFFFFFFFFFF";

    const finalCoordinates = moveMk2(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should not return negative values for y coordinate", () => {
    const coordinates: Coordinates = {
      x: 2,
      y: 3,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 2,
      y: 0,
    };

    const path = "RRFFFFFFFFFFFFFFF";

    const finalCoordinates = moveMk2(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should return same coordinates if no path is provided", () => {
    const coordinates: Coordinates = {
      x: 1,
      y: 2,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 1,
      y: 2,
    };

    const path = "";

    const finalCoordinates = moveMk2(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should ignore negative signs on initial coordinates", () => {
    const coordinates: Coordinates = {
      x: -1,
      y: -2,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 1,
      y: 2,
    };

    const path = "";

    const finalCoordinates = moveMk2(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should accept case insensitive path string", () => {
    const coordinates: Coordinates = {
      x: 0,
      y: 0,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 0,
      y: 2,
    };

    const path = "fFrLRl";

    const finalCoordinates = moveMk2(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should not change coordinates when rotating right", () => {
    const coordinates: Coordinates = {
      x: 1,
      y: 2,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 1,
      y: 2,
    };

    const path = "RRRRRRRRRRRRRRRR";

    const finalCoordinates = moveMk2(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should not change coordinates when rotating left", () => {
    const coordinates: Coordinates = {
      x: 1,
      y: 2,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 1,
      y: 2,
    };

    const path = "LLLLLLLLLLLLLLL";

    const finalCoordinates = moveMk2(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should ignore invalid characters on path string", () => {
    const coordinates: Coordinates = {
      x: 0,
      y: 0,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 0,
      y: 3,
    };

    const path = "ABCasdasfF4546[][@£rlRLrlb&&';]ouhBflRLr";

    const finalCoordinates = moveMk2(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });
});