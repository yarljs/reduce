var redux = require('redux');
var yarlReduce = require('../index');

function addOne() {
  console.log(this.type);
  return {
    type: this.type,
  }
}

const defaultState = {
  test: {
    value: 0
  }
}

let exp = redux.compose(
  yarlReduce.Reducable((state, action) => {
    return {
      test: {
        value: state.test.value + 1
      }
    }
  })
)(addOne)

const store = redux.createStore(yarlReduce.reduce, defaultState)

console.log(store.getState().test.value);
store.dispatch(yarlReduce.Actions['addOne']());
console.log(store.getState().test.value);
