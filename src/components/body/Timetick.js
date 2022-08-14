function Tick() {
    return(

<>{new Date().toLocaleTimeString()}.
</>

    )
   
  }
  export default Tick;
  setInterval(Tick, 1000);