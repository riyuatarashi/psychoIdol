class Monster extends Character {
	constructor(x, y, direction, sprite, offsetX, offsetY) {
		super(x, y, direction, sprite, offsetX, offsetY, true);

		this.speed = 300;
		this.frame = 0;
	}

	auto_move(camX = 0, camY = 0) {
		if(!(this.frame % this.speed)) {
			console.log(_DIRECTION[randInRange(0, 4)]);
			this.changeDirection(_DIRECTION[randInRange(0, 4)]);
		}

		this.update(camX, camY);
		this.frame++;
	}
}