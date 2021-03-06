const config = {
	width: 640,
	height: 480,
	backgroundColor: 0x6bd0f2, //0x58e0c0,
	pixelArt: true,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 600 },
			debug: false,
			checkCollision: {
				up: false,
				down: true,
				left: true,
				right: true,
			},
		},
	},
	scene: [BootGame, MainMenu, Tutorial, PlayGame, GameOver],
};

window.onload = () => {
	game = new Phaser.Game(config);
};
