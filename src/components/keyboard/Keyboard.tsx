import { FIRST_KEY_ROW, SECOND_KEY_ROW, THIRD_KEY_ROW } from "../../constants"
import "./keyboard.css"

interface KeyboardProps {
    setBoard: (value: string) => void
}

function Keyboard(props: KeyboardProps) {
    const keyLayout = [
        FIRST_KEY_ROW,
        SECOND_KEY_ROW,
        THIRD_KEY_ROW
    ]

    return (
        <div className="keyboard-container">
            {keyLayout.map((layout: string) =>
                <div className="keyboard-row-container">
                    {layout.split("").map((key: string) =>
                        <div className="key-container" onClick={() => props.setBoard(key)}>
                            <div className="key">
                                {key}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Keyboard