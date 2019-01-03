import {FETCHED, FETCHED_ERROR, IS_FETCHING} from "../actions/app";

export function isFetching(state = false, action: any) {
    switch (action.type) {
        case IS_FETCHING:
            return action.isLoading;
            break;
        default:
            return state;
    }
}

export function fetchedError(state = {}, action: any) {
    switch (action.type) {
        case FETCHED_ERROR:
            return action.error;
            break;
        default:
            return state;
    }
}

export function fetched(state = [], action: any) {
    switch (action.type) {
        case FETCHED:
            return action.data;
            break;
        default:
            return state;
    }
}