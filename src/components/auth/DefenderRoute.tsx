import Image from "next/image";
import Router from "next/router";
import { PropsWithChildren } from "react";
import loadingGif from "../../../public/loading.gif";
import useAuth from "../../data/hooks/useAuth";

const DefenderRoute = (props: PropsWithChildren) => {
  const { user, loading } = useAuth();


  const renderContents = () => {
    return <>{props.children}</>;
  };
  const renderLoading = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={loadingGif} alt="Loading" />
      </div>
    );
  };

  if (!loading && user?.email) {
    return renderContents();
  } else if (loading) {
    return renderLoading();
  } else {
    Router.push("/authentication");
    return null;
  }
};

export default DefenderRoute;
