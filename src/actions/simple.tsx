const simpleAction = () => {
    return (dispatch: any) => {
        dispatch({ type: 'ACTION_SIMPLE', payload: { message: 'Hello SIMPLE'} })
    }
}

export default simpleAction;
