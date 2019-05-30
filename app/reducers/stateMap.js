export const ADD_LIST_MARKERS = 'stateMap/ADD_LIST_MARKERS';
export const ADD_MARKER_DATA = 'stateMap/ADD_MARKER_DATA';

const initialState = {
  markerList: [
    {
      latitude: 37.78925,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  ]
};

export const stateMap = (state = initialState, action) => {
  if (action.type === ADD_LIST_MARKERS) {
    return {
       ...state,
       markerList: [...state.markerList, action.payload]
    }
  } else if (action.type === ADD_MARKER_DATA) {
     return {
        ...state,
        markerList: [...state.markerList, action.payload]
     }
  }
  return state
}

export const addListMarkers = (coordinate) => {
  return {
    type: ADD_LIST_MARKERS,
    payload: coordinate
  }
}

export const addMarkerData = (data) => {
  return {
    type: ADD_MARKER_DATA,
    payload: data
  }
}
