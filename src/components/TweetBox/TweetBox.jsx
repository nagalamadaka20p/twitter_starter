import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"
import { useState } from "react"
// import Tweet from "./Tweet/Tweet"

export default function TweetBox(props) {

  function handleOnTweetTextChange(e) {
    props.setTweetText(e.target.value);
  }

  const handleOnSubmit = () => {
    const newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      likes: 0,
      retweets: 0,
      id: props.tweets.length

    }
    
    props.setTweets([...props.tweets, newTweet])
    props.setTweetText("")
  }

  return (
    <div className="tweet-box">
      <TweetInput value = {props.tweetText} handleOnChange = {handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText = {props.tweetText}/>
        <TweetSubmitButton text = {props.tweetText} handleOnSubmit = {handleOnSubmit} />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  const lengthLeft = 140 - props.tweetText.length

  return (
  <span>{lengthLeft === 140 ? null: lengthLeft}</span>)
}

export function TweetSubmitButton(props) {
  console.log('props.text.length: ', props.text.length);
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" 
      onClick = {props.handleOnSubmit}
      disabled = {props.text === "" | props.text.length > 140? true:false}>Tweet</button>
      
    </div>
  )
}
