'use client';
import React from 'react'
import { useState } from 'react';

const RPS = () => {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    function getComputerChoice(){
        let choice = Math.floor(Math.random() * 3) + 1;

        if (choice === 1){
            return 'rock';
        } else if (choice === 2) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    function playRound(playerSelection: string) {

        let computerSelection = getComputerChoice();
        let result: string = '';

        document.getElementById('playerChoice')!.innerHTML = playerSelection;
        document.getElementById('computerChoice')!.innerHTML = computerSelection;

        if (playerSelection === computerSelection){
            result = 'Tie Game.';
        } else if (playerSelection === 'rock'){
            if(computerSelection === 'paper'){
                result = `You lost. Paper beats Rock.`;
                setComputerScore(computerScore + 1);
            } else if (computerSelection === 'scissors') {
                result = `You won! Rock beats Scissors.`;
                setPlayerScore(playerScore + 1);
            }
        } else if (playerSelection === 'paper'){
            if(computerSelection === 'scissors'){
                result = `You lost. Scissors beats Paper.`;
                setComputerScore(computerScore + 1);
            } else if (computerSelection === 'rock') {
                result = `You won! Paper beats Rock.`;
                setPlayerScore(playerScore + 1);
            }
        } else if (playerSelection === 'scissors'){
            if(computerSelection === 'rock'){
                result = `You lost. Rock beats Scissors`;
                setComputerScore(computerScore + 1);
            } else if (computerSelection === 'paper') {
                result = `You won! Rock beats Paper.`;
                setPlayerScore(playerScore + 1);
            }
        } else {
            result = 'Invalid input. Please try again.'
        }
        document.getElementById('result')!.innerHTML = result;
    }

  return (
    <div className='h-screen grid place-content-center item-center'>
        <div className='text-center pb-8'>
            <p className='text-xl pb-4'>Scoreboard</p>
            <div className='flex flex-row place-content-center space-x-4'>
                <div className='bg-dblue p-4 rounded-lg'>
                    <p>Player</p>
                    <div className='text-xl p-8'>{playerScore}</div>
                </div>
                <div className='bg-dblue p-4 rounded-lg'>
                    <p>Computer</p>
                    <div className='text-xl p-8'>{computerScore}</div>
                </div>
            </div>
        </div>
        <div className='text-center pb-4 text-xl' id='result'>Choose One</div>
        <div className='flex flex-row text-center space-x-4 pb-8 place-content-center'>
            <button onClick={() => playRound('rock')} className='bg-blue p-4 rounded-lg w-40 hover:bg-hblue'>Rock</button>
            <button onClick={() => playRound('paper')} className='bg-blue p-4 rounded-lg w-40 hover:bg-hblue'>Paper</button>
            <button onClick={() => playRound('scissors')} className='bg-blue p-4 rounded-lg w-40 hover:bg-hblue'>Scissors</button>
        </div>
        <div className='flex flex-row text-center space-x-8 place-content-center'>
            <div className=''>
                <p>Player Choice:</p>
                <div id='playerChoice' className='bg-dblue p-4 rounded-lg w-40'/>
            </div>
            <div className=''>
                <p>Computer Choice:</p>
                <div id='computerChoice' className='bg-dblue p-4 rounded-lg w-40'/>
            </div>
        </div>
    </div>
  )
}

export default RPS