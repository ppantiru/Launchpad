import './App.css';
import Card from './components/Card/Card'
import { FaFirefox, FaTerminal, FaChrome, FaEdit, FaTeamspeak, FaCloud, FaHackerNews, FaAppStore, FaXbox, FaDocker, FaSpotify, FaFolder } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <h1>Launchpad</h1>
      <div className='container'>
        <Card name='Terminal' cmd='terminal'><FaTerminal/></Card>
        <Card name='Firefox' cmd='firefox'><FaFirefox/></Card>
        <Card name='Chrome' cmd='chrome'><FaChrome/></Card>
        <Card name='Emacs' cmd='emacs'><FaEdit/></Card>
        <Card name='Element' cmd='element'><FaTeamspeak/></Card>
        <Card name='Inventory' cmd='inventory'><FaCloud/></Card>
        <Card name='PassBolt' cmd='pb'><FaHackerNews/></Card>
        <Card name='XWiki' cmd='xwiki'><FaXbox/></Card>
        <Card name='Docker' cmd='docker'><FaDocker/></Card>
        <Card name='Spotify' cmd='spotify'><FaSpotify/></Card>
        <Card name='FileM' cmd='files'><FaFolder/></Card>
      </div>
    </div>
  );
}

export default App;
