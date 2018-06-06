import { combineReducers } from "redux";
import ActionTypes from "../actions/ActionTypes";
import { CommonUtil } from "../common/util/CommonUtil";

const initialGameReducerState = CommonUtil.initializeEmptyGameArray();

export const gameStateReducer = (state = initialGameReducerState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CELL:
      return state.map((row, rowIndex) => {
        if (rowIndex !== action.x) {
          return row;
        }
        return row.map((val, colIndex) => {
          if (colIndex !== action.y) {
            return val;
          }
          return action.value;
        })
      });
    default:
      return state;
  }
}

export const boardPositionReducer = (state = {x: 0, y: 0}, action) => {
  switch (action.type) {
    case ActionTypes.MOVE_BOARD_UP:
      return state;
    case ActionTypes.MOVE_BOARD_RIGHT:
      return state;
    case ActionTypes.MOVE_BOARD_DOWN:
      return state;
    case ActionTypes.MOVE_BOARD_LEFT:
      return state;
    case ActionTypes.SET_BOARD_POSITION:
      return state;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  gameState: gameStateReducer,
  boardPosition: boardPositionReducer
});

export default rootReducer;
