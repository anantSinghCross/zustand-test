import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useGameStore = create(
  combine({ squares: Array(9).fill(null), nextMove: 'X' }, (set) => {
    return {
      setSquares: (nextSquares) => {
        set((state) => ({
          squares: typeof nextSquares === "function" ? nextSquares(state.squares) : nextSquares,
        }));
      },
      resetSquares: () => set(state => ({ squares: Array(9).fill(null) })),
      changeNextMove: () => set(state => state.nextMove === 'X' ? {nextMove: 'O'}: {nextMove: 'X'}),
    };
  })
);
