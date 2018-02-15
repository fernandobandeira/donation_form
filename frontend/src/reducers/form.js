import {
  CHOOSE_AMOUNT, SET_INFORMATION, SET_PAYMENT
} from '../actions'

const INITIAL_STATE = {}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHOOSE_AMOUNT:      
      return {
        ...state,
        honor: action.payload.honor,   
        amount: action.payload.amount,   
        frequency: action.payload.frequency,   
        honor_name: action.payload.honor_name,   
        honor_comment: action.payload.honor_comment,
        chooseAmount: true,
      }
    case SET_INFORMATION:      
      return {
        ...state,
        anonymous: action.payload.anonymous,   
        first_name: action.payload.first_name,   
        last_name: action.payload.last_name,   
        email: action.payload.email,   
        phone: action.payload.phone,            
        receive_updates: action.payload.receive_updates,
        setInformation: true,
      }
    case SET_PAYMENT: {
      return INITIAL_STATE
    }
    default:
      return state
  }
}
