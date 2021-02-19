const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here

    for(player=0;player<players.length;player++)
    {
        detailedPlayers.push({
            name:players[player],
            strength:getRandomStrength(),
            image:"images/super-"+(player+1)+".png",
            type:player%2==0?"hero":"Villain"
        }  
        );
    }

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random()*100);
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    players.map(function(player) {
        fragment = fragment +
                `<div class="player">
                    <img src="${player.image}" alt="">
                    <div class="name">${player.name}</div>
                    <div class="strength">${player.strength}</div>
                </div>`;
    });
   

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}