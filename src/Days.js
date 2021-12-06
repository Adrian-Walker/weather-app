import React from "react";

function Days(hi, lo, description) {
    return (
        <div>
            <div>Forcast: {description}</div>
            <div>Temp: {hi} / {lo}</div>
        </div>

    )
}

export default Days
