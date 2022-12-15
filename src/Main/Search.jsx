import React, { useEffect, useRef, useState } from "react";
import "../styles/Top.css";

const Search = () => {
  const [searchVisible, setSearchVisible] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );
  const searchBox = useRef();
  const onClickSearchVisible = () => {
    setSearchVisible((searchVisible) => !searchVisible);
  };
  const onClickClose = (e) => {
    if (searchVisible && searchBox.current.contains(e.target)) {
      setSearchVisible(true);
    }
  };

  const onClickSearchData = (text) => {
    setKeyword(text);
  };

  useEffect(() => {
    if (searchVisible) document.addEventListener("mousedown", onClickClose);
    return () => {
      document.removeEventListener("mousedown", onClickClose);
    };
  });

  const onChangeSearchKeyWord = (e) => {
    setKeyword(e.target.value);
  };

  const onClickSearch = () => {
    if (keyword) {
      onAddKeyWord(keyword);
      setKeyword("");
    }
  };

  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  const getDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${month}.${day}`;
  };

  const onAddKeyWord = (text) => {
    const newKeyword = {
      id: Date.now(),
      text,
      date: getDate(),
    };

    setKeywords([newKeyword, ...keywords]);
  };

  const onRemoveKeyword = (id) => {
    setKeywords(
      keywords.filter((keyword) => {
        return keyword.id !== id;
      })
    );
    setSearchVisible(true);
  };

  const onRemoveAllKeyword = () => {
    setKeywords([]);
  };
  return (
    <div className="TopSearchBox" onClick={() => onClickSearchVisible()}>
      <input
        type="text"
        value={keyword}
        onChange={onChangeSearchKeyWord}
        onKeyDown={(e) => {
          if (e.keyCode === 13) onClickSearch();
        }}
        className="Topinputbox"
      ></input>
      <span className="TopinputKeybordIcon"></span>
      <span className="TopinputAuotoCompleteIcon"></span>
      <div className="TopinputSearchBox">
        <span className="TopinputSearchIcon"></span>
      </div>
      <div
        className={
          searchVisible ? "TopSearchDataListNone" : "TopSearchDataList"
        }
        ref={searchBox}
      >
        <div className="TopSearchHeader">
          <div className="TopSearchHeader01">최근 검색어</div>
          <div
            className="TopSearchHeader02"
            onClick={() => onRemoveAllKeyword()}
          >
            전체 삭제
          </div>
        </div>
        <div>
          {keywords.map(({ id, text, date }) => (
            <section className="TopSearchData">
              <span className="SearchDataIcon"></span>
              <div
                className="SearchDataText"
                onClick={() => {
                  onClickSearchData(text);
                }}
              >
                {text}
              </div>
              <div className="SearchDataDate">{date}</div>
              <button
                className="SearchDataDelete"
                onClick={() => onRemoveKeyword(id)}
              ></button>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
