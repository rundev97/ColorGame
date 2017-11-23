var level = 4;
var valeurR;
var valeurV;
var valeurB;
var guessItem;
var valueOfClick;
var arrayOfColors = [];
var self;
var allItem = document.querySelectorAll(".item");
var h2 = document.querySelector('h2');
var header = document.querySelector('.header');
var aleatoryItem;
var msg = document.querySelector('#msg');


// Run Game
newGrill();

// new colour Button
var newColor = document.querySelector('#new');
newColor.addEventListener('click', function(){
  newGrill();
})


// Level Setting
var contentBox = document.querySelector('#content');
  contentBox.classList.add('easy');

var levelEasy = document.querySelector('#levelEasy');
  levelEasy.addEventListener('click', function(){
  level = 4;
  newGrill();
  contentBox.classList.remove('medium');
  contentBox.classList.remove('hard');
  levelEasy.classList.add('selected');
  levelHard.classList.remove('selected');
  levelMedium.classList.remove('selected');
})

var levelMedium = document.querySelector('#levelMedium');
  levelMedium.addEventListener('click', function(){
  level = 8;
  newGrill();
  contentBox.classList.add('medium');
  contentBox.classList.remove('hard');
  levelEasy.classList.remove('selected');
  levelHard.classList.remove('selected');
  levelMedium.classList.add('selected');
})

var levelHard = document.querySelector('#levelHard');
  levelHard.addEventListener('click', function(){
  level = 12;
  newGrill();
  contentBox.classList.add('hard');
  levelMedium.classList.remove('selected');
  levelEasy.classList.remove('selected');
  levelHard.classList.add('selected');
})


// new color grill //
function newGrill(){
  msg.textContent = '';
  clearBackground();
  // set color background to each item
  for (var i = 0; i < level; i++) {
    newColour();
    allItem[i].style.background = 'rgb(' + valeurR + ',' + valeurV + ',' + valeurB + ')';
    allItem[i].addEventListener('click', value);

    arrayOfColors.push(allItem[i]);
  }
  // guess item seting
  aleatoryItem = Math.floor(level * Math.random());
  guessItem = arrayOfColors[aleatoryItem].getAttribute('style').slice(12);
  h2.innerHTML = guessItem;
}


// new aleatory color //
function newColour(){
  valeurR = Math.floor(255 * Math.random());
  valeurV = Math.floor(255 * Math.random());
  valeurB = Math.floor(255 * Math.random());
}

// clear background //
function clearBackground(){
  // clear all background
  for (var y = 0; y < 12; y++) {
    allItem[y].style.background = '';
  }
}


// value of item click //
function value(){
valueOfClick = this.getAttribute('style').slice(12);
self = this;
gameResult(valueOfClick, guessItem);
}


// Game Result //
function gameResult(arg1, arg2){
  // Choose the right color
  if (arg1 === arg2) {
    header.setAttribute('style', 'background: ' + guessItem);
    for (var i = 0; i < level; i++) {
      allItem[i].setAttribute('style', 'background: ' + guessItem);
      msg.textContent = 'Felicitation You get it right!';
    }
    console.log('YOU WIN WITH ' + valueOfClick);
    console.log('Set to background: ' + guessItem);

  // Choose the wrong color
  } else {
    self.setAttribute('style', 'background-color: rgb(230, 230, 230)');
    msg.textContent = 'Try Again';
    console.log('YOU LOSE WITH ' + valueOfClick);

  }
}
