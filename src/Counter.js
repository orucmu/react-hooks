import { useState } from "react";

function App(props) {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text)
    return (
        <>
            <p>Butona {count} kez tıkladınız.</p>
            <p>Girilen text: {text}</p>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </>
    );
}

export default App;
