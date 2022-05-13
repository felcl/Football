import { Outlet , useNavigate } from "react-router-dom";
import { Layout } from 'antd';
import logo from '../assets/image/logo.png'
import '../assets/style/layout.scss'
const { Header, Content} = Layout;

const MainLayout :React.FC =() =>{
    const navigate = useNavigate();
    return(
        <Layout className="layout">
            <Header className="MainSider">
                <div className="Edition-Center HeaderNav">
                    <img src={logo} alt="" />
                    <div className="MenuList">
                         <div className="MenuItem pointer">
                        家
                        </div>
                        <div className="MenuItem pointer" onClick={()=>{navigate('/BlindBox')}}>
                        寶箱
                        </div>
                        <div className="MenuItem pointer" onClick={()=>{navigate('/Swap')}}>
                        交易市場
                        </div>
                        <div className="MenuItem pointer" onClick={()=>{navigate('/NFT')}}>
                        NFT
                        </div>
                        <div className="MenuItem pointer" onClick={()=>{navigate('/SBL')}}>
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