import React, {useState} from 'react';

import GetBinary from './bin/GetBinary'

const {exec} = window.require('child_process');



function App() {

  const [out , setOut] = useState('')
  function onclick() {
    const git  = GetBinary('git')
    exec(`${git} --version`, (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      setOut(stdout)
    });

  }
  return (
    <div className="">
        Hello world
        <button onClick={onclick}>Click</button>

        <p>{out}</p>
    </div>
  )
}

export default App
