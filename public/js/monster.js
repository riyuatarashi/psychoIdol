class Monster extends Character {
	constructor(id, sprite, offsetX, offsetY, speed, x = null, y = null, direction = 0, pa = .5, hp = 1) {
		x = (x === null) ? _OBJ_.map.exit.x : x;
		y = (y === null) ? _OBJ_.map.exit.y : y;
		super(sprite, offsetX, offsetY, x, y, direction, pa, hp, true);

		this.id = id;
		this.speed = 150;
	}

	auto_move() {
		if(this.hp <= 0)
			this.desctruct();
		else {
			if(!(_OBJ_.game.frameId % this.speed)) {
				let direction = _DIRECTION[randInRange(0, 4)];
				this.x + _DIRECTION_VALUE[direction].upcoming.x;
				this.y + _DIRECTION_VALUE[direction].upcoming.y;

				this.changeDirection(direction, ["monsters", this.id]);
				this.attack_opponent();
			}

			this.update();
			this.frame++;
		}
	}

	attack_opponent() {
		_OBJ_.attacks.push(new Attack(["monsters", this.id], "character", (_CELLS_SIZE/2), _DIRECTION[this.direction], "#ff0000", 5));
	}

	desctruct() {
		_OBJ_.monsters.splice(this.id, 1);
	}
}