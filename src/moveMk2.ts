import { Coordinates } from "coordinates.type";
import { getStartingCoordinates, getStartingOrientation, getStep } from "./mkUtils";

export const moveMk2 = (
  initialCoordinates: Coordinates, 
  path: string
): Coordinates => {
  const coordinates = getStartingCoordinates(initialCoordinates);
  const orientation = getStartingOrientation();

  const pathArray = path.split("");

  pathArray.map(step => getStep(step, coordinates, orientation));

  return coordinates;
};
