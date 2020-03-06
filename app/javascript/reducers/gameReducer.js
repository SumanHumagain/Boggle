

const gameReducer = (state = [], action) => {

    switch(action.type){
        default:
            localStorage.setItem('statess',JSON.stringify(state));
            return state;
        }
}

export default gameReducer;