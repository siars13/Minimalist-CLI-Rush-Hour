export type Direction = "H" | "V";

export type Car = {
  id: string;
  row: number;
  column: number;
  length: 2 | 3;
  direction: Direction;
};

export const car: Car[] = [
  { id: "red", row: 2, column: 0, length: 2, direction: "H" },
  { id: "a", row: 0, column: 1, length: 2, direction: "V" },
  { id: "l", row: 1, column: 3, length: 3, direction: "V" },
];

export type Grid = string[][];

export type MoveDirection = "left" | "right" | "up" | "down";

export const createGrid = (empty = "."): Grid => {
  const grid: Grid = [];
  for (let i: number = 0; i < 6; i++) {
    grid[i] = [empty, empty, empty, empty, empty, empty];
  }
  return grid;
};

export const isPositionFree = (
  grid: Grid,
  x: Car,
  ignoreId?: string
): boolean => {
  for (let i = 0; i < x.length; i++) {
    let checkRow = x.row;
    let checkCol = x.column;

    if (x.direction === "H") {
      checkCol = x.column + i;
    } else {
      checkRow = x.row + i;
    }

    if (
      grid[checkRow] === undefined ||
      grid[checkRow][checkCol] === undefined
    ) {
      console.error("Erreur : Hors de la grille");
      return false;
    }

    const cellContent = grid[checkRow][checkCol];

    if (cellContent !== "." && cellContent !== ignoreId) {
      return false;
    }
  }

  return true;
};

export const moveCar = (grid: Grid, c: Car, d: MoveDirection): boolean => {
  if (c.direction === "H" && (d === "up" || d === "down")) {
    console.log("Mouvement impossible,veuillez vous déplacer avec left/right");
    return false;
  }
  if (c.direction === "V" && (d === "left" || d === "right")) {
    console.log("Mouvement impossible, veuillez vous déplacer avec up/down");
    return false;
  }

  let newPositionRow = c.row;
  let newPositionColumn = c.column;

  const newPositionCar = { ...c };

  if (d === "left") newPositionCar.column -= 1;
  if (d === "right") newPositionCar.column += 1;
  if (d === "up") newPositionCar.row -= 1;
  if (d === "down") newPositionCar.row += 1;

  if (isPositionFree(grid, newPositionCar, c.id)) {
    c.row = newPositionCar.row;
    c.column = newPositionCar.column;
    return true;
  }
  console.log("Bloqué!");
  return false;
};

export const populateGridWithCars = (grid: Grid, x: Car[]): Grid => {
  x.forEach((car) => {
    if (isPositionFree(grid, car)) {
      for (let i: number = 0; i < car.length; i++) {
        if (car.direction === "H") {
          grid[car.row][car.column + i] = car.id;
        } else {
          grid[car.row + i][car.column] = car.id;
        }
      }
    } else {
      console.log(`-> Voiture ${car.id} ignorée.`);
    }
  });
  return grid;
};

export const gameWin = (grid: Grid): boolean => {
  if (grid[2][5] === "red") {
    console.log("game gagné");
    return true;
  }
  return false;
};
