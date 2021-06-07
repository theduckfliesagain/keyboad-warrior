    const [input, setInput] = useState('');

export default function Word({ word }) {
    return (
            <input type="text" value={input} onChange={handleInput} />
        </div>
    )
}
