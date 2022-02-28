import { Coordinates } from "coordinates.type";
import { Orientation } from "orientarion.type";

const moveForward = (
  currentCoordinates: Coordinates, 
  orientation: Orientation
): Coordinates => {
  if (orientation.direction === "x") {    
    currentCoordinates.x = (currentCoordinates.x + orientation.sense < 0) 
      ? 0 
      : currentCoordinates.x + orientation.sense;
  } else {
    currentCoordinates.y = (currentCoordinates.y + orientation.sense < 0) 
      ? 0 
      : currentCoordinates.y + orientation.sense;
  }
  return currentCoordinates;
};

const rotateRight = (
  currentCoordinates: Coordinates, 
  orientation: Orientation
): Coordinates => {
  orientation.sense = (orientation.direction === "x") 
    ? -orientation.sense as (1 | -1) 
    : (orientation.sense) as (1 | -1);
  orientation.direction = (orientation.direction === "x") ? "y" : "x";
  return currentCoordinates;
};

const rotateLeft = (
  currentCoordinates: Coordinates, 
  orientation: Orientation
): Coordinates => {
  orientation.sense = (orientation.direction === "x") 
    ? orientation.sense as (1 | -1) 
    : -orientation.sense as (1 | -1);
  orientation.direction = (orientation.direction === "x") ? "y" : "x";
  return currentCoordinates;
};

const getStep = (
  step: string, 
  coordinates: Coordinates, 
  orientation: Orientation
) => {
  switch (step.toUpperCase()) {
    case "F": moveForward(coordinates, orientation);
    break;
    case "L": rotateLeft(coordinates, orientation);
    break;
    case "R": rotateRight(coordinates, orientation);
    break;
  }
};

export const moveMk2 = (
  initialCoordinates: Coordinates, 
  path: string
): Coordinates => {
  const {x, y} = initialCoordinates;
  const orientation: Orientation = {
    direction: "y",
    sense: 1,
  };

  const coordinates = {
    x: Math.abs(Number(x)) || 0,
    y: Math.abs(Number(y)) || 0,
  };
  const pathArray = path.split("");

  pathArray.map(step => getStep(step, coordinates, orientation));

  return coordinates;
};
