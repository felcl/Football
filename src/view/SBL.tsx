import React , {useState} from 'react'
import Reward from '../components/Reward'
import Node from '../components/Node'
import '../assets/style/SBL.scss'

function SBL() {
    let [Tab,setTab] = useState(0)
  return (
    <div>
        <div className="Edition-Center">
            <div className="SwapTitle">
            SBL
            </div>
            <div className="TabRow">
                <div className={Tab ===0 ? "TabItem linear-gradient":"TabItem Inactivation"} onClick={() =>setTab(0)}>獎勵</div>
                <div className={Tab ===1 ? "TabItem linear-gradient":"TabItem Inactivation"}onClick={() =>setTab(1)}>鑄幣節點</div>
            </div>
            {
                Tab ===0 && <>
                {/* 奖励模块 */}
                <Reward></Reward>
                </>
            }
            {
                Tab ===1 && <>
                {/* 铸币节点模块 */}
                <Node></Node>
                </>
            }
        </div>
    </div>
  )
}
export default React.memo(SBL)