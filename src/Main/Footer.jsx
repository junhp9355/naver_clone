import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterBanner">
        <div className="FooterBannerPos">
          <div className="FooterBannerFix">
            <span className="FooterBannerImg01"></span>
          </div>
          <div className="FooterBannerTextPos">
            <span className="FooterBannerTitle">쥬니버</span>
            <span className="FooterBannerSubTitle">베베핀(BebeFinn)</span>
            <span className="FooterBannerText">
              핑크퐁의 새 친구, 베베핀이 쥬니버에 왔어요!
            </span>
          </div>
        </div>
        <div className="FooterBannerPos">
          <div className="FooterBannerFix">
            <span className="FooterBannerImg02"></span>
          </div>
          <div className="FooterBannerTextPos">
            <span className="FooterBannerTitle">대구서부경찰서</span>
            <span className="FooterBannerSubTitle">보이스피싱 예방</span>
            <span className="FooterBannerText">
              대구서부경찰서가 알려주는 보이스피싱의 모든것
            </span>
          </div>
        </div>
        <div className="FooterBannerPos">
          <div className="FooterBannerFix">
            <span className="FooterBannerImg03"></span>
          </div>
          <div className="FooterBannerTextPos">
            <span className="FooterBannerTitle">네이버 여행상품</span>
            <span className="FooterBannerSubTitle">
              해외여행상품 쇼핑라이브
            </span>
            <span className="FooterBannerText">
              매주 만나는 여행 특가 알림 받기 필수!
            </span>
          </div>
        </div>
      </div>
      <div className="FooterNotice">
        <div>공지사항</div>
        <div>
          서비스 전체보기<span className="LinkIcon"></span>
        </div>
      </div>
      <div className="FooterInfo">
        <div className="FooterInfoTextPos">
          <div className="FooterInfoContents">
            <span className="FooterInfoTitle">Creater</span>
            <div className="FooterInfoSubTitle">
              <span className="FooterInfoText">크리에이터</span>
              <span className="FooterInfoBar" />
              <span className="FooterInfoText">스몰비즈니스</span>
            </div>
          </div>
          <div className="FooterInfoContents">
            <span className="FooterInfoTitle">Partners</span>
            <div className="FooterInfoSubTitle">
              <span className="FooterInfoText">SME 풀케어 시스템</span>
              <span className="FooterInfoBar" />
              <span className="FooterInfoText">비즈니스 · 광고</span>
              <span className="FooterInfoBar" />
              <span className="FooterInfoText">스토어 개설</span>
              <span className="FooterInfoBar" />
              <span className="FooterInfoText">지역업체</span>
              <span className="FooterInfoBar" />
              <span className="FooterInfoText">등록엑스퍼트 등록</span>
            </div>
          </div>
          <div className="FooterInfoContents">
            <span className="FooterInfoTitle">Developers</span>
            <div className="FooterInfoSubTitle">
              <span className="FooterInfoText">네이버 개발자 센터</span>
              <span className="FooterInfoBar" />
              <span className="FooterInfoText">오픈 API</span>
              <span className="FooterInfoBar" />
              <span className="FooterInfoText">오픈소스</span>
              <span className="FooterInfoBar" />
              <span className="FooterInfoText">네이버 D2</span>
              <span className="FooterInfoBar" />
              <span className="FooterInfoText">네이버 D2SF</span>
              <span className="FooterInfoBar" />
              <span className="FooterInfoText">네이버 랩스</span>
            </div>
          </div>
        </div>
        <div className="FooterInfoService">
          <div className="ServiceContents">
            <div className="ServiceContentsTextPos">
              <span className="ServiceContentTitle">웨일 브라우저</span>
              <span className="ServiceContentSubTitle">다운받기</span>
            </div>
            <span className="WhaleServiceImg"></span>
          </div>
          <div className="ServiceContents">
            <div className="ServiceContentsTextPos">
              <span className="ServiceContentTitle">프로젝트 꽃</span>
              <span className="ServiceContentSubTitle">바로가기</span>
            </div>
            <span className="FlowerServiceImg"></span>
          </div>
        </div>
      </div>
      <div className="FooterPublic">
        <span className="FooterPublicText">회사소개</span>
        <span className="FooterInfoBar" />
        <span className="FooterPublicText">인재채용</span>
        <span className="FooterInfoBar" />
        <span className="FooterPublicText">제휴제안</span>
        <span className="FooterInfoBar" />
        <span className="FooterPublicText">이용약관</span>
        <span className="FooterInfoBar" />
        <span className="FooterPublicText2">개인정보처리방침</span>
        <span className="FooterInfoBar" />
        <span className="FooterPublicText">청소년보호정책</span>
        <span className="FooterInfoBar" />
        <span className="FooterPublicText">네이버 정책</span>
        <span className="FooterInfoBar" />
        <span className="FooterPublicText">고객센터</span>
        <span className="FooterPublicTitle">ⓒ NAVER Corp.</span>
      </div>
      <div className="FooterSpace"></div>
    </footer>
  );
};

export default Footer;
