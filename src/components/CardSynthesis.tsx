import React, { useState } from 'react';
import { Modal, Pagination } from 'antd';
import RuleImg from '../assets/image/CardSynthesis.png'
import FootballImg from '../assets/image/Rectangle 49.png'
import AddImg from '../assets/image/Union.png'
import dropDownIcon from '../assets/image/dropDownIcon.png'
import '../assets/style/componentsStyle/DropDown.scss'
interface CardSynthesisPropsType {
    isShow: boolean
}
function CardSynthesis(props: CardSynthesisPropsType) {
    return (
        <>
            <Modal visible={props.isShow}
                className='CardSynthesis'
                centered
                maskClosable
                width={'1119px'}
                closable={false}
                footer={null}
            >
                <div className='Title'>卡牌合成</div>
                <div className='Handle'>
                    <div className="SynthesisHandle">
                        <div className="SynthesisItems">
                            <div className="CardItems">
                                {/* 三个150px水平排列 */}
                                <div className="CardItemsLeft"><img src={FootballImg}></img>
                                </div>
                                <div className="Add"><img src={AddImg} /></div>
                                <div className="CardItemsRight"><div className="CardImg"></div></div>
                            </div>
                            <div className="CardItem">
                                <div className="CardImg">
                                </div>
                                <div className="Decorate">
                                    <div className="Price">需要消耗：</div><div className='Number'>0.2BNB</div>
                                </div>
                                <button>開始合成</button>

                                <div className='Tip'><div className='TipContent'>卡牌合成規則</div><div className='TipImg'><img src={RuleImg} /></div></div>
                            </div>
                        </div>
                    </div>
                    <div className='SynthesisList'>
                        <div className="Category">
                            <div className="dropDown">
                                全部類型
                                <img src={dropDownIcon} alt="" />
                            </div>
                            {/* 三个水平排列（保证布局一致） */}
                            <div></div>
                            <div className="Page">
                                <Pagination simple total={9} />
                            </div>
                        </div>
                        <div className="CardListBox">
                            <div className="SynthesisCardList">
                                <div className="Img"></div>
                                <div className="Id">ID：456978</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default CardSynthesis