import './Video.css'

function Video(props) {
  console.log(props);     //{title: 'React js tutorial', children: ' '} X2     //{title: 'Node js tutorial'} X2
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
      <div className={bg} >{props.title}</div>
    </>

  )

}

export { Video }