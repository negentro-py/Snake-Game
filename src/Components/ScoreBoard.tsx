export function ScoreBoard (){
   

    return(

        <body>

  <div class= "scoreboard">
    <div class="score">Score: <span id="score">0</span></div>
     <div class="highscore">High Score: <span id="highscore">0</span></div>
  </div>
  <script src="script.js"></script>
</body>

body{
  margin: 0;
  font-family: 'Press Start 2P', cursive;
  background-color:#0f0516;
  color:#0f0516;
}
.ScoreBoard{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #da935d ;
  border: 4px solid #333;

}
.score{
  text-align:left;
  font-size: 14px;
  letter-spacing: 2px;

}
.highscore{
  text-align: right;
  font-size: 12px;
  letter-spacing: 2px;

}

    )
 
    
}