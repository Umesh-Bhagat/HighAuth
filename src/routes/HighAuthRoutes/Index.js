import Dashboard from "../../Component/Dashboard/Dashboard";
import HomePage from "../../Component/FirstPage/FirstPage";

const HighrouteIndex = [
    { path:"/create-new", component: Dashboard },
    { path:"/teacher", component: Dashboard },
    { path:"/student", component: Dashboard },
    { path:"/employee", component: Dashboard },
    { path:"/sales-accounts", component: Dashboard },
    { path:"/assignment",  component: Dashboard },
    { path:"/logout" , component:Dashboard},
    {path:"/home", component:HomePage}
]

export default HighrouteIndex;