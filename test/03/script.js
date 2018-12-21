
var obj = [
  {'name' : '1' , 'score' : 0},
  {'name' : '2' , 'score' : 0},
  {'name' : '3' , 'score' : 0},
  {'name' : '4' , 'score' : 0},
  {'name' : '5' , 'score' : 0},
  {'name' : '6' , 'score' : 0},
  {'name' : '7' , 'score' : 0},
  {'name' : '8' , 'score' : 0},
  {'name' : '9' , 'score' : 0}
]

var obj2;

var teamItem = document.querySelectorAll('.teamitem')
  , teamScore = document.querySelectorAll('.teamscore')
  , score = document.querySelectorAll('.score')
  , rankList = document.querySelector('.ranklist')
;

var teamScorePlus = (t,teamname) =>{
  // for(let i = 0; i < obj.length; ++i){
    // if(teamname+1 == obj[i]['name']){
      ++obj[teamname]['score'];
      score[teamname].innerText = obj[teamname]['score'];
      // break;
    // };
  // };
};

var sortObj = (a,b) =>{
  obj2 = obj.sort(function(a,b){
    return b['score'] - a['score'];
  });
};

var teamItemMove = () =>{
  rankList.offsetHeight;
};

var teamScroeHandle = () =>{
  for(let i = 0; i < teamItem.length ; ++i){
    teamScore[i].addEventListener('click', function(){
      teamScorePlus(this,i);
      // sortObj();

      // teamItemMove();
    });
  };
};

window.addEventListener('DOMContentLoaded', function(){
  teamScroeHandle();
});
