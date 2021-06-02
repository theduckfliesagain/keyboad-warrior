import React from 'react'
import Word from './Word';

export default function WordBlock( { wordBlock }) {
    
    const words = wordBlock.split(' ').map((word, idx) => {
        return (<Word key={idx} word={word} />)
    })

    return (
        <div>
            {words}
        </div>
    )
}
