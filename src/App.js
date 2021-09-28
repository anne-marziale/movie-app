import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from "@material-ui/core";
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from '@material-ui/icons/Search';
import Series from './pages/Series/Series';

function App() {
  return (
  <BrowserRouter>
  <Header />
  <div className="App">feff</div> 

  <Container >
    <Switch>
      <Route path="/" component={Trending} exact/>
      <Route path="/movies" component={Movies} />
      <Route path="/series" component={Series} />
      <Route path="/search" component={Search} />
    </Switch>
  </Container>

  <SimpleBottomNavigation />
  </BrowserRouter>
  );
}

export default App;
