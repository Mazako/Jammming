import React from "react";
import ResultsList from "../results/ResultsList";

function SavePanel({results, onRemoveSong}) {

    return (
        <div>
            <ResultsList songs={results} isAdding={false} onClickSong={onRemoveSong} />
        </div>
    )


}


export default SavePanel