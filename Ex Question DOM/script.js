// let istatus = document.querySelector("h5")
// let addFriend =  document.querySelector("#add")
// let removeFriend = document.querySelector("#remove")

// addFriend.addEventListener("click",() => {
//     istatus.innerHTML = "friends"
//     istatus.style.color = "green"
// })

// removeFriend.addEventListener("click", () =>{
//     istatus.innerHTML ="Stranger"
//     istatus.style.color ="red"

// })


let istatus = document.querySelector("h5")
let addfriend = document.querySelector("#add")
let removefriend = document.querySelector("#remove")

addfriend.addEventListener("click",()=>{
    istatus.innerHTML = "friends"
    istatus.style.color  ="green"
})

removefriend.addEventListener("click",() =>{
    istatus.innerHTML = "stranger"
    istatus.style.color = "red"
})

