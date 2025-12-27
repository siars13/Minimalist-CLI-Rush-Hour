"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGrid = exports.car = void 0;
exports.car = [
    { id: "red", row: 2, column: 0, length: 2, direction: "H" },
    { id: "a", row: 0, column: 1, length: 3, direction: "V" },
];
/*export const createGrid = (empty = "."): Grid => {
  const grid: Grid = [];
  for (let r = 0; r < 6; r++) {
    grid[r] = [];
    for (let c = 0; c < 6; c++) {
      grid[r][c] = empty;
    }
  }
  return grid;
};*/
var createGrid = function (empty) {
    if (empty === void 0) { empty = "."; }
    var grid = [];
    for (var i = 0; i < 6; i++) {
        grid[i] = [empty, empty, empty, empty, empty, empty];
    }
    return grid;
};
exports.createGrid = createGrid;
