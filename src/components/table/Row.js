import React from "react";

function Row({ list, onSort }) {
    return (
        <>
            {list.map((item) => (
                <div className="og-li-col text-center" key={item} onClick={() => onSort?.(item)}>
                    {item}
                </div>
            ))}
        </>
    )
}

export default Row;