import React from 'react'
import AwardMechanism from '../components/AwardMechanism'
import GainRecording from '../components/GainRecording'
import TeamMachine from '../components/TeamMachine'
import TeamEarnings from '../components/TeamEarnings'
import GoldRecord from '../components/GoldRecord'
import GlodMechanism from '../components/GlodMechanism'
import GlodJdSy from '../components/GlodJdSy'
import DonateSucceed from '../components/DonateSucceed'
import DonateRule from '../components/DonateRule'
import DonateDestroy from '../components/DonateDestroy'
import ReleaseMechanusm from '../components/ReleaseMechanusm'
import DonationRecord from '../components/DonationRecord'







function SBL() {
  return (
    <div>SBL
      {/* 捐赠奖励，收益记录 */}
      <DonationRecord></DonationRecord>
      {/* 捐赠奖励，释放机制 */}
      <ReleaseMechanusm></ReleaseMechanusm>
      {/* 捐赠销毁，销毁记录 */}
      <DonateDestroy></DonateDestroy>
      {/* 捐赠规则 */}
      <DonateRule></DonateRule>
      {/* 捐赠销毁捐赠成功 */}
      <DonateSucceed></DonateSucceed>
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