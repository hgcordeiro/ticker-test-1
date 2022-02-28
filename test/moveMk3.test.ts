import { Coordinates } from "../src/types/coordinates.type";
import { moveMk3 } from "../src/moveMk3";

describe("moveMk3", () => {
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

    const finalCoordinates = moveMk3(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should accept negative negative values for x coordinate", () => {
    const coordinates: Coordinates = {
      x: 2,
      y: 3,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: -12,
      y: 3,
    };

    const path = "LFFFFFFFFFFFFFF";

    const finalCoordinates = moveMk3(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should accept negative values for y coordinate", () => {
    const coordinates: Coordinates = {
      x: 2,
      y: 3,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 2,
      y: -12,
    };

    const path = "RRFFFFFFFFFFFFFFF";

    const finalCoordinates = moveMk3(coordinates, path);

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

    const finalCoordinates = moveMk3(coordinates, path);

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

    const finalCoordinates = moveMk3(coordinates, path);

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

    const finalCoordinates = moveMk3(coordinates, path);

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

    const finalCoordinates = moveMk3(coordinates, path);

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

    const finalCoordinates = moveMk3(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should ignore invalid characters on path string", () => {
    const coordinates: Coordinates = {
      x: 0,
      y: 0,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 0,
      y: 7,
    };

    const path = "ABCasdasf5F[][@£rlRLrlb&&';]ouhBflRLr";

    const finalCoordinates = moveMk3(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should respect the 5 steps forward limit", () => {
    const coordinates: Coordinates = {
      x: 0,
      y: 0,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 0,
      y: 16,
    };

    const path = "1f6f5f50f";

    const finalCoordinates = moveMk3(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should respect the 50 fuel limit", () => {
    const coordinates: Coordinates = {
      x: 0,
      y: 0,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 0,
      y: 50,
    };

    const path = "5f5f10f5f5f5f5f5f5f2ff4ff4fffffff";

    const finalCoordinates = moveMk3(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });
});