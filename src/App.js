import Home from "./pages/home/home";
import Club from "./pages/teams/teams";
import Live from "./pages/live/live";
import Lineup from "./component/lineup/line-up";
import Member from "./component/member/member";
function App() {
  return (
    <div className="App">
       <Home />
      <Club /> 
       <Live /> 
      <Lineup />  
      <Member />
    </div>
  );
}

export default App;
