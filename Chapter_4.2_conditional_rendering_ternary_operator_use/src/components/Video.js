import './Video.css'

function Video({title,bgcolor,channel,views,time,verified}) {
  // let verified=false;
  let channelJSX;
  // if(verified){
  //   channelJSX=<div className="channel"  >{channel}✔️</div>
  // }
  // else{
  //   channelJSX=<div className="channel"  >{channel}</div>
  // }
   
  return (
   <div className='container'>
   
      <div className='pic'>
      <img
        src="https://picsum.photos/id/2/160/90"
        alt="Hedy Lamarr"
        className="photo"
      />
      </div>
     
      <div className="title"  >{title}</div>
      {/* ternary operator use */}
      {<div className="channel"  >{channel}{verified ? '✔️':null}</div>} 
      <div className="cviews"  >
         {views} views <span>.</span> {time}
        </div>
    </div>

  )

}

export { Video }