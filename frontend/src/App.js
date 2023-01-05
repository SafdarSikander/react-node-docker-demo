import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [resonse, setResponse] = useState({});
  useEffect(() => { 
    fetch('http://localhost:4040/').then(res=>res.json()).then((res)=>{
      setResponse(res);
      setLoading(false);
    }).catch(err=>{
      console.error('error while fetching', err);
      setResponse({
        message:'Error while fetching'
      })
      setLoading(false);
    })
  }, [])
  
  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : <h3>{resonse.message}</h3>}
    </div>
  );
}

export default App;
