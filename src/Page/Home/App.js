import { useState } from 'react';
import HomeCss from './home.module.css'

function App() {
  const [color, setColor] = useState(['red', 'green', 'blue', 'black']);

  function animation() {
    color.unshift(color[color.length - 1]);
    color.pop();
    setColor([...color]);
  };

  return (
    <div className={HomeCss.general}>
      <button onClick={animation}>Click</button>
      <div style={{ background: color[0], width: '100px', height: '100px' }}>
      </div>
      <div className={HomeCss.div1} style={{ background: color[1], width: '100px', height: '100px' }}>
      </div>
      <div style={{ background: color[2], width: '100px', height: '100px' }}>
      </div>
      <div className={HomeCss.div2} style={{ background: color[3], width: '100px', height: '100px' }}>
      </div>
    </div >
  );
}

export default App;
