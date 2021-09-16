import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Redirect ,Switch } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import HighAuthRoutes from "./routes/HighAuthRoutes/Index";
import HighAuthHomePage from "./routes/HighAuthRoutes/HomePage"; 
import StaffRoutes from "./routes/StaffRouts/Index";
import StaffHomePageRoutes from "./routes/StaffRouts/HomePage";




let routeArr = [];
routeArr = HighAuthRoutes.concat(HighAuthHomePage);

ReactDOM.render(
 
   <Router>
     <Switch>
       {
         (routeArr.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          }))    
       }
     </Switch>
   </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
