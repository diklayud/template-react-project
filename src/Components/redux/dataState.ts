import MarketRow from "../model/marketRow";

// our redux state
export class DataState {
    public marketData: MarketRow[];
}

// action types
export enum DataActionType {
    LoadData = "LoadData",
    RemoveData = "RemoveData",
}

// action declaration
export interface DataAction {
    type: DataActionType,
    payload?: any
}

// action functions
export function addData(data:MarketRow[]):DataAction {
    return { type: DataActionType.LoadData, payload: data };
  }
export function removeData() : DataAction {
    return { type: DataActionType.RemoveData, payload: null };
}


// reducer
export function marketDataReducer(state:DataState = new DataState(), action : DataAction) {
  const newState = { ...state };

  // Check to see if the reducer cares about this action
  switch(action.type){
        case DataActionType.LoadData:
            newState.marketData = action.payload;
            localStorage.setItem('marketData', action.payload)
            break;

        case DataActionType.RemoveData:
            newState.marketData = new Array<MarketRow>();
            localStorage.removeItem('marketData');
            break;
  }
  // otherwise return the existing state unchanged
  return newState;
}
