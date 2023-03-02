let game_start_btn = document.getElementById("main_start_btn")
let welcome_screen = document.getElementById("welcome_screen")
let user_name_input = document.getElementById("user_name_input")
let main_game_screen = document.querySelector(".main_game_screen")
let choice_btn = document.querySelectorAll(".user_choice_dice")
let reset = document.querySelector(".reset_btn")
let choice = ["stone", "paper", "scissors"]
let user_name
let user_choice
let computer_choice



game_start_btn.addEventListener("click", () => {
    welcome_screen.style.display = `${"none"}`
    main_game_screen.style.display = `${"block"}`
    user_name = user_name_input.value
})

// get_user_choice
choice_btn.forEach((choice_btn) => {
    choice_btn.addEventListener("click", () => {
        user_choice = choice_btn.classList[0]
        computer_choice_fun()
    })
})

// computer_choice
computer_choice_fun = () => {
    computer_choice = choice[Math.floor(Math.random() * 3)]
    // computer_choice = "paper"
    check_condition()
}




// conditions
let winner_screen_cont = document.querySelector(".game_screen_cont")
let display_winner_name = document.getElementById("winner_name")
let user_score_text = document.getElementById("user_score")
let computer_score_text = document.getElementById("computer_score")
let result
let winner_name
let user_score = 0
let computer_score = 0

check_condition = () => {

    if (user_choice == computer_choice) {
        result = `${"Tie"}`
        winner_name = `${""}`

    } else if (user_choice == "stone" && computer_choice == "scissors") {
        result = `${"Computer choose.."}${computer_choice}${".."}${user_name}${" win"}`
        winner_name = `${"user"}`

    } else if (user_choice == "paper" && computer_choice == "stone") {
        result = `${"Computer choose.."}${computer_choice}${".."}${user_name}${" win"}`
        winner_name = `${"user"}`

    } else if (user_choice == "scissors" && computer_choice == "paper") {
        result = `${"Computer choose.."}${computer_choice}${".."}${user_name}${" win"}`
        winner_name = `${"user"}`

    } else {
        result = `${"Computer choose.."}${computer_choice}${".."}${user_name}${"..loose"}`
        winner_name = `${"computer"}`
    }

    change_score()
}

// define score 
change_score = () => {
    if (winner_name == "user") {
        user_score++
        user_score_text.innerText = `${"Your score:"}${user_score}`
    }
    if (winner_name == "computer") {
        computer_score++
        computer_score_text.innerText = `${"Computer score:"}${computer_score}`
    }

    // set data in localStorage
    let obj = [user_score,computer_score]
    localStorage.setItem("user_score",JSON.stringify(obj))

    // display_winner_container
    display_winner_name.innerText = `${result}`
    winner_screen_cont.style.display = `${"flex"}`
    setTimeout(close_winner_box, 1000)

}
close_winner_box = () => {
    winner_screen_cont.style.display = `${"none"}`
}


// reset game
reset.addEventListener("click", () => {
    user_score = 0
    computer_score = 0
    user_score_text.innerText = `${"Your score: 00"}`
    computer_score_text.innerText = `${"Your score: 00"}`
    localStorage.clear("user_score")
})


window.addEventListener("load",()=>{
    score = JSON.parse(localStorage.getItem("user_score"))
    user_score_text.innerText = `${"Your score:"}${score[0]}`
    computer_score_text.innerText = `${"Computer score:"}${score[1]}`
})