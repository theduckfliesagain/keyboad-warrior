    const [input, setInput] = useState('');
    const [correct, setCorrect] = useState(false);

    const handleInput = (e) => {
        if ((word).startsWith(e.target.value)) setInput(e.target.value)
    }

    useEffect(() => {
        setCorrect(word.startsWith(input))
    }, [input])
    return (
            <input type="text" value={input} onChange={handleInput} />
        </div>
    )
}
