import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
const { Header, Content} = Layout;

const MainLayout :React.FC =() =>{
    // const navigate = useNavigate();
    return(
        <Layout className="layout">
            <Header className="MainSider">
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