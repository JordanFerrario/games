const cardArray = [ // defines all of the cards in this game
    {
        name: "jesus self defense",
        img: "images/selfdefense.png",
    },
    {
        name: "buzz ball",
        img: "images/buzzball.jpg",
    },
    {
        name: "bobo",
        img: "images/bobo.png",
    },
    {
        name: "jesus money",
        img: "images/money.jpg",
    },
    {
        name: "jesus overwatch",
        img: "images/overwatch.jpg",
    },
    {
        name: "jesus peekaboo",
        img: "images/peekaboo.jpg",
    },
    {
        name: "jesus self defense",
        img: "images/selfdefense.png",
    },
    {
        name: "buzz ball",
        img: "images/buzzball.jpg",
    },
    {
        name: "bobo",
        img: "images/bobo.png",
    },
    {
        name: "jesus money",
        img: "images/money.jpg",
    },
    {
        name: "jesus overwatch",
        img: "images/overwatch.jpg",
    },
    {
        name: "jesus peekaboo",
        img: "images/peekaboo.jpg",
    },
]

cardArray.sort(() => 0.5 - Math.random()) // a nice shortcut for shuffling arrays randomly

const grid = document.querySelector("#grid") // searches entire document for an id="grid" hashtag means it is searching for an id
let cardsChosen = [] // empty array because it will be filled with card names as the user picks 
let cardsChosenIds = [] // empty array because it will be filled with card ids as the user picks
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) { // start from 0; as long as i < 10; increment by 1
        const card = document.createElement("img") // creates new img element
        card.setAttribute("src", "images/carnicerialopez.jpg") // added img attribute to new elements
        card.setAttribute("data-id", i) // sets id attribute to i to find each card easier
        card.addEventListener("click", flipCard) // listens for click so card can be flipped over
        grid.append(card) // puts card inbetween div element in body
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll("img") // looks for all imgs, can be more specific through id
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("thassa match cuz")
        cards[cardsChosenIds[0]].setAttribute("src", "images/blank.png")
        cards[cardsChosenIds[1]].setAttribute("src", "images/blank.png")
        cards[cardsChosenIds[0]].removeEventListener("click", flipCard)
        cards[cardsChosenIds[1]].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
    }
    cardsChosen = []
    cardsChosenIds = []
}

function flipCard () {
    const cardId = this.getAttribute("data-id") // this keyword allows us to interact with the card
    cardsChosen.push(cardArray[cardId].name) // pushing the name of the card into cardsChosen array
    cardsChosenIds.push(this.cardId) // pushes card ids into cardsChosenIds array
    this.setAttribute("src", cardArray[cardId].img) // assigns image to the selected card
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500) // if 2 cards are picked, runs function checkMatch after half a second
    }
}