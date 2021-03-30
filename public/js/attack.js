class Attack {
	constructor(ObjectOrigineName, velocity, direction, color, size) {
		this.ObjectOrigineName = ObjectOrigineName;
		this.velocity = velocity;
		this.color = color;
		this.size = size;
		this.direction = direction;

		this.x = _OBJ_[this.ObjectOrigineName].x;
		this.y = _OBJ_[this.ObjectOrigineName].y;
		this.status = "exist";
	}

	update() {
		if(_OBJ_['game'].frameId % this.velocity === 0) {
			this.status = this.move();

			if(this.status === "exist") {
				this.draw();
			}
		}

		return this.status;
	}

	draw() {
		context.fillStyle = this.color;
		context.fillRect(x, y, this.size, this.size);
	}

	move() {
		this.x += _DIRECTION_VALUE[direction].upcoming.x;
		this.y += _DIRECTION_VALUE[direction].upcoming.y;

		let spriteOfBox = getSprite(Math.trunc(this.x/16), Math.trunc(this.y/16));

		if(spriteOfBox != "empty") {
			if(spriteOfBox != "wall") {
				_OBJ_[spriteOfBox].hp -= _OBJ_[this.ObjectOrigineName].pp;
				return "touched";
			}
			else {
				return "missed";
			}
		}

		return "exist";
	}
}