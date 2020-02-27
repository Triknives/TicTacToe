import CalculateWinner from './../components/CalculateWinner';


const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "HANDLECLICK":
    const squares = state.squares.slice()
    if (CalculateWinner(squares) || squares[action.location]) {
      return state;
    }
    squares[action.location] = state.xIsNext ? 'X' : 'O'
    const newState = Object.assign({}, state, {
      squares: squares,
      xIsNext: !state.xIsNext,
    })
    return newState
    default:
    return state;
  }
}
