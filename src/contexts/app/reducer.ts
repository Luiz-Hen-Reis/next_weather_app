import { Actions, ActionType, DataType } from "./types";

export const reducer = (state: DataType, action: ActionType) => {
    switch (action.type) {
      case Actions.SET_BACKGROUND:
        return { ...state, background: action.payload.background };
        break;
  
      default:
        return state;
    }
  };