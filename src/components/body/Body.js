import React from 'react';
import './main/Main.css'
import Main from './main/Main';
import News from './side/News';

function Body() {
  return (<>
<div className ="container my-3 px-4 px-lg-5">
<div className="row gx-4 gx-lg-5 ">
  
  <Main/>
  <News/>
  </div>
  </div>
    </>
  );
}

export default Body;
