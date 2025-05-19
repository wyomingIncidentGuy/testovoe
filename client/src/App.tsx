import { Global } from "@emotion/react";
import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { GLOBAL_STYLES } from "./styles/global.styles";
import { router } from "./router";

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Global styles={GLOBAL_STYLES} />
    </>
  );
};

export default App;
