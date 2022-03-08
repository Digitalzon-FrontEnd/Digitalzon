import React, { useRef, useState } from "react";
import "./SurveyRegist.css";

function SurveyRegist ({ modalClose }) {
    const fileInput = useRef();
    const fileName = useRef();
    const panelNum = useRef();
    const movefileName = () => {
        fileName.current.value = fileInput.current.value;
        panelNum.current.innerText = `8,545건`
    }
    const [checkSex, setCheckSex] = useState(false);
    const [checkAge, setCheckAge] = useState(false); 
    const [checkMobileOperator, setCheckMobileOperator] = useState(false);
    const [checkElectricDevice, setCheckElectricDevice] = useState(false);
    return(
        <div className="surveyRg">
            <div className="svRg-pageTitle-box">
                <h3 className="svRg-pageTitle">신규설문 등록</h3>
                <button className="svRg-btn-close" onClick={modalClose}>X</button>
            </div>
            <form className="svRg-form-box" action="/">
                <ul className="svRg-form-lists">
                    <li className="svRg-form-list">
                        <label htmlFor="">조사명</label>
                        <input id="svRgSurveyTitle" type="text" />
                    </li>
                    <li className="svRg-form-list">
                        <label htmlFor="svRgSurveyUrl">설문링크</label>
                        <input id="svRgSurveyUrl" type="url" placeholder="설문 URL을 기입해주세요" />
                    </li>
                    <li className="svRg-form-list">
                        <label htmlFor="svRgNeededSamples">필요샘플 수</label>
                        <input id="svRgNeededSamples" type="number" placeholder="숫자만 입력가능합니다." />
                        <label htmlFor="svRgPointPerPerson" className="svRg-label-point">참여 포인트</label>
                        <input id="svRgPointPerPerson" type="number" placeholder="숫자만 입력가능합니다." />
                    </li>
                    <li className="svRg-form-list">
                        <label htmlFor="svRgFileName">방송패널 등록</label>
                        <input id="svRgFileRegister" type="file" ref={fileInput} onChange={movefileName} />
                        <label id="svRgFileBtn" className="btn-s btn-o" htmlFor="svRgFileRegister">파일 등록</label>
                        <input id="svRgFileName" ref={fileName} readOnly />
                        <p id="svRGPanelNum" ref={panelNum}></p>
                    </li>
                    <li className="svRg-form-list">
                        <label htmlFor="svRgDateFrom">요청기간</label>
                        <input id="svRgDateFrom" type="date" />
                        <label id="svRgWave" htmlFor="svRgDateTo">~</label>
                        <input id="svRgDateTo" type="date" />
                    </li>
                    <li className="svRg-form-list">
                        <div className="svRg-profile-title">설문 프로파일</div>
                        <ul className="svRg-profile-lists">
                            <li className="svRg-profile-list">
                                <h6 className="svRg-profile-steps">1단계</h6>
                                <dl className="svRg-options-box">
                                    <dt className="svRg-options-depth1"><input type="checkbox" onChange={e => setCheckSex(e.target.checked)}/>성별</dt>
                                    {checkSex ?
                                    <dd>
                                        <select>
                                            <option value="male">남성</option>
                                            <option value="female">여성</option>
                                        </select>
                                    </dd> : null }
                                </dl>
                                <dl className="svRg-options-box">
                                    <dt className="svRg-options-depth1"><input type="checkbox" onChange={e => setCheckAge(e.target.checked)} />나이</dt>
                                    {checkAge ?
                                    <dd id="svRgOptionDepth2Age">
                                        <input id="svRgInputMinage" type="number" min={0} max={100} defaultValue="" />
                                        <label htmlFor="svRgInputMinage">세 이상</label>
                                        <input id="svRgInputMaxage" type="number" min={0} max={100} defaultValue="" />
                                        <label htmlFor="svRgInputMaxage">세 이하</label>
                                    </dd> : null }
                                </dl>
                            </li>
                            <li className="svRg-profile-list">
                                <h6 className="svRg-profile-steps">2단계</h6>
                                <dl className="svRg-options-box">
                                    <dt className="svRg-options-depth1"><input type="checkbox" onChange={e => setCheckMobileOperator(e.target.checked)} />통신사</dt>
                                    {checkMobileOperator ?
                                    <dd>
                                        <select>
                                            <option value="SKT">SKT</option>
                                            <option value="KT">KT</option>
                                            <option value="LG U+">LG U+</option>
                                        </select>
                                    </dd> : null }
                                </dl>
                            </li>
                            <li className="svRg-profile-list">
                                <h6 className="svRg-profile-steps">3단계</h6>
                                <dl className="svRg-options-box">
                                    <dt className="svRg-options-depth1"><input type="checkbox" onChange={e => setCheckElectricDevice(e.target.checked)} />전자기기</dt>
                                    { checkElectricDevice ?
                                    <dd>
                                        <select>
                                            <optgroup label="휴대폰">
                                                <option value="갤럭시S20">갤럭시S20</option>
                                                <option value="갤럭시S21">갤럭시S21</option>
                                                <option value="아이폰12">아이폰12</option>
                                                <option value="아이폰13">아이폰13</option>
                                            </optgroup>
                                            <optgroup label="노트북">
                                                <option value="맥북프로">맥북 프로</option>
                                                <option value="삼성울트라">삼성 갤럭시북 프로</option>
                                                <option value="LG 그램">LG 그램 2022</option>
                                            </optgroup>
                                        </select>
                                    </dd> : null }
                                </dl>
                            </li>
                        </ul>
                    </li>
                    <li className="svRg-form-list" id="svRgSubmitBtnList">
                        <button className="svRg-btn-submit btn-s btn-o" type="submit">저장</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default SurveyRegist;