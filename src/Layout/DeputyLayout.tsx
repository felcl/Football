import { Outlet } from "react-router-dom";

const DeputyLayout :React.FC =() => (
    <div>
        副布局路由
      <Outlet />
    </div>
  );
export default DeputyLayout;