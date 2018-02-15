import {
  ADD_DONOR,
  GET_DONORS,
} from '../actions'

const INITIAL_STATE = {
  byId: {},
  allIds: [],
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_DONOR:
      return {
        byId: {
            ...state.byId,
            [action.payload._id]: action.payload,
        },
        allIds: [
            action.payload._id,
            ...state.allIds,
        ]
      }
    case GET_DONORS:
      const allIds = action.payload.reduce((allIds, donor) => {
        allIds.push(donor._id)
        return allIds
      }, [])
      const byId = action.payload.reduce((byId, donor) => {
        byId[donor._id] = donor
    
        return byId
      }, {})

      return {
        byId,
        allIds,
      }
    default:
      return state
  }
}
