import React from 'react'

function Tile(props) {
    return (
        <div className= "col-3 border border-dark">
            <p>id: {props.tile.id}</p>
            <p>currentPosition: {props.tile.currentPosition}</p>
            <p>isEmpty: {props.tile.isEmpty ? "yes": "no"}</p>
        </div>
    )
}

export default Tile
