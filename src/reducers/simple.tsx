const simpleReducer = (state = {}, action: any)  => {
    switch(action.type) {
        case 'ACTION_SIMPLE':
            return action.payload
            break;
        case 'ACTION_REACT':
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}


export default simpleReducer;