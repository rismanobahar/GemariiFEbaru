import React, { useState } from "react";
import { Fade } from "react-slideshow-image";

const Slider = () => {
  const [previousIndex, setPreviousIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);

  const style = {
    textAlign: "center",
    padding: "200px 0",
    fontSize: "30px",
    marginTop: "20px",
    marginLeft: "50px",
    marginRight: "50px",
    background:"#e8cfc7",
    position:'relative'
  };

  const properties = {
    autoplay: true,
    indicators: true,
    onChange: (previous, next) => {
      setPreviousIndex(previous);
      setNextIndex(next);
    }
  };

  return (
    <div>
      <div>
        <Fade {...properties}>
          <div imag style={{...style, background: 'teal'}}>
        
          </div>
          <div style={{...style, background: '#6c6ce3'}}>
          
          </div>
          <div style={{...style, background: '#8fe78f'}}>
         
          </div>
          <div style={{...style, background: '#ccc'}}>
           
          </div>
        </Fade>
      </div>
      
    </div>
  );
};

export default Slider;