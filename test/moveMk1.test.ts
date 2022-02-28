import { Coordinates } from "../src/types/coordinates.type";
import { moveMk1 } from "../src/moveMk1";

describe("moveMk1", () => {
  it("should return the final coordinates, given the initial coordinate and a path", () => {
    const coordinates: Coordinates = {
      x: 4,
      y: 12,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 6,
      y: 14,
    };

    const path = "FFRLRRBF";

    const finalCoordinates = moveMk1(coordinates, path);

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

    const path = "LLLLLLLLLLL";

    const finalCoordinates = moveMk1(coordinates, path);

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

    const path = "BBBBBBBBBB";

    const finalCoordinates = moveMk1(coordinates, path);

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

    const finalCoordinates = moveMk1(coordinates, path);

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

    const finalCoordinates = moveMk1(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should accept case insensitive path string", () => {
    const coordinates: Coordinates = {
      x: 0,
      y: 0,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 3,
      y: 1,
    };

    const path = "fFrRrbBflRLr";

    const finalCoordinates = moveMk1(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });

  it("should ignore invalid characters on path string", () => {
    const coordinates: Coordinates = {
      x: 0,
      y: 0,
    };

    const expectedFinalCoordinates: Coordinates = {
      x: 3,
      y: 1,
    };

    const path = "ABCasdasfF4546[][@£rRrb&&';]ouhBflRLr";

    const finalCoordinates = moveMk1(coordinates, path);

    expect(finalCoordinates).toEqual(expectedFinalCoordinates);
  });
});