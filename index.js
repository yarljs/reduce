let Reducers = [];
let Actions = [];

function Reducable(reducer) {
  return (target) => {
    Actions[target.name] = target.bind({type: target.name});
    Reducers[target.name] = reducer;
    return Actions[target.name];
  };
}

function reduce(state = {}, action) {
  for(var e in Reducers) {
    if(e === action.type) {
      return Reducers[e](state, action);
    }
  }
  return state;
}

module.exports = {
  Actions: Actions,
  Reducers: Reducers,
  Reducable: Reducable,
  reduce: reduce
}
