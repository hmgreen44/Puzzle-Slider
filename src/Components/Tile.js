import React from 'react'

function Tile(props) {
    return (
        <div className= "col-3 border border-dark">
            {props.tile.id}
        </div>
    )
}

export default Tile
