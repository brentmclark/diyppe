import React from "react";
import TweetEmbed from "react-tweet-embed";

export default function Home(props) {
  return (
    <div>
      <h1>DIY PPE</h1>
      <h2>Do-It-Yourself Personal Protective Equipment</h2>
      <p>
        A curated list of information related to making hospital masks and other
        PPE yourself.
      </p>
      <hr />

      <h2>IMPORTANT!!!</h2>
      <TweetEmbed id="1241611801390874624" />
    </div>
  );
}
