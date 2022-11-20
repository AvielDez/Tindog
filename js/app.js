import Dog from './Dog.js'
import dogs from './data.js'

let dogProfile = getNewDogProfile()

render()

let isWaiting = false

document.addEventListener('click', (event)=>{
    if(event.target.id === 'nope-button'){
        if(!isWaiting){
            isWaiting = true
            dogProfile.setNope()
            console.log(dogProfile)
            render()
            setTimeout(()=>{
                isWaiting = false
                dogProfile = getNewDogProfile()
                render()
            }, 700)
        }
    }
    else if(event.target.id === 'like-button'){
        if(!isWaiting){
            isWaiting = true
            dogProfile.setLiked()
            render()
            console.log(dogProfile)
            setTimeout(()=>{
                isWaiting = false
                dogProfile = getNewDogProfile()
                render()
            }, 700)
        }
    }
})

function render(){
    document.getElementById('dog-profile-container').innerHTML = dogProfile.getDogProfileHtml()
}

function getNewDogProfile(){
    const nextDogProfileData = dogs.shift()
    return nextDogProfileData ? new Dog(nextDogProfileData) : []
}
