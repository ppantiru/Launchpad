async function launch(cmd){
  const SERVER = 'http://192.168.100.56:3001';
  return await fetch(`${SERVER}/${cmd}`)
}

const Card = (props) => {

  return (
    <div className='cards' onClick={() => launch(props.cmd)}>
      <div className='icons'>
        {props.children}
      </div>
      <span>{props.name ? props.name : "Unknown app"}</span>
    </div>
  );
}

export default Card;
