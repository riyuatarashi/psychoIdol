class Attack {
	constructor(objectOrigineName, opponentName, velocity, direction, color, size) {
		if(Array.isArray(objectOrigineName)) {
			this.object = _OBJ_[objectOrigineName[0]][objectOrigineName[1]];
		} 
		else { this.object = _OBJ_[objectOrigineName]; }
		
		this.opponentName =opponentName;
		this.velocity = velocity;
		this.color = color;
		this.size = size;
		this.direction = direction;

		this.x = ((this.object.x + _DIRECTION_VALUE[direction].upcoming.x) * _CELLS_SIZE) + (_CELLS_SIZE/2 - size/2);
		this.y = ((this.object.y + _DIRECTION_VALUE[direction].upcoming.y) * _CELLS_SIZE) + (_CELLS_SIZE/2 - size/2);
		this.status = "exist";
	}

	update() {
		this.status = this.move();

		if (this.status == "exist") { this.draw(); }

		return this.status;
	}

	draw() {
		context.fillStyle = this.color;
		context.fillRect(this.x - (_OBJ_.camera.x*_CELLS_SIZE), this.y - (_OBJ_.camera.y*_CELLS_SIZE), this.size, this.size);
	}

	move() {
		this.x += _DIRECTION_VALUE[this.direction].upcoming.x * this.velocity;
		this.y += _DIRECTION_VALUE[this.direction].upcoming.y * this.velocity;

		if(this.x+this.size < 0 || this.x > _WORLD_WIDTH || this.y+this.size < 0 || this.y > _WORLD_HEIGHT) {
			return "missed";
		}

		let spriteOfBox = _OBJ_.map.getEntity(Math.trunc(this.x/_CELLS_SIZE), Math.trunc(this.y/_CELLS_SIZE));

		if(spriteOfBox !== "empty") {
			if(spriteOfBox[1] == this.opponentName) {
				if(spriteOfBox[1] != "monsters")
					_OBJ_[spriteOfBox[1]].hp -= this.object.pa;
				else
					_OBJ_.monsters[spriteOfBox[2]].hp -= this.object.pa;
				
				return "touched";
			}
			else {
				return "missed";
			}
		}

		return "exist";
	}
}