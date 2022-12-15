import React from "react";
import "../styles/ProfileImage.css";
import { useNavigate, useLocation } from "react-router-dom";

const ProfileImage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="ProfileEditBody">
      <nav className="ProfileTopMenu">
        <div className="ProfileTopLogoArea">
          <div className="ProfileLogos">
            <span
              className="ProfileLogo"
              onClick={() => {
                navigate("/");
              }}
            />
            <span className="ProfileLogo2" />
          </div>
          <div className="ProfileInfo">
            <span className="ProfileSImage" />
            <span>{user.nickname}</span>
          </div>
        </div>
      </nav>
      <section className="ProfileEditSection">
        <div className="ProfileEditTitle">
          <h3>프로필 수정</h3>
          <div>네이버 대표 프로필과 별명을 수정할 수 있습니다.</div>
        </div>
        <div>
          <div className="ProfileEditMain">
            <div className="ProfileImageEditHead">
              <span>프로필 사진</span>
            </div>
            <div className="EidtImage">
              <span className="ProfileImage" />
              <div className="ProfileBtArea">
                <div className="ProfileBt">사진변경</div>
                <div className="ProfileBt">삭제</div>
              </div>
            </div>
          </div>
          <div className="ProfileEditMain">
            <div className="ProfileNicknameEditHead">
              <span>별명</span>
            </div>
            <div className="EidtNickname">
              <input
                type="text"
                className="inputNickname"
                placeholder={user.nickname}
              />
            </div>
          </div>
        </div>
        <div className="ProfileBtArea2">
          <div className="ProfileBt">적용</div>
          <div
            className="ProfileBt"
            onClick={() => {
              alert("변경사항이 저장되지 않습니다.");
              navigate("/");
            }}
          >
            취소
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileImage;
