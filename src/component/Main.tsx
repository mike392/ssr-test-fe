import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store";
import logo from "./../logo.svg";
import {fetchIncrementOneCounter} from "../store/reducer/counterSlice";
import {Link} from "react-router-dom";
import React from "react";

const MainPage = (props: any) => {
    const oneCounterData = useSelector((state: any) => state.Counter.oneCounter);
    const twoCounterData = useSelector((state: any) => state.Counter.twoCounter);

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
                    Learn React MAIN - Counter one ${oneCounterData} and counter two ${twoCounterData}
                </a>
                <img src={logo} alt={"algo"}/>
                <div>links</div>
                <ul>
                    <li>
                        <Link to="/onecounter">One Counter</Link>
                    </li>
                    <li>
                        <Link to="/twocounter">Two Counter</Link>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default MainPage;