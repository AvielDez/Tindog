class Dog {
    constructor(data){
        Object.assign(this, data)
        this.badgeHtml = ``
    }

    getDogProfileHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this

        return `
            <div class="dog-profile" style="background-image: url(${avatar})">
                <div id="badge-container">
                    ${this.badgeHtml}
                </div>
                    
                <div class="dog-profile-text">
                    <h2 class="name-age">${name}, ${age}</h2>
                    <p class="bio">${bio}</p>
                </div>
            </div>
        `
    }

    setLiked(){
        this.hasBeenSwiped = true
        this.hasBeenLiked = true
        this.badgeHtml = `<img class="badge" src="./images/badge-like.png">`
    }
    setNope(){
        this.hasBeenSwiped = true
        this.badgeHtml = `<img class="badge" src="./images/badge-nope.png">`
    }
}

export default Dog
