import React, { useState ,useEffect} from "react";
import shou from "../assets/image/shou.png";
import "../assets/style/Home.scss";
import home1 from "../assets/image/home1.png";
import home2 from "../assets/image/home2.png";
import home3 from "../assets/image/home3.png";
import home4 from "../assets/image/home4.png";
import home5 from "../assets/image/home5.png";
import home6 from "../assets/image/home6.png";
import fz1 from "../assets/image/fz1.png";
import Group from "../assets/image/Group.png";
import zoobox from "../assets/image/zoobox.png";
import BScroll from "@better-scroll/core";

function Home() {
  useEffect(()=>{
    const wrapper:any = document.querySelector('.scroll')
    const scroll = new BScroll(wrapper, {
      scrollX: true,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: false, //关闭竖向滚动
    })
  },[])
  let [space, setSpace] = useState([
    {
      title: "IGO 發行",
      img: home1,
      xq: "同類型題材中首個推出IGO機制",
    },
    {
      title: "NFT 质押",
      img: home2,
      xq: "将NFT锁定在Space Ball平台或协议以",
    },
    {
      title: "合成燃燒",
      img: home3,
      xq: "引入合成燃燒機制，玩家可將低價值的NFT合成燃燒掉獲得高價值NFT",
    },
    {
      title: "NFT 交易",
      img: home4,
      xq: "可在多去中心化交易平臺和NFT市場交易。",
    },
    {
      title: "競猜娛樂",
      img: home5,
      xq: "Space Ball專注於吸引不同領域的玩家。",
    },
    {
      title: "游戲生態",
      img: home6,
      xq: "基於區塊鏈的游戲，允許玩家永遠擁有并完成掌握其游戲資產。",
    },
  ]);
  return (
    <div>
      <div className="Edition-Center">
        <div className="introduce">
          <div className="yanyu">
            <div className="name">SPACE BALL</div>
            <p className="brief">
              Space Ball是首個以體育為主題來打造的元宇審世界，人們在Space
              Ball元宇審世界裏可以交易自己的NFT、參與體育競猜、體育競技遊戲、資產交易和打造自己的虛擬社交網絡認識更多的朋友。
            </p>
            <p className="brief">
              Space
              Bll以NFT交易、體育競猜、深戲、資產交易、社交五大板塊使用真實世界的體育概念來創造引入，打造更具真實元宇宙空間沈浸式體驗，構建一個以運動，體育的元宇審世界。
            </p>
          </div>
          <div className="intimg">
            <img src={shou} alt="" />
          </div>
        </div>

        <div className="tedian">
          <div className="tename">SPACE BALL - 項目特點</div>
          <div className="tebox">
            {space.map((item, index) => {
              return (
                <div className="childbox" key={index}>
                  <div className="techild">
                    <div className="bjbox">
                      <div className="teimg">
                        <img src={item.img} alt="" />
                      </div>
                      <span className="chname">{item.title}</span>
                      <p className="chjian">{item.xq}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="system">
          <div className="sytitle">SPACE BALL - 代筆系統</div>
          <div className="qiu">
            <div className="lqiu">
              <p className="lz">SPACE BALL 生態治理</p>
            </div>
            <div className="cqiu">
              <p className="cz">雙幣系統</p>
            </div>
            <div className="rqiu">
              <p className="rz">遊戲獎勵代幣Mate Ball (MBA)</p>
            </div>
          </div>
          <div className="sybox">
            <p className="sbq">
              SBL是Space
              Ball的原生治理代幣，結合了去中心化金額（DeFi），DAO和NFT，在幣安智能鏈上創建的一種元宇宙經濟，SBL是一種開源協議，其規則由智能合約執行，SBL是一種賦予持有人SBL治理權利的BEP20代幣。
            </p>
            <div className="sbhy">
              <span className="lef">合約地址</span>
              <div className="rig">
                <span className="rigdz">Ox1452fgb......515ytrM</span>
                <div className="line"></div>
                <div className="fz1">
                  <img src={fz1} alt="" />
                </div>
              </div>
            </div>
            <p className="sbt">
              總發行量為 2 億枚代幣，將會通過銷毀基金持續銷毀其供應量
            </p>
          </div>
          <div className="group">
            <img src={Group} alt="" />
          </div>
          <p className="gro">
            捐贈銷毀:<span className="up">1,245,456,789</span>
          </p>
          <p className="gro">
            總供應量:<span className="up">:1,245,456,789</span>
          </p>
        </div>

        <div className="zoology">
          <div className="zootitle">SPACE BALL -生態治理</div>
          <div className="zoobox">
            <img src={zoobox} alt="" />
          </div>
        </div>

        <div className="roadmap">
          <div className="roatitle">SPACE BALL -　路綫圖</div>
          <div className="scroll">
            <div className="roabox">
                <div className="boxtitle">
                  <span className="boxn">2021 第二季度</span>
                  <span className="boxn">2021 第三季度</span>
                  <span className="boxn">2022 第一季度</span>
                  <span className="boxn">2022 第二季度</span>
                  <span className="boxn">2022 第三季度</span>
                </div>
                <div className="bxian"></div>
                <div className="roabtm">
                  <div className="wbtm">
                    <div className="wdian">
                      <div className="ndian"></div>
                    </div>
                    <div className="nbtm">
                      <p className="ww">
                        4月：SpaceBall概念誕生，進行可行性研究。{" "}
                      </p>
                      <p className="ww">6月：團隊建設，模型設計。 </p>
                    </div>
                  </div>
                  <div className="wbtm">
                    <div className="wdian">
                      <div className="ndian"></div>
                    </div>
                    <div className="nbtm">
                      <p className="ww">
                        4月：SpaceBall概念誕生，進行可行性研究。{" "}
                      </p>
                      <p className="ww">6月：團隊建設，模型設計。 </p>
                    </div>
                  </div>
                  <div className="wbtm">
                    <div className="wdian">
                      <div className="ndian"></div>
                    </div>
                    <div className="nbtm">
                      <p className="ww">
                        4月：SpaceBall概念誕生，進行可行性研究。{" "}
                      </p>
                      <p className="ww">6月：團隊建設，模型設計。 </p>
                    </div>
                  </div>
                  <div className="wbtm">
                    <div className="wdian">
                      <div className="ndian"></div>
                    </div>
                    <div className="nbtm">
                      <p className="ww">
                        4月：SpaceBall概念誕生，進行可行性研究。{" "}
                      </p>
                      <p className="ww">6月：團隊建設，模型設計。 </p>
                    </div>
                  </div>
                  <div className="wbtm">
                    <div className="wdian">
                      <div className="ndian"></div>
                    </div>
                    <div className="nbtm">
                      <p className="ww">
                        4月：SpaceBall概念誕生，進行可行性研究。{" "}
                      </p>
                      <p className="ww">6月：團隊建設，模型設計。 </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Home);
