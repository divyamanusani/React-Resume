import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner.js';
import { Contacts } from './components/contact';
import { Details } from './components/details';

function App() {
  return (
    <div class="boundary">
      <Banner />
      <Contacts />
      <Details />
    </div>

  );
}

export default App;
