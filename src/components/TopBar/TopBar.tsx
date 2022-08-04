import React from "react";
import Title from "../Title/Title";

interface Props {
  title: string;
  caption: string;
}

const TopBar = (props: Props) => {
  return <Title title={props.title} caption={props.caption} />;
};

export default TopBar;
