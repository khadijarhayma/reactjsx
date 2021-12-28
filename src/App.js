import "./App.css";
import image from"./Little-Autumn-House.jpg"

function App() {
  return <div className="App">

    <div style={{border:"solid 1 black",maxWidth:"100 vw"}}>
      <h1 className="titlered">Your name here</h1>
      </div>
<div className="imge">
<img src={image} alt="imageInSrc"/>
<img src="/Raven-Rock.jpg"alt="imageInPublic"/>
</div>

   
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mE-fUVRrypc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>;
}

export default App;
