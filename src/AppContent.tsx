import React, {Suspense} from "react";
import logo from './logo.svg';
import {Link, Route} from "react-router-dom";
import {AsyncOneCounter, AsyncTwoCounter} from "./component";
import {Routes} from "react-router";
import MainPage from "./component/Main";

const AppContent = (props: any) => {

    return (
        // <button>HELLO INSIDE</button>
        // <Suspense>
        <><Routes>
            <Route path="/" Component={MainPage} />
            <Route
                path="/onecounter"
                Component={AsyncOneCounter}
            />
            <Route
                path="/twocounter"
                Component={AsyncTwoCounter}
            />
        </Routes>
         {/*</Suspense>*/}
    </>
    );
}

export default AppContent;