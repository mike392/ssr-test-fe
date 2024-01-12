import logo from './../logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store";
import {fetchIncrementTwoCounter} from "../store/reducer/counterSlice";
import {Link} from "react-router-dom";
import React from "react";

const TwoCounter = (props: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const counterData = useSelector((state: any) => state.Counter.twoCounter);
    const loading = useSelector((state: any) => state.Counter.loading);
    const error = useSelector((state: any) => state.Counter.error);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React TWO - ${counterData}
                </a>
                <button onClick={() => dispatch(fetchIncrementTwoCounter(counterData))}>Increment Counter</button>
                <Link to="/">Home</Link>
            </header>
        </div>
    )
}

export default TwoCounter;