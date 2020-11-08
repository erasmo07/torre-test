import React from "react";
import Search from '../components/Search';

const Home = ({search}) => {
  return (
    <div>
        <Search result={search}/>
    </div>
  );
};

export default Home;
