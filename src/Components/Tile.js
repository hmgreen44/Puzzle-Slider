import React from 'react'

function Tile(props) {
    return (
        <div className= "col-3 border border-dark" onClick={() => props.tileClicked(props.index)}>
            <p> {props.tile.id}</p>
            <p>isEmpty: {props.tile.isEmpty ? "yes": "no"}</p>
            
        </div>
    )
}

export default Tile
