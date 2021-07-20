import React, { Suspense } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LadingPage from "./views/LadingPage";
import "antd/dist/antd.css";


function App() {

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
        <BrowserRouter> 
        <div >
          
            <Switch>
                <Route exact path="/" component={LadingPage} />
            </Switch>
        </div>
      </BrowserRouter> 
    </Suspense>
  );
}


export default App;
