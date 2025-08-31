import Dashboard from "../components/Head";
import { FaHome } from "react-icons/fa";
import { FaCircleUser , FaUserPlus} from "react-icons/fa6";
import { LiaTableSolid } from "react-icons/lia";
import { IoIosNotifications } from "react-icons/io";
import { TbDeviceMobileShare } from "react-icons/tb";
import { IoCameraReverse } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

const Info =  {
    material:'material tailwind dashboard',
    dashboard:[
        {id:1 , name:'dashboard' , icon:FaHome , link: '/'},
        {id:2 , name:'profile' , icon:FaCircleUser , link: '/profile'},
        {id:3 , name:'tables' , icon:LiaTableSolid , link:'/tables' },
        {id:4 , name:'notifications' , icon:IoIosNotifications , link:'/notification'}
    ],
    auth:'auth pages',
    sign:[
        {id:1 , name:'sign in' , icon:TbDeviceMobileShare , link:''},
        {id:2 , name:'sign up' , icon: FaUserPlus , link:''}
    ],
    home:[
        {id:1 , name:'today\'s money ' , money:'$53k' , percent:'+55%' , text:'than last week' , icon: IoCameraReverse},
        {id:2 , name:'today\'s user ' , money:'2,300' , percent:'+3%' , text:'than last month', icon: FaUser},
        {id:3 , name:'new clients ' , money:'3,462 ' , percent:'-2%' , text:'than yesterday' , icon: FaUserPlus},
        {id:4 , name:'sales' , money:'$103,430' , percent:'+5%' , text:'than yesterday' , icon: MdOutlineSignalCellularAlt},
    ]
};

export default Info;