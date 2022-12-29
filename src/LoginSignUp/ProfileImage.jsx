import React, { useState, useRef, useEffect } from "react";
import "../styles/ProfileImage.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../Util/Util";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";

const ProfileImage = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  const navigate = useNavigate();
  const location = useLocation();
  const [profileImg, setProfileImg] = useState("");
  const [updateUser, setUpdateUser] = useState(() => "");
  const [nickname, setNickname] = useState("");
  //
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();
  const formData = new FormData();
  const saveImgFile = (e) => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
    setProfileImg(e.target.files[0]);
  };
  const userid = user.userid;
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  // const postImage = async () => {
  //   try {
  //     const data = await axios({
  //       method: "POST",
  //       url: `${BACKEND_URL}/v5/profile/image/${user.userid}`,
  //       data: formData,
  //     });
  //     setProfileImageList((prev) => prev.concat(parseInt(data.data.id)));
  //   } catch (e) {
  //     alert("POST FAIL");
  //   }
  // };

  const updateProfile = () => {
    formData.append("nickname", nickname);
    formData.append("file", profileImg);

    const patchProfileData = async () => {
      try {
        const data = await axios({
          method: "PATCH",
          url: `${BACKEND_URL}/v1/profile/${user.userid}`,
          data: formData,
        });
      } catch (e) {
        alert("PATCH FAIL");
      }
    };
    patchProfileData();

    const updateUserdata = async () => {
      try {
        const data = await axios({
          method: "GET",
          url: `${BACKEND_URL}/v1/myblog`,
          params: {
            userid,
          },
        });
        setUser(data.data);
        // window.location.reload();
      } catch (e) {}
    };
    updateUserdata();
  };

  console.log("userid", userid);
  // console.log("???", updateUser);
  console.log("user", user);

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
            <img
              src={imgFile ? imgFile : user.basicProfile}
              alt="00"
              className="ProfileSImage"
            />
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
              <img
                src={imgFile ? imgFile : user.basicProfile}
                alt="test"
                className="ProfileImage"
              />
              <div className="ProfileBtArea">
                <label className="ProfileBt" htmlFor="inputimg">
                  사진변경
                </label>
                <input
                  type="file"
                  id="inputimg"
                  className="inputimg"
                  onChange={saveImgFile}
                  ref={imgRef}
                />
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
                value={nickname}
                onChange={onChangeNickname}
              />
            </div>
          </div>
        </div>
        <div className="ProfileBtArea2">
          <div
            className="ProfileBt"
            onClick={() => {
              updateProfile();
            }}
          >
            적용
          </div>
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
