import { Coordinates } from "coordinates.type";
import { 
  getStep, 
  getStartingCoordinates, 
  getStartingOrientation, 
  getPropulsionSystem 
} from "./mkUtils";

export const moveMk3 = (
  initialCoordinates: Coordinates, 
  path: string
): Coordinates => {
  const coordinates = getStartingCoordinates(initialCoordinates);
  const orientation = getStartingOrientation();
  const propulsionSystem = getPropulsionSystem();
  
  const pathArray = path.split("");

  pathArray.map(step => getStep(step, coordinates, orientation, propulsionSystem));

  return coordinates;
};
