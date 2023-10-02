var istatus = document.querySelector("h5")

var addFriend = document.querySelector("#add")

// var remove = document.querySelector("#remove")

var check = 0

addFriend.addEventListener("click", function(){
    if(check == 0){
    istatus.innerHTML = "Friend"
    istatus.style.color = "rgb(2, 166, 63)"
    check = 1
    addFriend.innerHTML = "Remove"
    addFriend.style.backgroundColor = "rgb(196, 181, 181)"
    addFriend.style.color = "black"
    }

    else
    {
    istatus.innerHTML = "Not Friend"
    istatus.style.color = "rgb(255, 47, 1)"
    check = 0
    addFriend.innerHTML = "Add Friend"
    addFriend.style.backgroundColor = "rgb(31, 83, 239)"
    addFriend.style.color = "white"
    }
})



// remove.addEventListener("click", function(){
//     istatus.innerHTML = "Not Friend"
//     istatus.style.color = "rgb(255, 47, 1)"
// })