import Dashboard from "../../Component/Dashboard/Dashboard";
import Logout from "../../Component/Logout/Logout";

const teachersRouteIndex = [
    { path:"/notes", component: Dashboard },
    { path:"/profile", component: Dashboard },
    { path:"/progressBooster", component: Dashboard },
    { path:"/salesAccounts", component: Dashboard },
    { path:"/studentSection", component: Dashboard },
    { path:"/logout" , component:Logout}
]

export default teachersRouteIndex;