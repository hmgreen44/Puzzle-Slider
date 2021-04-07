import React from 'react'
import Tile from './Components/Tile'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      emptyI: 0
    }
    this.tileClicked = this.tileClicked.bind(this);

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
        isEmpty: i == 15
      })
      console.log(newBoard)

    }
    this.setState({ board: newBoard })
    this.setState({ emptyI: 15 })
  }
  swapTile(index) {
    let board = this.state.board;
    let emptyI = this.state.emptyI
    let temp = board[index];
    board[index] = board[emptyI];
    board[emptyI] = temp;
    this.setState({ board })
    this.setState({ emptyI: index })
  }

  isValidMove(index) {
    if (condition) {
      return true;
    } else if (condition) {
      return true;
    } else {
      return false;
    }
  }

  tileClicked(index) {
    if (this.isValidMove(index)) {
      this.swapTile(index);
    }
  }
  shuffleBoard(e) {
  

  }

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
          <div className="card">
            <div className="card-body fs-1">
              Puzzle Slider
          </div>
          </div>
          {this.state.board.map((tile, index) => <Tile key={index} tile={tile} index={index} tileClicked = {this.tileClicked}/>)}
        </div>
        <div className="row text-center">
          <button type="button" className="btn btn-secondary p-3 mt-2 fs-3" onClick={this.shuffleBoard} >Shuffle Board</button>
        </div>
      </div>



    );
  }
}

export default Board;

