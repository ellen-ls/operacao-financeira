import { IoHomeSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key:'home',
        label: 'Home',
        path:'/usuario',
        icon:<IoHomeSharp />
    },
    {
        key:'clientes',
        label: 'Clientes',
        path:'/clientes',
        icon:<FaPeopleGroup />
    },
    {
        key:'fornecedores',
        label: 'Fornecedores',
        path:'/fornecedores',
        icon:<FaTruck />
    },
    {
        key:'pagamentos',
        label: 'Pagamentos',
        path:'/pagamentos',
        icon:<MdPayment />
    },
]