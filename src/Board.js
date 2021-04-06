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
        isEmpty: i == 15
      })
      console.log(newBoard)

    }
    this.setState({ board: newBoard })
  }
  //swapTile() {
  //let currentBoard = [Board];
  //if(tile.isEmpty id: +1 || id: -1 || id: +4 || id: -4)
  //tile.currentP
  //this.setState({newBoard: currentBoard})
  //}


  //randomizeBoard(e) {
  //run the swapTile function a certain number of times math.random?
  //add onClick to button and call function on click. will be event

  //}

  //checkWin(){
  //this would be ran at the end of each swapTile function in order to see if current position is === id
  //if (currentPosition === tile.id) 
    //return alert "you win";


  // }

  // onTileClick(e) {
  //   swapTile() 
  //   checkWin()

  // }


  render() {
    return (
      <div className="App container mt-4">
        <div className="row text-center">
          <div class="card">
            <div class="card-body fs-1">
              Puzzle Slider
          </div>
          </div>
          {this.state.board.map((tile, index) => <Tile key={index} tile={tile} />)}
        </div>
        <div className="row text-center">
          <button type="button" className="btn btn-secondary p-3 mt-2 fs-3">Shuffle Board</button>
          <button type="button" className="btn btn-secondary p-3 mt-2 fs-3">New Game</button>
        </div>
      </div>



    );
  }
}

export default Board;

