# Reduce
A Slightly more tolerable usage of of Redux actions and reducers

## Install
```
yarn add @yarljs/reduce
```

### Usage
```js
var redux = require('redux');
var yarlReduce = require('@yarljs/reduce');


// Prepare your default state
const defaultState = {
  test: {
    value: 0
  }
}

// Write an Action
function addOne() {
  return {
    type: this.type,
  }
}

// Write the reducer for this action.
let exp = yarlReduce.Reducable((state, action) => {
    return {
      test: {
        value: state.test.value + 1
      }
    }
})(addOne)

// Use the aggregated reducer in your store
const store = redux.createStore(yarlReduce.reduce, defaultState)

// dispatch the event
store.dispatch((exp());
// Or Use the action registry
store.dispatch(yarlReduce.Actions['addOne']());
```
