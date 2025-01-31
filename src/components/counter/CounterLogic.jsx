import { useState } from "react"

export function CounterLogic() {
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>
                    incrémente
            </button>
            <button onClick={() => setCount((count) => count - 1)}>
                    Décrémente
            </button>
            <p>Result : {count}</p>
        </>
    )
}