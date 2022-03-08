import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile-box">
      <div className="inner-800">
        <div className="profile-main-box">
          <h2 className="profile-title">설문 프로파일</h2>
        </div>
        <div className="profile-sub-title-box">
          <h3 className="profile-sub-title">재전송 시도 내역</h3>
          <div className="profile-sub-des-box">
            <span className="profile-sub-des"> 21.10.01 13:38 </span>
            <span className="profile-sub-des">3,000 건</span>
          </div>
          <h3 className="profile-sub-title">설문 승인 여부</h3>
          <div className="profile-sub-des-box">
            <span className="profile-sub-des">21.10.01 13:38 </span>
            <span className="profile-sub-des">설문거부 (설문 미적합)</span>
          </div>
        </div>
        <div className="profile-footer-btn-box">
          <button className="profile-footer-btn btn-o  btn-s">수정</button>
          <Link to="/">
            <button className="profile-footer-btn btn-o  btn-s">목록</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
