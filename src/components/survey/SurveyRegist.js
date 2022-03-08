import React, { useState } from "react";
import "./SurveyRegist.css";

function SurveyRegist () {
    const [checkSex,setCheckSex] = useState(false);
    const test = (e) => {
        setCheckSex(e.target.checked);
    }
    return(
        <div className="surveyRg">
            <div className="svRg-pageTitle-box">
                <h3 className="svRg-pageTitle">신규설문 등록</h3>
                <button className="svRg-btn-close">X</button>
            </div>
            <form className="svRg-form-box" action="/survey">
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
                        <input id="svRgFileRegister" type="file" />
                        <label id="svRgFileBtn" className="btn-s btn-o" htmlFor="svRgFileRegister">파일 등록</label>
                        <input id="svRgFileName" readOnly />
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
                                    <dt className="svRg-options-depth1"><input type="checkbox" name="sex" onChange={test}/>성별</dt>
                                    {checkSex ?
                                    <dd>
                                        <select>
                                            <option value="male">남성</option>
                                            <option value="female">여성</option>
                                        </select>
                                    </dd> : null }
                                </dl>
                                <dl className="svRg-options-box">
                                    <dt className="svRg-options-depth1"><input type="checkbox" name="age" />나이</dt>
                                    <dd>
                                        <input type="range" />
                                    </dd>
                                </dl>
                            </li>
                            <li className="svRg-profile-list">
                                <h6 className="svRg-profile-steps">2단계</h6>
                                <dl className="svRg-options-box">
                                    <dt className="svRg-options-depth1"><input type="checkbox" />통신사</dt>
                                    <dd>
                                        <select>
                                            <option value="SKT">SKT</option>
                                            <option value="KT">KT</option>
                                            <option value="LG U+">LG U+</option>
                                        </select>
                                    </dd>
                                </dl>
                            </li>
                            <li className="svRg-profile-list">
                                <h6 className="svRg-profile-steps">3단계</h6>
                                <dl className="svRg-options-box">
                                    <dt className="svRg-options-depth1"><input type="checkbox" />전자기기</dt>
                                    <dd>
                                        <select>
                                            <option value="SKT">SKT</option>
                                            <option value="KT">KT</option>
                                            <option value="LG U+">LG U+</option>
                                        </select>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className="svRg-btn-submit btn-s btn-o" type="submit">저장</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default SurveyRegist;