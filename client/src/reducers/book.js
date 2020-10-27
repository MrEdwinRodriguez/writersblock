import { GET_BOOK} from '../actions/types';

const initialState = {
    book: null,
    books: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_BOOK:
            return {
                ...state,
                loading: false,
                book: payload
            }
        default: 
            return state;
    }

}