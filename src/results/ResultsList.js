import React from "react"
import './Results.css'

function ResultsList({songs}) {
    return (
        <ul>
            {songs}
        </ul>
    )
}

export default ResultsList