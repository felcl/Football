import { Outlet , useNavigate , useLocation} from "react-router-dom";
import { Layout } from 'antd';
import logo from '../assets/image/logo.png'
import '../assets/style/layout.scss'
const { Header, Content} = Layout;

const MainLayout :React.FC =() =>{
    const location = useLocation();
    const navigate = useNavigate();
    function menuActive(Path: string){
        if(Path === location.pathname){
            return 'MenuItem pointer active'
        }else{
            return 'MenuItem pointer'
        }
    }
    return(
        <Layout className="layout">
            <Header className="MainSider">
                <div className="Edition-Center HeaderNav">
                    <img src={logo} alt="" />
                    <div className="MenuList">
                        <div className={menuActive('/')} onClick={()=>{navigate('/')}}>
                        家
                        </div>
                        <div  className={menuActive('/BlindBox')} onClick={()=>{navigate('/BlindBox')}}>
                        寶箱
                        </div>
                        <div className={menuActive('/Swap')} onClick={()=>{navigate('/Swap')}}>
                        交易市場
                        </div>
                        <div className={menuActive('/NFT')} onClick={()=>{navigate('/NFT')}}>
                        NFT
                        </div>
                        <div className={menuActive('/SBL')} onClick={()=>{navigate('/SBL')}}>
                        SBL
                        </div>
                        <div className="MenuItem pointer">
                        邀請
                        </div>
                        <div className="Connect linear-gradient pointer">
                        Connect
                        </div>
                    </div>
                </div>
            </Header>
            <Layout className="layoutMain">
                <Content className="MainContent" >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
};
export default MainLayout;