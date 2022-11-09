import React from "react";
import "../styles/SignUp.css";
import "../styles/SignUpMain.css";

const SignUpMain = () => {
  const onClickLogo = () => {
    window.location.href = "http://localhost:3000/";
  };
  return (
    <body className="SignUpMainBody">
      <nav>
        <span className="SignUpMainLogo" onClick={onClickLogo}></span>
      </nav>
      <section className="SignUpMainSection">
        <div className="SignUpValueBlock">
          <thead>아이디</thead>
          <div className="SignUpInputBlock">
            <input type="text" className="SignUpInputValue" />
            <span className="SignUpEmailForm">@naver.com</span>
          </div>
          <p className="SignUpInputWarning">필수 정보입니다.</p>
        </div>
        <div className="SignUpValueBlock">
          <thead>비밀번호</thead>
          <div className="SignUpInputBlock">
            <input type="text" className="SignUpInputValue" />
            <span className="SignUpPWIcon"></span>
          </div>
          <p className="SignUpInputWarning">필수 정보입니다.</p>
        </div>
        <div className="SignUpValueBlock">
          <thead>비밀번호 재확인</thead>
          <div className="SignUpInputBlock">
            <input type="text" className="SignUpInputValue" />
            <span className="SignUpPWIcon"></span>
          </div>
          <p className="SignUpInputWarning">필수 정보입니다.</p>
        </div>
        <div className="SignUpValueBlock">
          <thead>이름</thead>
          <div className="SignUpInputBlock">
            <input type="text" className="SignUpInputValue" />
          </div>
          <p className="SignUpInputWarning">필수 정보입니다.</p>
        </div>
        <div className="SignUpValueBlock">
          <thead>생년월일</thead>
          <div className="SignUPBirthdayBlock">
            <div className="SignUpInputBirthday">
              <input
                type="text"
                className="SignUpInputYear"
                placeholder="년(4자)"
              />
            </div>
            <div className="SignUpInputBirthday">
              <select name="month" id="month" className="Month">
                <option value="월">월</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="SignUpInputBirthday">
              <input type="text" className="SignUpInputDay" placeholder="일" />
            </div>
          </div>
          <p className="SignUpInputWarning">필수 정보입니다.</p>
        </div>
        <div className="SignUpValueBlock">
          <thead>성별</thead>
          <div className="SignUpInputBlock">
            <select name="gender" id="gender" className="Gender">
              <option value="">성별</option>
              <option value="">남자</option>
              <option value="">여자</option>
              <option value="">선택안함</option>
            </select>
          </div>
          <p className="SignUpInputWarning">필수 정보입니다.</p>
        </div>
        <div className="SignUpValueBlock">
          <thead>
            본인 확인 이메일<tbody>(선택)</tbody>
          </thead>
          <div className="SignUpInputBlock">
            <input type="text" className="SignUpInputValue" />
          </div>
          <p className="SignUpInputWarning">필수 정보입니다.</p>
        </div>
        <div className="SignUpValueBlock">
          <thead>휴대전화</thead>
          <div className="SignUpInputBlock">
            <select
              name="Globalnumber"
              id="Globalnumber"
              className="PhoneNumber"
            >
              <option value="">대한민국 +82</option>
              <option value="">가나 +233</option>
              <option value="">가봉 +241</option>
              <option value="">가이아나 +592</option>
              <option value="">감비아 +220</option>
              <option value="">과테말라 +502</option>
              <option value="">괌 +1 671</option>
              <option value="">그레나다 +1 473</option>
              <option value="">그리스 +30</option>
              <option value="">기니 +224</option>
              <option value="">기니비사우 +245</option>
              <option value="">나미비아 +264</option>
              <option value="">나우루 +674</option>
              <option value="">나이지리아 +234</option>
              <option value="">남극,오스트레일리아의외 +672</option>
              <option value="">남아프리카공화국 +27</option>
              <option value="">네덜란드 +31</option>
              <option value="">네덜란드령보네르 +599</option>
              <option value="">네덜란드령아루바 +297</option>
              <option value="">네팔 +977</option>
              <option value="">노르웨이 +47</option>
              <option value="">뉴질랜드 +64</option>
              <option value="">뉴질랜드령니우에 +683</option>
              <option value="">뉴질랜드령토켈라우제도 +690</option>
              <option value="">니제르 +227</option>
              <option value="">니카라과 +505</option>
              <option value="">대한민국 +82</option>
              <option value="">덴마크 +45</option>
              <option value="">덴마크령그린란드 +299</option>
              <option value="">덴마크령페로제도 +298</option>
              <option value="">도미니카공화국 +1 809</option>
              <option value="">도미니카공화국 2 +1 829</option>
              <option value="">도미니카공화국 3 +1 849</option>
              <option value="">독일 +49</option>
              <option value="">동티모르 +670</option>
              <option value="">라오스 +856</option>
              <option value="">라이베리아 +231</option>
              <option value="">라트비아 +371</option>
              <option value="">러시아/카자흐스탄 +7</option>
              <option value="">레바논 +961</option>
              <option value="">레소토 +266</option>
              <option value="">루마니아 +40</option>
              <option value="">룩셈부르크 +352</option>
              <option value="">르완다 +250</option>
              <option value="">리비아 +218</option>
              <option value="">리투아니아 +370</option>
              <option value="">리히텐슈타인 +423</option>
              <option value="">마다가스카르 +261</option>
              <option value="">마셜제도공화국 +692</option>
              <option value="">마이크로네시아연방 +691</option>
              <option value="">마카오 +853</option>
              <option value="">마케도니아공화국 +389</option>
              <option value="">말라위 +265</option>
              <option value="">말레이시아 +60</option>
              <option value="">말리 +223</option>
              <option value="">멕시코 +52</option>
              <option value="">모나코 +377</option>
              <option value="">모로코 +212</option>
              <option value="">모리셔스 +230</option>
              <option value="">모리타니아 +222</option>
              <option value="">모잠비크 +258</option>
              <option value="">몬테네그로 +382</option>
              <option value="">몰도바 +373</option>
              <option value="">몰디브 +960</option>
              <option value="">몰타 +356</option>
              <option value="">몽골 +976</option>
              <option value="">미국/캐나다 +1</option>
              <option value="">미국령북마리아나제도 +1 670</option>
              <option value="">미얀마 +95</option>
              <option value="">바누아투 +678</option>
              <option value="">바레인 +973</option>
              <option value="">바베이도스 +1 246</option>
              <option value="">바하마 +1 242</option>
              <option value="">방글라데시 +880</option>
              <option value="">베냉 +229</option>
              <option value="">베네수엘라 +58</option>
              <option value="">베트남 +84</option>
              <option value="">벨기에 +32</option>
              <option value="">벨라루스 +375</option>
              <option value="">벨리즈 +501</option>
              <option value="">보스니아헤르체고비나 +387</option>
              <option value="">보츠와나 +267</option>
              <option value="">볼리비아 +591</option>
              <option value="">부룬디 +257</option>
              <option value="">부르키나파소 +226</option>
              <option value="">부탄 +975</option>
              <option value="">불가리아 +359</option>
              <option value="">브라질 +55</option>
              <option value="">브루나이 +673</option>
              <option value="">사모아 +685</option>
              <option value="">사우디아라비아 +966</option>
              <option value="">산마리노 +378</option>
              <option value="">상투메프린시페 +239</option>
              <option value="">세네갈 +221</option>
              <option value="">세르비아 +381</option>
              <option value="">세이셀 +248</option>
              <option value="">세인트빈센트그레나딘 +1 784</option>
              <option value="">소말리아 +252</option>
              <option value="">솔로몬제도 +677</option>
              <option value="">수단 +249</option>
              <option value="">수리남 +597</option>
              <option value="">스리랑카 +94</option>
              <option value="">스와질랜드 +268</option>
              <option value="">스웨덴 +46</option>
              <option value="">스위스 +41</option>
              <option value="">스페인 +34</option>
              <option value="">슬로바키아 +421</option>
              <option value="">슬로베니아 +386</option>
              <option value="">시리아 +963</option>
              <option value="">시에라리온 +232</option>
              <option value="">싱가포르 +65</option>
              <option value="">아랍에미리트 +971</option>
              <option value="">아르메니아 +374</option>
              <option value="">아르헨티나 +54</option>
              <option value="">아메리칸사모아 +1 684</option>
              <option value="">아이슬란드 +354</option>
              <option value="">아이디 +509</option>
              <option value="">아일랜드 +353</option>
              <option value="">아제르바이잔 +994</option>
              <option value="">아프가니스탄 +93</option>
              <option value="">안도라 +376</option>
              <option value="">알바니아 +355</option>
              <option value="">알제리 +213</option>
              <option value="">앙골라 +244</option>
              <option value="">에디오피아 +251</option>
              <option value="">에리트레아 +291</option>
              <option value="">에스토니아 +372</option>
              <option value="">에콰도르 +593</option>
              <option value="">엘살바도르 +503</option>
              <option value="">영국 +44</option>
              <option value="">영국령세인트헬레나 +290</option>
              <option value="">영국령인도양지역 +246</option>
              <option value="">영국령지브롤터 +350</option>
              <option value="">영국령포클랜드제도 +500</option>
              <option value="">예멘 +967</option>
              <option value="">오만 +968</option>
              <option value="">오스트리아 +43</option>
              <option value="">온두라스 +504</option>
              <option value="">요르단 +962</option>
              <option value="">우간다 +256</option>
              <option value="">우루과이 +598</option>
              <option value="">우즈베키스탄 +998</option>
              <option value="">우크라이나 +380</option>
              <option value="">이라크 +964</option>
              <option value="">이란 +98</option>
              <option value="">이스라엘 +972</option>
              <option value="">이집트 +20</option>
              <option value="">이탈리아 +39</option>
              <option value="">인도 +91</option>
              <option value="">인도네시아 +62</option>
              <option value="">일본 +81</option>
              <option value="">자메이카 +1 876</option>
              <option value="">잠비아 +260</option>
              <option value="">적도기니 +240</option>
              <option value="">조지아 +995</option>
              <option value="">중국 +86</option>
              <option value="">중앙아프리카공화국 +236</option>
              <option value="">지부티 +253</option>
              <option value="">짐바브웨 +263</option>
              <option value="">차드 +235</option>
              <option value="">체코 +420</option>
              <option value="">칠레 +56</option>
              <option value="">카메룬 +237</option>
              <option value="">카보베르데 +238</option>
              <option value="">카타르 +947</option>
              <option value="">캄보디아왕국 +855</option>
              <option value="">케냐 +254</option>
              <option value="">코모로,마요트 +269</option>
              <option value="">코스타리카 +506</option>
              <option value="">코트디부아르 +225</option>
              <option value="">콜롬비아 +57</option>
              <option value="">콩고 +242</option>
              <option value="">콩고민주공화국 +243</option>
              <option value="">쿠바 +53</option>
              <option value="">쿠웨이트 +965</option>
              <option value="">쿡제도 +682</option>
              <option value="">크로아티아 +385</option>
              <option value="">키르기스스탄 +996</option>
              <option value="">키리바시 +686</option>
              <option value="">키프로스 +357</option>
              <option value="">타이완 +886</option>
              <option value="">타지키스탄 +992</option>
              <option value="">탄자니아 +255</option>
              <option value="">태국 +66</option>
              <option value="">터키 +90</option>
              <option value="">토고 +228</option>
              <option value="">통가 +676</option>
              <option value="">투르크메니스탄 +993</option>
              <option value="">튀니지 +216</option>
              <option value="">트리니다드토바고 +1 868</option>
              <option value="">파나마 +507</option>
              <option value="">파라과이 +595</option>
              <option value="">파키스탄 +92</option>
              <option value="">파푸아뉴기니 +675</option>
              <option value="">팔라우 +680</option>
              <option value="">팔레스타인 +970</option>
              <option value="">페루 +51</option>
              <option value="">포르투갈 +351</option>
              <option value="">폴란드 +48</option>
              <option value="">푸에르토리코 +1 787</option>
              <option value="">프랑스 +33</option>
              <option value="">프랑스령과들루프 +590</option>
              <option value="">프랑스령기아나 +594</option>
              <option value="">프랑스령뉴칼레도니아 +687</option>
              <option value="">프랑스령레위니옹 +262</option>
              <option value="">프랑스령마르티니크 +595</option>
              <option value="">프랑스령생피에르미클롱 +508</option>
              <option value="">프랑스령월리스푸투나제 +681</option>
              <option value="">프랑스령폴리네시아 +689</option>
              <option value="">피지 +679</option>
              <option value="">핀란드 +358</option>
              <option value="">필리핀 +63</option>
              <option value="">헝가리 +36</option>
              <option value="">호주 +61</option>
              <option value="">홍콩 +852</option>
            </select>
          </div>
          <div className="SignUpMainSpace" />
          <div className="SignUpPhoneNumber">
            <div className="SignUpPhoneNumberBlock">
              <input
                type="text"
                className="SignUpInputNumber"
                placeholder="전화번호 입력"
              />
            </div>
            <div className="CertificationNumber">인증번호 받기</div>
          </div>
          <div className="SignUpMainSpace" />
          <div className="SignUpInputBlock2">
            <input
              type="text"
              className="SignUpInputValue2"
              placeholder="인증번호를 입력하세요"
            />
          </div>
          <p className="SignUpInputWarning">필수 정보입니다.</p>
        </div>
        <div className="SignUpMainButton">가입하기</div>
      </section>
    </body>
  );
};

export default SignUpMain;
