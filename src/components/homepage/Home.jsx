import React from 'react';
import Header from '../common/Header';
import Menu from '../common/Menu';
import Show from './Show';
import ExploreMore from './ExploreMore'
import Footer from '../common/Footer';

const Home = () => {

  return(
    <div>
      <Header />
      <Menu />
      <Show />
      <ExploreMore />
      <Footer />
    </div>
  )
}

export default Home;