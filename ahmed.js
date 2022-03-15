let button = document.getElementById("button")
let container = document.getElementById("container")
let input = document.querySelector("input")
button.addEventListener("click" , (eo) => {
    eo.preventDefault();
    let task = `<div class="task">
    <span class="icon-star icons "></span>
    <p class="p"> ${input.value} </p>
    <div>
        <span class="icon-trash icons "></span>
        <span class="icon-angry2 icons "></span>
    </div>
    <!-- <span class="icon-heart"></span> -->
</div>`
container.innerHTML += task
input.value = ""
})
container.addEventListener("click" , (eo) => {
    if (eo.target.className === "icon-trash icons ") {
        eo.target.parentElement.parentElement.remove()
    }
    else if (eo.target.className ==="icon-angry2 icons ") {
        eo.target.parentElement.parentElement.getElementsByClassName("p")[0].classList.add("text")
        eo.target.classList.add("none")
        let heart = `<span class="icon-heart"></span>`
        eo.target.parentElement.innerHTML += heart
    }
    else if (eo.target.className === "icon-heart") {
        eo.target.parentElement.parentElement.getElementsByClassName("p")[0].classList.remove("text")
        eo.target.classList.add("none")
        let angry2 = `<span class="icon-angry2 icons "></span>`
        eo.target.parentElement. innerHTML += angry2
    }
    else if (eo.target.className === "icon-star icons ") {
        eo.target.classList.add("yellow")
        container.prepend(eo.target.parentElement)
    } 
    else if (eo.target.className === "icon-star icons yellow") {
        eo.target.classList.remove("yellow")
        container.append(eo.target.parentElement)
    }
    


  
        
})

