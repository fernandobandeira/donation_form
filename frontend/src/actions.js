import axios from 'axios'

export const CHOOSE_AMOUNT = 'CHOOSE_AMOUNT'
export const SET_INFORMATION = 'SET_INFORMATION'
export const SET_PAYMENT = 'SET_PAYMENT'
export const ADD_DONOR = 'ADD_DONOR'
export const GET_DONORS = 'GET_DONORS'

export const chooseAmount = form => ({
    type: CHOOSE_AMOUNT,
    payload: form,
})

export const setInformation = form => ({
    type: SET_INFORMATION,
    payload: form,
})

export const setPayment = form => dispatch => {    
    axios.post('', form)
        .then(response => dispatch({
            type: ADD_DONOR,
            payload: response.data.donor,
        }));
    dispatch({
        type: SET_PAYMENT,
    })
}

export const getDonors = () => dispatch => {    
    axios.get('')
        .then(response => dispatch({
            type: GET_DONORS,
            payload: response.data.donors,
        }));
}
