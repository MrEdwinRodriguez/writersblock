import axios from 'axios';
import { setAlert } from './alert';
import { GET_BOOK, PROFILE_ERROR} from './types';


//create or update book
export const createBook = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Contentent-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/book/create', formData, config);
        dispatch({
            type: GET_BOOK,
            payload: res.data
        })
        dispatch(setAlert(edit ? 'Book Edited' : 'Book Created'));
        // if(!edit) {
        //     history.push('/dashboard')
        // }
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
        
    }
} 