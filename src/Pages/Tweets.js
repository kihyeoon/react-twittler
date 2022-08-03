// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./Tweets.css";
import dummyTweets from "../static/dummyData";
import uuid from "react-uuid";

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState(dummyTweets);
  const [filteredData, setFilteredData] = useState(data);
  const [selected, setSelected] = useState(false);

  const usrnames = data.map((el) => el.username);
  const set = new Set(usrnames);
  const uniqueUsernames = [...set];

  const handleButtonClick = (event) => {
    const tweet = {};
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    tweet.id = uuid();
    tweet.username = name;
    tweet.picture = "https://randomuser.me/api/portraits/men/98.jpg";
    // dummyTweets.filter(function (el) {
    //   return el.username === name;
    // })[0].picture;
    tweet.content = text;
    tweet.createdAt = new Date().toLocaleDateString("ko-kr");
    tweet.updatedAt = new Date().toLocaleDateString("ko-kr");
    setData([tweet, ...data]);
    setFilteredData([tweet, ...filteredData]);
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setName(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setText(event.target.value);
  };

  const handleSelect = (event) => {
    setFilteredData(
      data.filter((tweet) => tweet.username === event.target.value)
    );
    setSelected(event.target.value === "Usernames" ? false : true);
  };

  const onRemove = (id) => {
    setData(data.filter((tweet) => tweet.id !== id));
    setFilteredData(filteredData.filter((tweet) => tweet.id !== id));
  };

  return (
    <>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  value={name}
                  onChange={handleChangeUser}
                ></input>
                <textarea
                  className="tweetForm__input--message"
                  value={text}
                  onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {`total: ${data.length}`}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
                className="tweetForm__submitButton"
                onClick={handleButtonClick}
              >
                TWEET
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser">
        <select id="selectBox" onChange={handleSelect}>
          <option>Usernames</option>
          {uniqueUsernames.map((el) => (
            <option key={el}>{el}</option>
          ))}
        </select>
      </div>
      <ul className="tweets">
        {
          selected
            ? filteredData.map((tweet) => {
                return (
                  <Tweet tweet={tweet} key={tweet.id} onRemove={onRemove} />
                );
              })
            : data.map((tweet) => {
                return (
                  <Tweet tweet={tweet} key={tweet.id} onRemove={onRemove} />
                );
              }) //
        }
      </ul>
      <Footer />
    </>
  );
};

export default Tweets;
