console.log('js-loaded!')

/*----- constants -----*/
// const INIT_STATE = {
    
    // }
    
    
    
    
    /*----- state variables -----*/
    const formLocation = document.querySelector('#guess-form')    
    const letterBtnEl = document.querySelectorAll("#controller")
    const solutionEl = document.querySelectorAll("#solution-display")
    const gameRestartEl = document.querySelector("#rocket-message");
    const wordToGuess = ["B", "E", "S", "t"]
    const spaces = ["_", "_", "_", "_"]
    
    
    
    
    
    /*----- cached elements  -----*/
    

    

    document.addEventListener('DOMContentLoaded', function () {
        const solutionDisplay = document.querySelector('#solution-display')

        for (let i = 0; i < wordToGuess.length; i++) {
            const underscore = document.createElement('h1')
            underscore.setAttribute('class', 'underscore')
            underscore.innerText = "?"
            solutionDisplay.append(underscore)
        }
        
        
        
    })

    console.log('hiii')

    document.addEventListener('DOMContentLoaded', function () {
    formLocation.addEventListener('input', (e) => {
        e.preventDefault()
        const userInput = document.querySelector('#guess-input').value
        
        if (wordToGuess.includes(userInput.toUpperCase())) {
            
            const foundIdx = wordToGuess.indexOf(userInput.toUpperCase())
            console.log(foundIdx)
        } else {
            console.log("Try again!")
            
        }
        })
    }
    
    // const checkArr = (userInput) => {
    //     if (wordToGuess.includes(userInput.toUpperCase())) {
    //         //   console.log("True")
    //         const index = 
    //         wordToGuess.indexOf(userInput.toUpperCase())
    //         //   console.log(index)
    //         spaces.splice(1, 1, userInput.toUpperCase())
    //     }
    // }

    
    
    // checkArr(event.currentTarget.input.value)
    
    
    /*----- event listeners -----*/


/*----- functions -----*/