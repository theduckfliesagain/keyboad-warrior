import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            {/* TODO: add logo */}
            <img href='' alt="keyboard warrior logo" />

            <button className="play-btn">
                <Link to='/play'>Play</Link>
            </button>
        </div>
    )
}
