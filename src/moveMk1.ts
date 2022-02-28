import { Coordinates } from "coordinates.type";

const moveForward = (currentCoordinates: Coordinates): Coordinates => {
  currentCoordinates.y += 1;
  return currentCoordinates;
};

const moveBackwards = (currentCoordinates: Coordinates): Coordinates => {
  if (currentCoordinates.y > 0) {
    currentCoordinates.y -= 1;
  }
  return currentCoordinates;
};

const moveRight = (currentCoordinates: Coordinates): Coordinates => {
  currentCoordinates.x += 1;
  return currentCoordinates;
};

const moveLeft = (currentCoordinates: Coordinates): Coordinates => {
  if (currentCoordinates.x > 0) {
    currentCoordinates.x -= 1;
  }
  return currentCoordinates;
};

const getStep = (step: string, coordinates: Coordinates) => {
  switch (step.toUpperCase()) {
    case "F": moveForward(coordinates);
    break;
    case "B": moveBackwards(coordinates);
    break;
    case "L": moveLeft(coordinates);
    break;
    case "R": moveRight(coordinates);
    break;
  }
};

export const moveMk1 = (
  initialCoordinates: Coordinates, 
  path: string
): Coordinates => {
  const {x, y} = initialCoordinates;
  const coordinates = {
    x: Math.abs(Number(x)) || 0,
    y: Math.abs(Number(y)) || 0,
  };
  const pathArray = path.split("");

  pathArray.map(step => getStep(step, coordinates));

  return coordinates;
};
