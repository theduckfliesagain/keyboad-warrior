import React from 'react'
import Word from './Word';

export default function WordBlock( { wordBlock }) {
    
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
