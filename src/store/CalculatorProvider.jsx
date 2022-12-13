import React, { createContext, useReducer } from "react";

export const CalculatorContext = createContext();

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case "addDigit":
            return { ...state, ...action.payload };
        case "setOperation":
            return { ...state, ...action.payload };
        case "clearMemory":
            return { ...initialState };
        default:
            return { ...state };
    };
};

export const CalculatorProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const setOperation = operation => {
        let { current, values } = state;

        if (current === 0) {
            if (state.values[0] === 0 || operation === "=")
                return;

            dispatch({
                type: "setOperation",
                payload: {
                    operation, current: 1, clearDisplay: true
                }
            });

        } else {

            if (values[1] === 0) {
                dispatch({
                    type: "setOperation",
                    payload: {
                        operation
                    }
                });
                return;
            };

            const equals = operation === "=";

            switch (state.operation) {
                case "-":
                    values[0] -= values[1];
                    break;
                case "+":
                    values[0] += values[1];
                    break;
                case "/":
                    values[0] /= values[1];
                    break;
                case "*":
                    values[0] *= values[1];
                    break;
                default:
                    return;
            };

            values[1] = 0;

            dispatch({
                type: "setOperation",
                payload: {
                    operation,
                    values,
                    clearDisplay: true,
                    displayValue: values[0],
                    current: equals ? 0 : 1,
                }
            });
        };
    };

    const addDigit = digit => {
        let { displayValue, values, current } = state;
        const clearDisplay = state.displayValue === "0" || state.clearDisplay;
        let currentValue = clearDisplay ? "" : state.displayValue;

        if (digit === ".") {
            if (currentValue === "")
                currentValue = "0.";
            else if (currentValue.includes("."))
                return;
            else
                currentValue += ".";
        } else
            currentValue += digit;

        displayValue = currentValue;
        values[current] = parseFloat(displayValue);

        dispatch({
            type: "addDigit",
            payload: {
                displayValue, values, clearDisplay: false
            }
        });
    };

    const clearMemory = _ => {
        dispatch({ type: "clearMemory" });
    };

    return (
        <CalculatorContext.Provider
            value={{
                addDigit,
                setOperation,
                clearMemory,
                state
            }}
        >
            {children}
        </CalculatorContext.Provider>
    );
};