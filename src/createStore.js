export default function createStore(reducer) {
  let state

  function getState(){
    return reducer(state, "ASDF")
  }
  function dispatch(action){
    state = reducer(state, action)
    render()
  }




  return {getState, dispatch}
}

function render() {
  const container = document.getElementById('container');
}

//createStore(countReducer).dispatch("@@INIT")
