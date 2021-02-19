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
            type:player%2==0?"hero":"villain"
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
    for (let index = 0; index < players.length; index++) {
        player = `<div class="player">
                    <img src="${players[index].image}" alt="">
                    <div class="name">${players[index].name}</div>
                    <div class="strength">${players[index].strength}</div>
                </div>`;
        if (players[index].type ==type) {
            fragment += player;
        }

    }
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