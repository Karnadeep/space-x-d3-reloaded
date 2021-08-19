import './App.css';
import { AppWrapper } from './styles';
import Header from './components/header'
import Home from './components/home'
import SideBar from './components/sidebar'
import SpaceImage from "./images/spacexx.jpeg"

function App() {
  return (
    <AppWrapper img={SpaceImage}>
      <Header />
      <SideBar />
      <Home />
    </AppWrapper>

  );
}

export default App;
