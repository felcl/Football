import { Route,Routes} from "react-router-dom";
import Home from '../view/Home'
import MainLayout from "../Layout/MainLayout";
import DeputyLayout from "../Layout/DeputyLayout";

export default function Router() {
  return (
    <Routes>
        <Route  path="/*" element={<MainLayout />}>
          <Route index  element={Home()}></Route>
        </Route>
        <Route path="/DeputyLayout" element={<DeputyLayout />}>
        </Route>
    </Routes>
)
}
