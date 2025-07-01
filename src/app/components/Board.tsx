import { act, useEffect, useState } from "react"

export default function Board5({ boardSize }: { boardSize: number }) {
    const [activeSquare, setActiveSquare] = useState<number | null>(null)
    const [markedSquares, setMarkedSquares] = useState<number[]>([])

    useEffect(() => {
        restartGame();
    }, [boardSize])

    useEffect(() => {
        if (markedSquares.length === boardSize * boardSize && boardSize !== 0) {
            winGame();
        }
    }, [activeSquare]);

    return (
        boardSize > 0 &&
        <article
            style={{
                gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
                gridTemplateRows: `repeat(${boardSize}, 1fr)`
            }}
            className="grid size-96 border mx-auto"
        >
            {Array.from({ length: boardSize * boardSize }, (_, index) => (
                <button
                    onClick={() => handleClick(index)}
                    key={index}
                    className={`
                        border flex items-center justify-center
                        ${activeSquare === index && "animate-pulse"}
                        ${markedSquares.includes(index) && "bg-blue-600"}
                        `
                    }
                >
                    {index + 1}
                </button>
            ))}
        </article>
    )


    function handleClick(index: number) {
        possibleMoves(index) ? makeMove(index) : gameOver()
    }

    function makeMove(index: number) {
        setActiveSquare(index);
        setMarkedSquares([...markedSquares, index]);
    }

    function possibleMoves(index: number): boolean {
        if (!markedSquares.includes(index)) {
            return (
                activeSquare === null ||
                index === activeSquare + boardSize * 2 + 1 ||
                index === activeSquare + boardSize * 2 - 1 ||
                index === activeSquare - boardSize * 2 + 1 ||
                index === activeSquare - boardSize * 2 - 1 ||
                index === activeSquare + boardSize - 2 ||
                index === activeSquare + boardSize + 2 ||
                index === activeSquare - boardSize + 2 ||
                index === activeSquare - boardSize - 2
            )
        }
        return false
    }

    function gameOver() {
        setActiveSquare(null);
        setMarkedSquares([]);
        alert("Has perdido, vuelve a intentarlo");
    }

    function winGame() {
        setMarkedSquares([]);
        setActiveSquare(null);
        alert("¡Has ganado! ¡Felicidades!");
    }

    function restartGame() {
        setMarkedSquares([]);
        setActiveSquare(null);
    }
}