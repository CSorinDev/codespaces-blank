"use client"

import { useState } from "react";
import Board from "./components/Board";

export default function Home() {
  const boardSizes = [5, 6, 7, 8, 9]
  const [boardSize, setBoardSize] = useState(0)
  return (
    <section>
      <h1 className="text-center my-4">El Juego del Caballo</h1>

      {boardSize === 0 &&
        <article className="w-full flex flex-col items-center">
          <h2>Elige el tablero</h2>
          <div className="flex gap-4">
            {boardSizes.map((boardSize) => {
              return (
                <button
                  onClick={() => setBoardSize(boardSize)}
                  className="bg-blue-600 py-2 px-4 my-2 rounded-lg hover:bg-blue-700 transition-all" 
                  key={boardSize}
                >
                  {boardSize} x {boardSize}
                </button>
              )
            })}
          </div>
        </article>
      }

      <Board boardSize={boardSize} />

      {boardSize !== 0 &&
        <button
          className="bg-blue-600 hover:bg-blue-700 transition-all py-2 px-4 flex mx-auto my-4 rounded-lg"
          onClick={() => setBoardSize(0)}
        >
          Restart
        </button>
      }

    </section>
  );
}
