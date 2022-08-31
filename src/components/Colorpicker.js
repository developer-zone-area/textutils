import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

export default function Colorpicker(props) {
    const [colorHexCode, setColorHexCode] = useState('#000000');
    const getColor = ()=>{
        props.pickColor(colorHexCode);
    }
    const getBackColor = ()=>{
        props.pickBackColor(colorHexCode);
    }
    
  return (
    <div className="App">
    <SketchPicker
      color={colorHexCode}
      onChange={e => setColorHexCode(e.hex)} />
      
    <br />
    <button style={{backgroundColor: props.backColor ,color: props.color}} onClick={getColor}>select Front Color</button>
    <button style={{backgroundColor: props.backColor ,color: props.color}} onClick={getBackColor}>select Back Color</button>

  </div>
  )
}
