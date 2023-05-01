
import './App.css';
import {Video} from './components/Video';

function App() {
  let obj={
    bgColor:"red", title:"React js tutorial", views:"1000K", time:"1 year ago", channel:"coder dost" ,verified:true
  };
  return (
    <div className='App'>
      <div>Videos</div>
      <Video {...obj}> </Video>
      <Video verified={false}  bgColor="green" title="Node js tutorial" views="1000000K" time="3 year ago"  channel="coder dost"></Video>
      <Video verified={false}  bgColor="green" title="mongo db tutorial" views="1K" time="3 year ago"  channel="coder dost"></Video>
    </div>


  )
}


export default App;