// // console.log('Working');
//
var name = prompt('What is your name?');
var yourGoals = 0;
var oppGoals = 0;
var oppOpportunity1;


alert("It's the last game of the season, you are in second place as first place have played their game before you and have drew their game. For you to be first place and win the league, you must win the game as they have an advantage with goal difference.");

var cointhrow = prompt('Heads or Tails?');

if (cointhrow === 'Heads' || cointhrow === 'heads' ) {
  alert("You're kicking the game off");
  alert('You have passed back to a defender and they have decided to kick the ball up the pitch towards you');
} else if (cointhrow === 'Tails' || cointhrow === 'tails' ){
  alert("Opposing team kicks off");
  alert("Opponent has passed to his team-mate and he has run up the pitch with the ball, your defender has intercepted his attempted pass. He crosses the ball up the pitch towards you");
}


// How many steps from the defender to decide offside

var offside = prompt('How many yards are you from the last defender? (pick from 1-10)');

if (parseInt(offside) <= 4) {
  alert("You're onside! You shoot.. keeper dives and attempts to stop the shot but the shot was too powerful for him to control and has deflected off his gloves.. GOOOAAALLL");
  yourGoals++;
} else if (parseInt(offside) >= 5 && parseInt(offside) <= 10 ) {
  alert("Offside, opponents free kick, he makes a quick pass to the midfield. He finds their defender overlapping on the right wing, so he passes the ball and the defender crosses the ball into your box");
  oppOpportunity1 = prompt('What do your players do? (Pick a number) 1. Your defender will try to header the ball out. 2. Your keeper will charge out to punch the ball out.');
}
// if Offside, prompt answer
if (parseInt(oppOpportunity1) === 1) {
  alert('Your defender approaches the ball and headers the ball out of danger for a corner');
  alert('The ball is crossed into the box, and the opposing team was able to surround the keeper making it harder for your keeper to get to the ball and so the opposing team have scored');
  oppGoals++;
} else if (parseInt(oppOpportunity1) === 2) {
  alert("The keeper approaches the ball and punches the ball out, unfortunately the ball lands directly infront of the opposing teams attacking midfielder and he takes a shot but your goalkeeper wasn't able to react in time");
  oppGoals++;
}

alert('The 23rd minute of the game has approached us and the opponent is controlling the flow of the game, they have entered the final third.');

alert('Their midfielder makes a run towards goal, he is found by the left back who passes the ball into the box. He takes a shot.. and it has deflected of a defender.. GGGOOOAAALLLL! The keeper was going to get to it had it not deflected of the defender!');
oppGoals++;

alert('The game continues..');
alert("It is the 38th minute of the game now, and the game has been at a stand still with both teams having opportunities but are unable to convert. Your left winger is bolting down the left side of the pitch.");

var yourOpportunity1 = prompt('Your left winger decides to cut inside, he passes the ball to you and you are 13yards away from the goal, which side do you shoot the ball to? (Pick a number) 1. Left 2. Right. ');

if (parseInt(yourOpportunity1) === 1 ){
  alert('Keeper was able to guess the right side and makes a impressive save');
} else if (parseInt(yourOpportunity1) === 2) {
  alert("GOOOOAAAALLLL! The keeper guessed the wrong side and wasn't able to react");
  yourGoals++;
}

// Half Time
alert('Half Time');

// Have to make sure the team that lost the coin throw is now kicking off the game
if (cointhrow === 'Heads' || cointhrow === 'heads') {
  alert('Opponents turn to kick off');
  alert('They have passed the ball backwards and are controlling the tempo of the game.');
} else if (cointhrow === 'Tails' || cointhrow === 'tails') {
  alert('Your turn to kick off');
  alert ('You pass the ball backwards to control the tempo of the game');
}

alert('It is all away for a throw');

var oppThrow = prompt('It is their throw. They can choose to throw long or short. (pick a number) 1. long 2. short');

if (parseInt(oppThrow) === 1) {
  alert('They have thrown the ball inside of your box, their striker has gotten to it, they pass the ball inside your box');
  var keeperDecision = prompt('They take their shot, which way does he dive? (pick a number) 1. Left 2. Right');
} else if (parseInt(oppThrow) === 2) {
  alert('They take a short throw, your defenders have surrounded the player and have taken back the ball, he immediately kicks the ball upfield to you.')

  var counterAttack = prompt("You have controlled the ball, you see your team-mates running up for the attack but you could also try to take the opportunity yourself (pick a number) 1. Pass to your team-mate 2. Attempt the opportunity yourself");
}

if (parseInt(keeperDecision) === 1) {
  alert('Your keeper has dived left, he has missed the ball and their attacker has scored!');
  oppGoals++;
} else if (parseInt(keeperDecision) === 2) {
  alert('Your keeper has dived right, he has secured the ball and throws it quickly to keep the tempo of the game going');
}

if (parseInt(counterAttack) === 1) {
  alert('You have passed the ball to the team-mate, you has taken control of the ball.. he is now 25 yards away from goal and attempts a shot.. he has missed completely and it has gone out for a goalkick');
} else if (parseInt(counterAttack) === 2) {
  alert('You have decided to run up with the ball yourself, you have tried to go through their defenders but they have defended successfully. The fans are now booing as they deemed your act as selfish');
}


alert('It is the 73rd minute and another opportunity for your team, it is a corner kick and your team-mates have come up for the corner.');
alert('The ball has been crossed into the box, but the referee has blown the whistle as he deems the goalkeeper has been fouled, due to him being surrounded and obstructed');


// I will have to make a if statement for the opponent to score if something goes wrong
//

alert('It is coming to the last few minutes of the game. You have run into the penalty box, but their defender has caught up! He attempts to slide tackle you as a last ditch effort to defend the goal... PENALTY IN THE CLOSING MINUTES OF THE GAME');

var penalty = prompt('As captain, you have decided to bear the responsibility of taking the deciding penalty. You decide to pick a corner to shoot the ball into. 1. Top Right 2. Top Left 3. Bottom Right 4. Bottom Left');

switch (parseInt(penalty)) {
  case 1:
  case 3:
    alert('The keeper dives.. WHAT A SAVE!');
    break;
  case 2:
  case 4:
    alert("The keeper dives.. HE'S GONE THE WRONG WAY.. GOOOOAAAALLLL!");
    yourGoals++;
  break;
}

alert('The closing whistle has been blown!');

if (oppGoals > yourGoals) {
  alert("You have lost the game and as a result finished second, a season to forget.");
} else if (yourGoals > oppGoals){
  alert("You won the game and as a result you have finished first! You are the champions!");
  alert("You run estatically to celebrate with the fans!");
} else if (yourGoals === oppGoals) {
  alert("You drew the game, but you have lost the league in goal difference, you have finished second, a season to forget.");
}

// // use every Data Type (integers, arrays, objects etc)
// // use if, if/else, if/else, if/else and Switch statements
// // use every comparison operator (<, >, <=, >= etc)
// // use at least one multiple condition per statement if( true && true ) OR if( true || false )
// // Use as many in-built functions as possible:
// // prompts and alerts are mandatory
// // other methods like length, reverse, indexOf, substr, and any others you can find
// // The story should be fun and entertaining!!
// // HINT: Plan well before you start coding.
// //
// // The Repo name is Sparta-Control-Flow-Story
