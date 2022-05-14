import React , {useState} from 'react'
import Reward from '../components/Reward'
import Node from '../components/Node'
import '../assets/style/SBL.scss'
import AwardMechanism from '../components/AwardMechanism'
import '../assets/style/componentsStyle/AwardMechanism.scss'
import GainRecording from '../components/GainRecording'
import '../assets/style/componentsStyle/GainRecording.scss'
import TeamMachine from '../components/TeamMachine'
import '../assets/style/componentsStyle/TeamMachine.scss'
import TeamEarnings from '../components/TeamEarnings'
import '../assets/style/componentsStyle/TeamEarnings.scss'
import GoldRecord from '../components/GoldRecord'
import '../assets/style/componentsStyle/GoldRecord.scss'
import GlodMechanism from '../components/GlodMechanism'
import '../assets/style/componentsStyle/GlodMechanism.scss'
import GlodJdSy from '../components/GlodJdSy'
import '../assets/style/componentsStyle/GlodJdSy.scss'


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
        {/* 金币节点收益记录 */}
        <GlodJdSy></GlodJdSy>
        {/* 金币节点奖励机制 */}
        <GlodMechanism></GlodMechanism>
        {/* 金币节点申请记录 */}
        <GoldRecord></GoldRecord>
        {/* 团队奖励的收益记录 */}
        <TeamEarnings></TeamEarnings>
        {/* 团队奖励机制 */}
        <TeamMachine></TeamMachine>
        {/* 推荐奖励机制 */}
        <AwardMechanism></AwardMechanism>
        {/* 推荐收益记录 */}
        <GainRecording></GainRecording>
    </div>
  )
}
export default React.memo(SBL)