import React from 'react'
import { WordBlock } from '../components/Game'

export default function Game() {

    const wordBlock = "These are the words you have to type."

    return (
        <div>
            <WordBlock wordBlock={wordBlock}/>
        </div>
    )
}
