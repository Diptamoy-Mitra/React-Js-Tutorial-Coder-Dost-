import './Video.css'

function Video() {
  let Topic="react js";
  let bg='dark';
  return (
    <>
   
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <div className={bg} >{Topic} - react js tutorial</div>
    </>

  )

}

export { Video }