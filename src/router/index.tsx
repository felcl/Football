import React,{ Suspense } from 'react';
import { Route,Routes} from "react-router-dom";
import PageLoding from '../components/PageLoding';
import MainLayout from "../Layout/MainLayout";
import DeputyLayout from "../Layout/DeputyLayout";
const Home = React.lazy(() => import('../view/Home'));
const BlindBox = React.lazy(() => import('../view/BlindBox'));
const Swap = React.lazy(() => import('../view/Swap'));
export default function Router() {
  return (
    <Suspense fallback={<PageLoding></PageLoding>}>
      <Routes>
          <Route  path="/*" element={<MainLayout />}>
            <Route index  element={<Home/>}></Route>
            <Route path="BlindBox"  element={<BlindBox/>}></Route>
            <Route path="Swap"  element={<Swap/>}></Route>
          </Route>
          <Route path="/DeputyLayout" element={<DeputyLayout />}>
          </Route>
      </Routes>
    </Suspense>
  )
}
