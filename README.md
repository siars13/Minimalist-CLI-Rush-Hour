# Rush Hour CLI

A minimalist implementation of the Rush Hour puzzle game in TypeScript, running in the terminal.

## Gameplay Preview

```text
--- RUSH HOUR ---
.       a       .       .       .       .
.       a       .       l       .       .
red     red     .       l       .       .
.       .       .       l       .       .
.       .       .       .       .       .
.       .       .       .       .       .
```

## Prerequisites

- Node.js (v20+)
- pnpm
- Docker (optional)

## Installation

```bash
pnpm install
```

## Usage

### Local

Run the game directly:

```bash
pnpm start
```

### Docker

Run the game inside a container:

```bash
docker compose run --rm rushhour
```

## How to Play

The goal is to move the red car to the exit on the right edge of the grid.

Enter commands in the format: `[car_id] [direction]`

Examples:

- `red right`
- `blue down`
- `green left`

Type `exit` to quit the game.

## Project Structure

- `src/index.ts`: Entry point and game loop.
- `src/domain.ts`: Game logic, grid management, and rules.
- `Dockerfile`: Container configuration.
