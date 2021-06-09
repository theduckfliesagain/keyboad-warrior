/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import Word from './Word';
import './WordBlock.scss'

export default function WordBlock({ wordBlock, updateStats }) {

    const wordRefs = useRef([])
    
    useEffect(() => {
        wordRefs.current[0].focus()
    }, []);

    const complete = (idx, accuracy) => {
        updateStats({accuracy: accuracy})
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
