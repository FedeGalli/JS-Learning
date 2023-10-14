
const score = {
human: 0,
bot: 0,
draw: 0,
fun: function a(){
    return 'a'
}
}

const translation = {
rock: '✊',
paper: '✋',
scissiors: '✌️',

toEmoji: function toEmoji(sign){
    if (sign === 'Rock')
        return translation.rock
    else if (sign === 'Paper')
        return translation.paper
    return translation.scissiors
}
}

function reset(){
score.bot = 0
score.human = 0
score.draw = 0

document.getElementById('winner-view').innerHTML = ''
document.getElementById('score-view').innerHTML = ''
document.getElementById('choice-view').innerHTML = ''

}

function assignSeed(number){
if (number <= 1)
    return 'Rock'
else if (number > 1 && number <= 2)
    return 'Paper'
else
    return 'Scissiors'
}

function play(userChoice){
let botChoice = assignSeed(Math.random() * 3)
let  winner = ''

if (userChoice === botChoice){
    score.draw++
    winner = 'Draw'
    
}
else if (userChoice === 'Rock'){
    if (botChoice === 'Paper'){
        score.bot++
        winner = 'Bot wins'
    }

    else{
        score.human++
        winner = 'Human wins'
    }
        
} else if (userChoice === 'Paper'){
    if (botChoice === 'Rock'){
        score.human++
        winner = 'Human wins'
    }

    else{
        score.bot++
        winner = 'Bot wins'
    }
} else{
    if (botChoice === 'Rock'){
        score.bot++
        winner = 'Bot wins'
    }
    else{
        score.human++
        winner = 'Human wins'
    }
}

document.getElementById('winner-view').innerHTML = winner
document.getElementById('choice-view').innerHTML = 'Human ' + translation.toEmoji(userChoice) + ' ' + translation.toEmoji(botChoice) + ' Bot</p>'
document.getElementById('score-view').innerHTML = 'Current score:<p> Human: ' + score.human + ' , Bot: ' + score.bot + ' , Draw: ' + score.draw + '</p>'
}