import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";

//import CreateNewAccount from "../../Views/DashboardView/CreateNewAccountDesk";
import EmployeeSection from "../../Views/DashboardView/TeacherDesk";
import StudentSection from "../../Views/DashboardView/StudentCompleteDetailsDesk";
import EmployeeWorkDesk  from "../../Views/DashboardView/EmployeesDesk";
import SalesSection from "../../Views/DashboardView/SalesDesk";
import AssignmentSection from "../../Views/DashboardView/TaskDone";
import Logout from "../../Component/Logout/Logout";

const dashboardRoute = [
    {
        path:"/teacher",
        sideBar:"Employee Section",
        naveBar:"Employee Info",
        icon: PersonIcon,
        component: EmployeeSection
    },
    {
        path:"/student",
        sideBar:"Student Section",
        naveBar:"Student Info",
        icon: GroupIcon,
        component: StudentSection
    },
    {
        path:"/employee",
        sideBar:"Employee work Desk",
        naveBar:"Employee Info",
        icon: GroupIcon,
        component: EmployeeWorkDesk
    },
   // {
   //     path:"/create-new",
   //     sideBar:"Create Accounts",
   //     naveBar:"Create Teacher Accounts",
   //     icon: PersonAddIcon,
   //     component: CreateNewAccount
   // },
    {
        path:"/sales-accounts",
        sideBar:"Sales Section",
        naveBar:"Sales Info",
        icon:TrendingUpIcon,
        component: SalesSection
    },
    {
        path:"/assignment",
        sideBar:"Assignment Section",
        naveBar:"Assignment Info",
        icon:AssignmentLateIcon,
        component: AssignmentSection
    },
    {
        path:'/logout',
        sideBar:"Log Out",
        naveBar:"Log Out",
        icon:PowerSettingsNew,
        component:Logout
    }
];



export default dashboardRoute; 