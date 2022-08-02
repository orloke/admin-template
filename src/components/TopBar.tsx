import React from "react";
import Title from "./Title";

interface Props{
    title: string;
    caption: string;
}

const TopBar = (props: Props) => {
  return (
    <div className="">
        <Title title={props.title} caption={props.caption}/>
    </div>
  )
}

export default TopBar;