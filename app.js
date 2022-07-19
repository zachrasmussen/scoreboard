let homeScore = 0
let awayScore = 0

function homeOne() {
    homeScore += 1
    let homeElm = document.getElementById('home-score')
    homeElm.innerText = homeScore
}

function homeThree() {
    homeScore += 3
    let homeElm = document.getElementById('home-score')
    homeElm.innerText = homeScore
}

function awayOne() {
    awayScore += 1
    let awayElm = document.getElementById('away-score')
    awayElm.innerText = awayScore
}

function awayThree() {
    awayScore += 3
    let awayElm = document.getElementById('away-score')
    awayElm.innerText = awayScore
}

function clearScore() {
    clear = 0
    let clearElm = document.getElementById('clearScore')
    clearElm.innerText = homeElm
    console.log('it worked');
}

