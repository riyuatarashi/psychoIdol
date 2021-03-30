class Monster extends Character {
	constructor(x, y, direction, sprite, offsetX, offsetY, pp = .5, hp = 5) {
		super(x, y, direction, sprite, offsetX, offsetY, pp, hp, true);

		this.speed = 150;
	}

	auto_move(camX = 0, camY = 0) {
		if(!(_OBJ_.game.frameId % this.speed)) {
			let direction, x, y;

			do {
				direction = _DIRECTION[randInRange(0, 4)];
				x = this.x + _DIRECTION_VALUE[direction].upcoming.x;
				y = this.y + _DIRECTION_VALUE[direction].upcoming.y;
			} while(!_OBJ_.map.spriteIsWalkable(x, y));

			this.changeDirection(direction);
			this.attack_opponent();
		}

		this.update(camX, camY);
		this.frame++;
	}

	attack_opponent() {
		_OBJ_.attacks.push(new Attack("monster", "character", _CELLS_SIZE/2, _DIRECTION[this.direction], "#fff", 5));
	}
}