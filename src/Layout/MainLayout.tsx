import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import { AddrHandle } from "../utils/tool";
import { useWeb3React } from "@web3-react/core";
import logo from "../assets/image/logo.png";
import FaceBook from "../assets/image/FaceBook.png";
import GitHub from "../assets/image/GitHub.png";
import Telegram from "../assets/image/Telegram.png";
import Medium from "../assets/image/Medium.png";
import Twitter from "../assets/image/Twitter.png";
import Lang from "../assets/image/Lang.png";
import "../assets/style/layout.scss";
import { Menu, Dropdown } from "antd";
const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  let { t, i18n } = useTranslation();
  const web3React = useWeb3React();
  function getparent(triggerNode: any) {
    return triggerNode.parentNode;
  }
  function changeLanguage(lang: any) {
    window.localStorage.setItem("lang", lang.key);
    i18n.changeLanguage(lang.key);
  }
  const menu = (
    <Menu
      onClick={changeLanguage}
      items={[
        {
          label: <span className="LangItem">繁體</span>,
          key: "zh",
        },
        {
          type: "divider",
        },
        {
          label: <span className="LangItem">English</span>,
          key: "en",
        },
      ]}
    />
  );
  const location = useLocation();
  const navigate = useNavigate();
  function menuActive(Path: string) {
    if (Path === location.pathname) {
      return "MenuItem pointer active";
    } else {
      return "MenuItem pointer";
    }
  }
  const HeadMenu = (
    <Menu>
      <Menu.Item
        key="0"
        onClick={() => {
          navigate("/");
        }}
      >
        首頁
      </Menu.Item>
      <Menu.Item
        key="1"
        onClick={() => {
          navigate("/BlindBox");
        }}
      >
        寶箱
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => {
          navigate("/Swap");
        }}
      >
        交易市場
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={() => {
          navigate("/NFT");
        }}
      >
        NFT
      </Menu.Item>
      <Menu.Item
        key="4"
        onClick={() => {
          navigate("/SBL");
        }}
      >
        SBL
      </Menu.Item>
      <Menu.Item
        key="5"
        onClick={() => {
          navigate("/Invitation");
        }}
      >
        邀請
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout className="layout">
      <Header style={{ position: "fixed", zIndex: 999, width: "100%" }}>
        <div className="Edition-Center HeaderNav">
          <Dropdown
            overlay={HeadMenu}
            getPopupContainer={getparent}
            trigger={["click"]}
          >
            <img className="MobileHeadMenu" src={logo} alt="" />
          </Dropdown>
          <img
            className="HeadMenu"
            src={logo}
            onClick={() => {
              navigate("/");
            }}
            alt=""
          />
          <div className="MenuList">
            <div
              className={menuActive("/")}
              onClick={() => {
                navigate("/");
              }}
            >
              {t("Home")}
            </div>
            <div
              className={menuActive("/BlindBox")}
              onClick={() => {
                navigate("/BlindBox");
              }}
            >
              寶箱
            </div>
            <div
              className={menuActive("/Swap")}
              onClick={() => {
                navigate("/Swap");
              }}
            >
              交易市場
            </div>
            <div
              className={menuActive("/NFT")}
              onClick={() => {
                navigate("/NFT");
              }}
            >
              NFT
            </div>
            <div
              className={menuActive("/SBL")}
              onClick={() => {
                navigate("/SBL");
              }}
            >
              SBL
            </div>
            <div
              className={menuActive("/Invitation")}
              onClick={() => {
                navigate("/Invitation");
              }}
            >
              邀請
            </div>
            <Dropdown
              overlay={menu}
              placement="bottom"
              overlayClassName="LangDropDown"
              trigger={["click"]}
              arrow={{ pointAtCenter: true }}
            >
              <div className="Lang">
                <img src={Lang} alt="" />
                語言切換 - {i18n.language === "zh" ? "繁" : "English"}
              </div>
            </Dropdown>
            {web3React.active ? (
              <>
                <div className="Connect linear-gradient pointer">
                  {AddrHandle(web3React.account as string)}
                </div>
              </>
            ) : (
              <>
                <div className="Connect linear-gradient pointer">Connect</div>
              </>
            )}
          </div>
          <div className="Mobile">
            {web3React.active ? (
              <>
                <div className="Connect linear-gradient pointer">
                  {AddrHandle(web3React.account as string)}
                </div>
              </>
            ) : (
              <>
                <div className="Connect linear-gradient pointer">Connect</div>
              </>
            )}
          </div>
        </div>
      </Header>
      <Content className="MainContent" style={{ marginTop: 64 }}>
        <Outlet />
      </Content>
      <Footer>
        <div className="footerLink">
          <img src={logo} alt="" />
          <div className="SOCIALRow">
            <div className="SOCIAL">SOCIAL</div>
            <div className="SOCIALItem">
              <img src={Twitter} alt="" />
              <span>Twitter</span>
            </div>
            <div className="SOCIALItem">
              <img src={Medium} alt="" />
              <span>Medium</span>
            </div>
            <div className="SOCIALItem">
              <img src={Telegram} alt="" />
              <span>Telegram</span>
            </div>
            <div className="SOCIALItem">
              <img src={GitHub} alt="" />
              <span>GitHub</span>
            </div>
            <div className="SOCIALItem">
              <img src={FaceBook} alt="" />
              <span>FaceBook</span>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};
export default MainLayout;
