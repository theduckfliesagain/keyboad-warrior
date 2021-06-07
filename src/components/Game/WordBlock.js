import React from 'react'
import Word from './Word';

    const wordRefs = useRef([])
    const complete = (idx) => {
        if (idx < words.length - 1) {
            wordRefs.current[idx + 1].focus()    
        } else {
            console.log('DONE');
        }
    }

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
