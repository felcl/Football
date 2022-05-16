import React from 'react'
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
  return (
    <div>SBL
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