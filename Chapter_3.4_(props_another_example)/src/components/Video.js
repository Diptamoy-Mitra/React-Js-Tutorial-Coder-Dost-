import './Video.css'

function Video({title,bgcolor,channel,views,time}) {
  return (
   <div className='container'>
   
      <div className='pic'>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      </div>
     
      <div className="title"  >{title}</div>
      <div className="channel"  >{channel}</div>
      <div className="cviews"  >
         {views} views <span>.</span> {time}
        </div>
    </div>

  )

}

export { Video }