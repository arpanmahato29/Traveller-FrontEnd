import React,{useState} from 'react';
import Header from '../common/Header';
import Menu from '../common/Menu';
import Show from './Show';
import ExploreMore from './ExploreMore'


const Home = () => {

  return(
    <div>
      <Header />
      <Menu />
      <Show />
      <ExploreMore />
    </div>
  )
}

export default Home;