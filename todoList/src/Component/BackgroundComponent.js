import { useState, useEffect } from 'react';
import getRandomColor from "randomcolor";
import HelloWorldComponent from "./HelloWorldComponent";

function BackgroundComponent() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const timeId= setInterval( () => {
      setColor(getRandomColor());
    }, 1000)
    return () => clearInterval(timeId);
  }

  );

  const newStyle = {
    height: '100vh',
    width: '100%',
    margin: 'auto',
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div style={{...newStyle, backgroundColor: color}}>
        <HelloWorldComponent></HelloWorldComponent>
    </div>
  );
}

export default BackgroundComponent;
