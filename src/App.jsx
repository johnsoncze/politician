import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Footer from './components/footer/footer'
import Header from './components/header/header'
import AboutUs from './pages/about'
import Detail from './pages/detail'
import Homepage from './pages/homepage'
import Media from './pages/media'
import Search from './pages/search'

function App() {
  return (
		<div className="App">
			<Header />
      <div className='body'>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/detail" component={Detail} />
          <Route path="/o-projektu" component={AboutUs} />
          <Route path="/pro-media" component={Media} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
      <Footer />
		</div>
  );
}

export default App;
