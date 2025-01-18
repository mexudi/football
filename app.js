
    // let players = [];
    let currentPlayerIndex = 0;

    // Fetch players from the backend
    // fetch("/players")
    //     .then(response => response.json())
    //     .then(data => {
    //         players = data;
    //         displayCurrentPlayer();
    //     })
    //     .catch(err => console.error("Error fetching players:", err));
    let players = [
    "static\\images\\80264.png", "static\\images\\81768.png", "static\\images\\81811.png", "static\\images\\86833.png",
    "static\\images\\86837.png", "static\\images\\88891.png", "static\\images\\101766.png", "static\\images\\118662.png",
    "static\\images\\125342.png", "static\\images\\133873.png", "static\\images\\141182.png", "static\\images\\187189.png"
];

    console.log(players);

    function displayCurrentPlayer() {
        console.log('Hello from displayCurrentPlayer');
            const playerImage = document.querySelector(".playerImage img");
            console.log(playerImage);
        if (currentPlayerIndex < players.length) {
            const currentPlayer = players[currentPlayerIndex];
            // document.getElementById("currentPlayer").textContent = currentPlayer;
            playerImage.src = currentPlayer;
        } else {
            document.getElementById("message").textContent = "All players matched!";
        }
    }

    document.querySelector(".skip").addEventListener("click", () => {
    // Move to the next player in the list
    currentPlayerIndex++;

    // If the player index exceeds the number of players, reset to the first player
    if (currentPlayerIndex >= players.length) {
        currentPlayerIndex = 0;
    }

    // Display the next player
    displayCurrentPlayer();
});
    // Handle grid item click
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("click", () => {
            if (currentPlayerIndex < players.length) {
                const validPlayers = item.dataset.validPlayers.split(",").map(Number);
                console.log(validPlayers);
                const currentPlayer = players[currentPlayerIndex];
                console.log(currentPlayer);
                console.log(currentPlayer.number);
                console.log(validPlayers.includes(currentPlayer.number));
                console.log(currentPlayerIndex);
                console.log(validPlayers.includes(currentPlayerIndex + 1));

                if (validPlayers.includes(currentPlayerIndex + 1)) {
                    // Replace the image with the player's name and number
                    // console.log(item);
                    // item.innerHTML = `<strong>${currentPlayer}</strong>`;
                    // console.log(currentPlayer);
                    const imgElement = item.querySelector("img");
                    imgElement.src = `${currentPlayer}`;

                    // Move to the next player
                    currentPlayerIndex++;
                    displayCurrentPlayer();
                } else {
                    item.style.transition = "box-shadow 0.3s ease";
                    item.style.boxShadow = "0 0 20px red";

                        setTimeout(() => {
                    item.style.boxShadow = ""; // Reset the shadow
                }, 500);
                }
            }
        });
    });
