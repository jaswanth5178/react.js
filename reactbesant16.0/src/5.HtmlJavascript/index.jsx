function App(){

  const Name = "ReactJS";
  function dark(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }

  return (
    <div>
      <h1>Javascript in {Name}</h1>
      <button onClick={dark}>Dark</button>
    </div>
  )
}
export default App;
