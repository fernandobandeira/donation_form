import axios from 'axios'

export const CHOOSE_AMOUNT = 'CHOOSE_AMOUNT'
export const SET_INFORMATION = 'SET_INFORMATION'
export const SET_PAYMENT = 'SET_PAYMENT'

export const chooseAmount = form => ({
    type: CHOOSE_AMOUNT,
    payload: form,
})

export const setInformation = form => ({
    type: SET_INFORMATION,
    payload: form,
})

export const setPayment = form => dispatch => {    
    axios.post(`/`, form);
}
