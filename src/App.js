import './App.css';
import TeamIndiaA from './components/TeamIndiaA';
import TeamIndiaAPlus from './components/TeamIndiaAPlus';
import TeamIndiaB from './components/TeamIndiaB';


function App() {
  return (
    <div className="App">
     <h1 className="headingOne">VERSION CONTROLLER [GIT] - STASH, BRANCHES, RESET</h1>
     <h1>Team India Grade A+</h1>
        <div className='teamIndiaAPlus'>    
          <TeamIndiaAPlus name="ROHIT SHARMA" grade="GRADE A+" role="Batter" age="37" style="RHB" imageURL="./teamAPlus/rohit.png" altName="rohit_pic"></TeamIndiaAPlus>
          <TeamIndiaAPlus name="VIRAT KOHLI" grade="GRADE A+" role="Batter" age="36" style="RHB" imageURL="./teamAPlus/virat.png" altName="virat_pic"></TeamIndiaAPlus>
          <TeamIndiaAPlus name="JASPRIT BUMRAH" grade="GRADE A+" role="Bowler" age="30" style="RHB" imageURL="./teamAPlus/jasprit.png" altName="jasprit_pic"></TeamIndiaAPlus>
          <TeamIndiaAPlus name="RAVINDRA JADEJA" grade="GRADE A+" role="All-rounder" age="35" style="LHB" imageURL="./teamAPlus/rJadeja.png" altName="rJadeja_pic"></TeamIndiaAPlus>
        </div>
        <h1>Team India Grade A</h1>
        <div className='teamIndiaA'>
          <TeamIndiaA name="RAVICHANDRAN ASHWIN" grade="GRADE A" role="Bowler" age="38" style="RHB" imageURL="./teamA/ashwin.png" altName="ashwin_pic"></TeamIndiaA>
          <TeamIndiaA name="MOHAMMAD SHAMI" grade="GRADE A" role="Bowler" age="34" style="RHB" imageURL="./teamA/shami.png" altName="shami_pic"></TeamIndiaA>
          <TeamIndiaA name="MOHAMMED SIRAJ" grade="GRADE A" role="Bowler" age="30" style="RHB" imageURL="./teamA/siraj.png" altName="siraj_pic"></TeamIndiaA>
          <TeamIndiaA name="KL RAHUL" grade="GRADE A" role="Wicket Keeper" age="32" style="RHB" imageURL="./teamA/klrahul.png" altName="klrahul_pic"></TeamIndiaA>
          <TeamIndiaA name="SHUBMAN GILL" grade="GRADE A" role="Batter" age="25" style="RHB" imageURL="./teamA/gill.png" altName="gill_pic"></TeamIndiaA>
          <TeamIndiaA name="HARDIK PANDYA" grade="GRADE A" role="All-rounder" age="31" style="RHB" imageURL="./teamA/hPandya.png" altName="hPandya_pic"></TeamIndiaA>
          </div>
     <h1>Team India Grade B</h1>
     <div className='teamIndiaB'>
      <TeamIndiaB name="SURYAKUMAR YADAV" grade="GRADE B" role="Batter" age="34" style="RHB" imageURL="./teamB/sky.png" altName="sky_pic"></TeamIndiaB>
      <TeamIndiaB name="RISHABH PANT" grade="GRADE B" role="Wicket Keeper" age="27" style="LHB" imageURL="./teamB/pant.png" altName="pant_pic"></TeamIndiaB>
      <TeamIndiaB name="KULDEEP YADAV" grade="GRADE B" role="Bowler" age="29" style="LHB" imageURL="./teamB/kuldeep.png" altName="kuldeep_pic"></TeamIndiaB>
      <TeamIndiaB name="AXAR PATEL" grade="GRADE B" role="Bowler" age="30" style="LHB" imageURL="./teamB/axar.png" altName="axar_pic"></TeamIndiaB>
      <TeamIndiaB name="YASHASVI JAISWAL" grade="GRADE B" role="Batter" age="22" style="LHB" imageURL="./teamB/jaiswal.png" altName="jaiswal_pic"></TeamIndiaB>
     </div>
    </div>
  );
}

export default App;
