import React from 'react'
import Word from './Word';

    const wordRefs = useRef([])
    const words = wordBlock.split(' ').map((word, idx) => (
        <Word 
            key={idx} id={idx} word={word} complete={complete} 
            wordRef={el => wordRefs.current[idx] = el}
        />
    ))

    return (
        <div className="WordBlock">
            {words}
        </div>
    )
}
