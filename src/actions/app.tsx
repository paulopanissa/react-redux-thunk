import axios from 'axios';

// action types
export const IS_FETCHING = 'IS_FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHED_ERROR = 'FETCHED_ERROR';

// action creators
export function isFetching(bool: boolean) {
    return {
        type: IS_FETCHING,
        isLoading: bool
    }
}

export function fetchedError(error: any) {
    return {
        type: FETCHED_ERROR,
        error
    }
}

export function fetched(data: any) {
    return {
        type: FETCHED,
        data
    }
}

// Thunk
export function thunkFetchData() {
    return async (dispatch: any) => {
        dispatch(isFetching(true));
        try {
            const { data } = await axios.get('http://api.icndb.com/jokes');
            dispatch(fetched(data.value));
            dispatch(isFetching(false));
        } catch(err) {
            dispatch(fetchedError(err));
            dispatch(isFetching(false));
        }
    }
}