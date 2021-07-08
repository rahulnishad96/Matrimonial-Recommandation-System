const formReducer = (state,action) => {
    return {
        ...state,
        [action.field]:action.payload,
    };
}
export default formReducer;