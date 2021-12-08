import React from "react";

function Days(hi, low, description) {
    return (
        <div>
            <div>Forcast: {description}</div>
            <div>Temp: {hi} / {low}</div>
        </div>

    )
}

export default Days
