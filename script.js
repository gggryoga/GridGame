document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    const gridSize = 5; // グリッドのサイズ（行と列の数）
    let playerPosition = { x: 0, y: 0 }; // プレイヤーの初期位置

    // グリッドを生成
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const cell = document.createElement("div");
            cell.className = "grid-cell";
            gridContainer.appendChild(cell);
        }
    }

    // プレイヤーの初期位置を設定
    const playerCell = gridContainer.children[playerPosition.y * gridSize + playerPosition.x];
    playerCell.classList.add("player-cell");

    // キー入力を監視
    document.addEventListener("keydown", (event) => {
        const key = event.key;
        movePlayer(key);
    });

    // プレイヤーの移動関数
    function movePlayer(direction) {
        const oldPlayerCell = gridContainer.children[playerPosition.y * gridSize + playerPosition.x];
        oldPlayerCell.classList.remove("player-cell");

        switch (direction) {
            case "ArrowUp":
                if (playerPosition.y > 0) {
                    playerPosition.y--;
                }
                break;
            case "ArrowDown":
                if (playerPosition.y < gridSize - 1) {
                    playerPosition.y++;
                }
                break;
            case "ArrowLeft":
                if (playerPosition.x > 0) {
                    playerPosition.x--;
                }
                break;
            case "ArrowRight":
                if (playerPosition.x < gridSize - 1) {
                    playerPosition.x++;
                }
                break;
        }

        const newPlayerCell = gridContainer.children[playerPosition.y * gridSize + playerPosition.x];
        newPlayerCell.classList.add("player-cell");
    }
});

