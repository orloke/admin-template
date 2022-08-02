import React from "react";

interface Props{
    children?: React.ReactNode;
}

const Content = (props: Props) => {
  return (
    <div className={`flex flex-col mt-7 dark:text-gray-200`} >
        {props.children}
    </div>
  )
}

export default Content;