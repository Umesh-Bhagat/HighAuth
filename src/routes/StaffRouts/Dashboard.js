import CreateIcon from '@material-ui/icons/Create';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import CreateNotes from "../../Views/TeachersDashboardView/Notes";
import ProfileSection from "../../Views/TeachersDashboardView/Profile";
import ProgressBoosterSection  from "../../Views/TeachersDashboardView/ProgressBooster";
import SalesSection from "../../Views/TeachersDashboardView/Sales";
import StudentSection from "../../Views/TeachersDashboardView/StudentDesk";

const teacherDashboardRoute = [
    {
        path:"/notes",
        sideBar:"Create Notes",
        naveBar:"Create Notes",
        icon: CreateIcon,
        component: CreateNotes
    },
    {
        path:"/profile",
        sideBar:"Profile",
        naveBar:"Profile Info",
        icon: PersonIcon,
        component: ProfileSection
    },
    {
        path:"/progressBooster",
        sideBar:"Progress Booster",
        naveBar:"Progress Info",
        icon: TrendingUpIcon,
        component: ProgressBoosterSection
    },
    {
        path:"/salesAccounts",
        sideBar:"Sales Section",
        naveBar:"Sales Info",
        icon:AttachMoneyIcon,
        component: SalesSection
    },
    {
        path:"/studentSection",
        sideBar:"Student Section",
        naveBar:"Student Info",
        icon:GroupIcon,
        component: StudentSection
    }
];



export default teacherDashboardRoute;