import React,{ Suspense } from 'react';
import { Route,Routes} from "react-router-dom";
import PageLoding from '../components/PageLoding';
import MainLayout from "../Layout/MainLayout";
import DeputyLayout from "../Layout/DeputyLayout";
const Home = React.lazy(() => import('../view/Home'));
const BlindBox = React.lazy(() => import('../view/BlindBox'));
const Swap = React.lazy(() => import('../view/Swap'));
const NFT = React.lazy(() => import('../view/NFT'));
const SBL = React.lazy(() => import('../view/SBL'));
const Invitation = React.lazy(() => import('../view/Invitation'));
export default function Router() {
  return (
    <Suspense fallback={<PageLoding></PageLoding>}>
      <Routes>
          <Route  path="/*" element={<MainLayout />}>
            <Route index  element={<Home/>}></Route>
            <Route path="BlindBox"  element={<BlindBox/>}></Route>
            <Route path="Swap"  element={<Swap/>}></Route>
            <Route path="NFT"  element={<NFT/>}></Route>
            <Route path="SBL"  element={<SBL/>}></Route>
            <Route path="Invitation"  element={<Invitation/>}></Route>
          </Route>
          <Route path="/DeputyLayout" element={<DeputyLayout />}>
          </Route>
      </Routes>
    </Suspense>
  )
}
