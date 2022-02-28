import React from "react";
import './InfoInput.css';
import Modal from "./Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const InfoInput = () => {
    const [showCorp, setShowCorp] = React.useState(false);
    const onClick = () => setShowCorp(true);
    const onClicked = () => setShowCorp(false);
    {/*const isCheckBoxClicked = () => {
        setShowCorp(!showCorp);
    };*/}

    const [openModal,setopenModal] = useState(false);

    const [switchOn, switchChange] = useState(false);
    const onClickEmail = () => switchChange(true);

    const [passwordType, setPasswordType] = useState({
        type: 'password',
        name: 'password',
        visible: false
    });
    const handlePasswordType = e => {
        setPasswordType(() => {
            if (!passwordType.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    };
    
    const [pwType, setPwType] = useState({
        type: 'password',
        name: 'passwordCheck',
        visible: false
    });
    const handlePwType = e => {
        setPwType(() => {
            if (!pwType.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    };

    {/*const handleSubmit = (e) => {
        e.preventDefault(); }
    */} //지금은 submit이랑 백엔드랑 할 수 없으니 일단은 action="/complete"로 하고 추후수정

    return <div className="inner">
        <div className="termsInner">
            {openModal && <Modal closeModal={setopenModal}/>}
            <div className="signupBox">
                <h4 id="termsTitle">회원가입</h4>
                <div className="stepBox">
                <p>Step1. 약관 동의</p>
                <p id="signupEnter">Step2. 정보 입력</p>
                <p>Step3. 가입 완료</p>
                </div>
            </div>
            <form className="registerBox" action="/complete"  /*onSubmit={handleSubmit}*/>
                <p id="registerTitle">기본정보 입력 <span className="essential">&#40;필수&#41;</span></p>
                <div className="registerPer">
                    <div className="membership">
                        <label id="checkMbs">회원구분
                        <button onClick={()=>{setopenModal(true)}} type="button">
                            <p id="transferGuideBtn">?</p>
                        </button>
                        </label>
                        <input type="radio" name="memCheck"  onClick={onClicked}  required></input>
                        <label>개인회원</label>
                        <input type="radio"  name="memCheck" onClick={onClick}></input>
                        <label>법인회원</label>
                    </div>
                    <div>
                    <div className="corporationBox">
                        { showCorp ? 
                        <div className="corporation">
                            <div className="corName">
                                <label>법인명</label>
                                <input  required></input>
                            </div>
                            <div className="corNum">
                                <label>사업자등록번호</label>
                                <input  required></input>
                                <button type="submit" type="button"><p>법인 조회</p></button>
                            </div>
                        </div> 
                        : null }
                    </div>
                    </div>
                    <div className="perInfo">
                        <div className="idBox">
                            <label>아이디</label>
                            <input type="id" name="userId"
                            required></input>
                            <button type="button">중복확인</button>
                        </div>
                        <div className="userNameBox">
                            <label>사용자 이름</label>
                            <input type="text"  name="userName"
                            required></input>
                        </div>
                        <div className="pwBox">
                            <label>비밀번호 입력</label>
                            <input type={passwordType.type} placeholder="영문 대소문자/숫자 혼합 10~15자리 내로 입력해주세요."   name="password"
                            required></input>
                            <button className="eyesIcon" type="button" name="password2" onClick={handlePasswordType}>비밀번호 문자 표시</button>
                        </div>
                        <div className="pwCheckBox">
                            <label>비밀번호 확인</label>
                            <input type={pwType.type} name="passwordCheck"
                            required></input>
                            <button className="eyesIcon" type="button" name="passwordCheck2" onClick={handlePwType}>비밀번호 문자 표시</button>
                        </div>
                        <div className="callBox">
                            <label>휴대폰 번호</label>
                            <input type="tell" name="phoneNumber"
                            required></input>
                            <button type="button">인증번호 발송</button>
                        </div>
                        <div className="numInput">
                            <label>인증번호 입력</label>
                            <input type="text" name="certicicationNumber"
                            required></input>
                            <button type="button">확인</button>
                        </div>
                        <div className="emailBox">
                            <label>이메일 입력</label>
                            <input type="email"  name="email"
                            required/>
                            <button type="button" onClick={onClickEmail}>{switchOn ? <div>인증완료</div> : <div>인증</div>}</button>
                        </div>
                    </div>
                </div>
                <div className="historyBtn">
                <button>
                    <Link to="/">
                        <h2 id="backBtn">이전페이지</h2>
                    </Link>
                </button>
                <button type="submit">
                {/*  <Link to={'/complete'}> */}
                        <h2 id="joinBtn">회원가입</h2>
                    {/*    </Link> */}
                </button>
                </div>
            </form>
        </div>
    </div>;
};


export default InfoInput;