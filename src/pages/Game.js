import React from 'react'
import { WordBlock } from '../components/Game'

export default function Game() {
    const [stats, setStats] = useState({score: 0, accuracy: []});
    const baseScore = 10;

    const updateStats = (word) => {
        setStats(stats => {
            return {
                score: stats.score += baseScore * word.accuracy,
                accuracy: [...stats.accuracy, word.accuracy] 
            }
        })
    }

    const wordBlock = "These are the words you have to type."

    return (
        <div>
            <WordBlock wordBlock={wordBlock}/>
        </div>
    )
}
