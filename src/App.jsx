import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import AboutUs from './pages/about/about'
import Detail from './pages/detail/detail'
import Error from './pages/error'
import Homepage from './pages/homepage/homepage'
import Media from './pages/media'
import Search from './pages/search'

import './App.scss';

function App() {
  return (
		<div className="App">
			<Header />
      <div className='body'>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/o-projektu" component={AboutUs} />
          <Route path="/pro-media" component={Media} />
          <Route path="/search" component={Search} />
          <Route component={Error} />
        </Switch>
      </div>
      <Footer />
		</div>
  );
}

export default App;
