import { Coordinates } from "coordinates.type";
import { getStartingCoordinates, getStep } from "./mkUtils";

export const moveMk1 = (
  initialCoordinates: Coordinates, 
  path: string
): Coordinates => {
  const coordinates = getStartingCoordinates(initialCoordinates);
  const pathArray = path.split("");

  pathArray.map(step => getStep(step, coordinates));

  return coordinates;
};
