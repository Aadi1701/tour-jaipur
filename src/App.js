import React from "react";
import Section1 from './components/Section1'
import Layout from "./components/Layout";
import Section2 from "./components/Section2";

const App = ()=> {
  return (
    <Layout>
      <Section1/>
      <Section2/>
    </Layout>
  );
}

export default App;
