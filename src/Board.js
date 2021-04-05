import React from 'react'
import Tile from './Components/Tile'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    }

  }
  componentDidMount() {
    this.generateBoard()
  }

  generateBoard() {
    //setState is a function that must take an object that has a key that has already been defined and is given a new value through :
    let newBoard = []
    for (let i = 0; i < 16; i++) {
      newBoard.push({
        id: i,
        currentPosition: i,
        isClickable: i == 15
      })
      console.log(newBoard)

    }
    this.setState({ board: newBoard })
  }
  //swapTile() {
  //if tile is  to "empty? smart? tile"
    //if(tile.id == 15)

  //}

  //randomizeBoard() {
    //run the swapTile function a certain number of times math.random?
    //add onClick to button and call function on click. will be event

  //}


  render() {
    return (
      <div className="App container mt-4">
        <div className="row text-center">
          <h1>Puzzle Slider</h1>
          {this.state.board.map((tile, index) => <Tile key={index} tile={tile} />)}
        </div>
      </div>

    );
  }
}

export default Board;
