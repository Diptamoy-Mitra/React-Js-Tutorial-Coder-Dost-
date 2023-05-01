
import './App.css';
import {Video} from './components/Video';

function App() {
  return (
    <div className='App'>
      <div>Videos</div>
      <Video bgColor="red" title="React js tutorial" views="10K" time="1 year ago" channel="coder dost"> </Video>
      <Video  bgColor="green" title="Node js tutorial" views="1000K" time="3 year ago"  channel="coder dost"></Video>
      <Video  bgColor="green" title="mongo db tutorial" views="1000K" time="3 year ago"  channel="coder dost"></Video>
    </div>


  )
}


export default App;