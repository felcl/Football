import React from "react"
import CardDetails from '../components/CardDetails'
import '../assets/style/carddetails.scss'

function Swap() {
  return (
    <div>
      <div className="Edition-Center">  
        交易场
        <CardDetails></CardDetails>
      </div>
    </div>
  )
}
export default React.memo(Swap)