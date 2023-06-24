import "./board.css"

interface BoardProps {
    boardState: string[]
    answer: string[]
    updateState: (value: string) => void
}

function Board(props: BoardProps) {
    const GREEN_COLOR = "#3fc462"
    const YELLOW_COLOR = "#c4cc6a"
    const RED_COLOR = "#ed4758"
    const GREY_COLOR = "#d9d7d7"

    const boardTileText = (value: string, idx: number) => {
        if (value === props.answer[idx]) {
            return (
                <div className="board-tile-text" style={{ backgroundColor: GREEN_COLOR }}>
                    {value}
                </div>
            )
        } else if (props.answer.includes(value)) {
            return (
                <div className="board-tile-text" style={{ backgroundColor: YELLOW_COLOR }}>
                    {value}
                </div>
            )
        } else if (value === '') {
            return (
                <div className="board-tile-text" style={{ backgroundColor: GREY_COLOR }}>
                    {value}
                </div>
            )
        } else {
            return (
                <div className="board-tile-text" style={{ backgroundColor: RED_COLOR }}>
                    {value}
                </div>
            )
        }
    }

    return (
        <div className="main-container">
            {props.boardState.map((value: string, idx: number) =>
                <div className="board-tile">
                    {boardTileText(value, idx)}
                </div>
            )}
        </div>
    )
}

export default Board