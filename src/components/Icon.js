import React from "react";
const Hamburger = props => {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 125"
      enable-background="new 0 0 100 100"
      {...props}
    >
      <g>
        <path d="M22,34h56c2.2,0,4-1.8,4-4c0-2.2-1.8-4-4-4H22c-2.2,0-4,1.8-4,4C18,32.2,19.8,34,22,34z" />
        <path d="M78,46H22c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4h56c2.2,0,4-1.8,4-4C82,47.8,80.2,46,78,46z" />
        <path d="M78,66H22c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4h56c2.2,0,4-1.8,4-4C82,67.8,80.2,66,78,66z" />
      </g>
      {/*<text
        x="0"
        y="115"
        fill="#000000"
        font-size="5px"
        font-weight="bold"
        font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        Created by Alex Podolsky
      </text>
      <text
        x="0"
        y="120"
        fill="#000000"
        font-size="5px"
        font-weight="bold"
        font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        from the Noun Project
      </text>*/}
    </svg>
  );
};

const Close = props => {
  return (
    <svg viewBox="0 0 24 30" x="0px" y="0px" {...props}>
      <title>close</title>
      <path d="M17.707,16.293A.99989.99989,0,1,1,16.293,17.707L12,13.41406,7.707,17.707A.99989.99989,0,0,1,6.293,16.293L10.58594,12,6.293,7.707A.99989.99989,0,0,1,7.707,6.293L12,10.58594l4.293-4.293A.99989.99989,0,0,1,17.707,7.707L13.41406,12Z" />
      <text
        x="0"
        y="39"
        fill="#000000"
        font-size="5px"
        font-weight="bold"
        font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        Created by kreationspace
      </text>
      <text
        x="0"
        y="44"
        fill="#000000"
        font-size="5px"
        font-weight="bold"
        font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        from the Noun Project
      </text>
    </svg>
  );
};

export default function Icon(props) {
  switch (props.type) {
    case "hamburger":
      return <Hamburger {...props} />;
    case "close":
      return <Close {...props} />;
    default:
      throw new Error("Please supply a type");
  }
}
