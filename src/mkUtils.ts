import { Coordinates } from "coordinates.type";
import { Orientation } from "orientarion.type";
import { PropulsionSystem } from "propulsionSystem.type";

const moveForward = (
  currentCoordinates: Coordinates, 
  orientation?: Orientation,
  propulsionSystem?: PropulsionSystem ,
): Coordinates => {
  if (!orientation) {
    currentCoordinates.y += 1;
    return currentCoordinates;
  }

  let propulsion = 1;

  if (propulsionSystem) {
    const { buffer, fuel } = propulsionSystem;

    if (fuel === 0) {
      return currentCoordinates;
    }
    const times = +buffer.join("") || 1;
    const limitedTimes = times > 5 ? 5 : times;

    const remainingFuel = fuel - limitedTimes;

    if (remainingFuel >= 0) {
      propulsionSystem.fuel = remainingFuel;
      propulsion = limitedTimes;
    } else {
      propulsionSystem.fuel = 0;
      propulsion = limitedTimes + remainingFuel;
    }

    const { direction, sense } = orientation;

    currentCoordinates[direction] = currentCoordinates[direction] + (sense * propulsion);

  } else {
    const { direction, sense } = orientation;

    currentCoordinates[direction] = (currentCoordinates[direction] + (sense * propulsion) < 0) 
        ? 0 
        : currentCoordinates[direction] + (sense * propulsion);
  }

  

  return currentCoordinates;
};

const moveBackwards = (currentCoordinates: Coordinates): Coordinates => {
  if (currentCoordinates.y > 0) {
    currentCoordinates.y -= 1;
  }
  return currentCoordinates;
};

const moveRight = (
  currentCoordinates: Coordinates, 
  orientation?: Orientation,
): Coordinates => {
  if (orientation) {
    return rotateRight(currentCoordinates, orientation);
  }  
  currentCoordinates.x += 1;
  return currentCoordinates;
};

const moveLeft = (
  currentCoordinates: Coordinates, 
  orientation?: Orientation,
): Coordinates => {
  if (orientation) {
    return rotateLeft(currentCoordinates, orientation);
  }    
  if (currentCoordinates.x > 0) {
    currentCoordinates.x -= 1;
  }
  return currentCoordinates;
};

const rotateRight = (
  currentCoordinates: Coordinates, 
  orientation: Orientation,
): Coordinates => {
  orientation.sense = (orientation.direction === "x") 
    ? -orientation.sense as (1 | -1) 
    : (orientation.sense) as (1 | -1);
  orientation.direction = (orientation.direction === "x") ? "y" : "x";
  return currentCoordinates;
};

const rotateLeft = (
  currentCoordinates: Coordinates, 
  orientation: Orientation,
): Coordinates => {
  orientation.sense = (orientation.direction === "x") 
    ? orientation.sense as (1 | -1) 
    : -orientation.sense as (1 | -1);
  orientation.direction = (orientation.direction === "x") ? "y" : "x";
  return currentCoordinates;
};

const isNumber = (character: string): boolean => {
  if (character === "0") return true;
  return !!parseInt(character);
};

export const getStartingCoordinates = ({x, y}: Coordinates): Coordinates => {
  return {
    x: Math.abs(Number(x)) || 0,
    y: Math.abs(Number(y)) || 0,
  };
};

export const getStartingOrientation = (): Orientation => {
  return {
    direction: "y",
    sense: 1,
  };
};

export const  getPropulsionSystem = (): PropulsionSystem => {
  return {
    buffer: [""],
    fuel: 50,
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStep = (
  step: string, 
  coordinates: Coordinates, 
  orientation?: Orientation,
  propulsionSystem?: PropulsionSystem 
) => {
  if (propulsionSystem && isNumber(step)) {
    propulsionSystem.buffer.push(step);
    return;
  }
  switch (step.toUpperCase()) {
    case "F": moveForward(coordinates, orientation, propulsionSystem);
    break;
    case "B": if(!orientation) moveBackwards(coordinates);
    break;
    case "L": moveLeft(coordinates, orientation);
    break;
    case "R": moveRight(coordinates, orientation);
    break;
  }
  if (propulsionSystem) {
    propulsionSystem.buffer.length = 0;
  }
};