import { PING, PONG } from "./actions";

export const pingpong = (state = { isPinging: false }, action) => {
    switch (action.type) {
      case PING:
        return { isPinging: true };
  
      case PONG:
        return { isPinging: false };
  
      default:
        return state;
    }
  };