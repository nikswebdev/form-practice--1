import { useReducer } from 'react';

const initialState = {
  value: '',
  valueChanged: false,
};

const reducerInputFunction = (state, action) => {
  if (action.type === 'INPUT_UPDATED') return { value: action.value, valueChanged: true };
  else return initialState;
};

const useInput = (validationFn) => {
  const [inputState, dispatch] = useReducer(reducerInputFunction, initialState);

  const inputIsValid = validationFn(inputState.value);

  const inputValueChangeHandler = (e) => {
    dispatch({ type: 'INPUT_UPDATED', value: e.target.value });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    inputValue: inputState.value,
    inputValueChanged: inputState.valueChanged,
    inputIsValid,
    inputValueChangeHandler,
    reset,
  };
};

export default useInput;
