import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const BusinessName = (props) => {
    return (
        <div className='wrap'>
            <div className='contactMain'>
                <h2>{props.brand}</h2>
                <img className='mainImage1' src='./images/contact01.png' alt='contact1' width='100%'/>
                <div className='contactInner'>
                    <h3>What happen?<br/>Please contact to Email</h3>
                    <hr/>
                    <a href='mailto:heun3316@naver.com'>heun3316@naver.com</a>
                </div>
            </div>
            <div className='contactCont'>
                <div className='cont1'>
                    <h3>궁금한 점이 있으신가요?</h3>
                    <p>고민하지 마시고 바로 문의주세요.</p>
                    <p>24시간 내로 확인 후 답변드립니다.</p>
                </div>
                <a href='mailto:heun3316@naver.com'>문의하기 &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </div>
            <div className='contactCont2'>
                <div className='contLeft'>
                    <img src='./images/contact02.webp' width='70%' alt='contact2' />
                </div>
                <div className='contRight'>
                    <h3>Location</h3>
                    <p>경기도 과천시 별양로 110</p>
                    <p>전화번호: &nbsp;010-7212-8581</p>
                    <p>오시는길:</p>
                    <p>과천봉담도시고속화도로 과천IC가 단지 밑에 위치해있으며, 4호선 과천역이 단지 서쪽에 위치해 있습니다. 미래에 위례과천선의 문원역이 들어설 예정입니다.</p>
                </div>
            </div>
        </div>
    );
}

function Contact() {
    return (
    <>
        <BusinessName brand="Contact" />
    </>
    );
}

export default Contact;