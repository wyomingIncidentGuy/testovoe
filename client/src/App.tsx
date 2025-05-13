import React from 'react';
import { Global } from "@emotion/react";
import { FC } from "react";
import Cars from "./pages/Cars/Cars";
import Header from './components/Header/Header';
import { GLOBAL_STYLES } from "./styles/global.styles";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Cars />
      <Global styles={GLOBAL_STYLES} />
    </div>
  );
};

export default App;
