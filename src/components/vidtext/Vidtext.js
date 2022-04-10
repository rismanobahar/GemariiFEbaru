import React from 'react';
import ReactPlayer from 'react-player';
// import Vidsidetext from './Vidsidetext';
// import "./vidtext.css"
export default function vidtext() {

  const style = {
    background: '#ddb7ab',
    display: 'flex',
    flex: 'wrap',
    /* position: absolute; */
    marginTop: '10px',
    marginLeft: '92px',
    justify: 'center'
  }

  return (

    <ReactPlayer style={style}
    width='800px'
    height='450px'
    playing={true}
    loop={true}
    muted={true}
    url='https://www.youtube.com/watch?v=367veujwj_Y'
    />
  );
}



// asdadasdasdads
