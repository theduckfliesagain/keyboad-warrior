    const [input, setInput] = useState('');
    const [correct, setCorrect] = useState(false);

    const handleInput = (e) => {
        if ((word).startsWith(e.target.value)) setInput(e.target.value)
    }

    useEffect(() => {
        setCorrect(word.startsWith(input))
    }, [input])
    return (
        <div className={`Word ${correct ? 'correct' : ''}`}>
            style={{width: word.length + 'ch'}} tabIndex={-1} ref={wordRef}/>
        </div>
    )
}
