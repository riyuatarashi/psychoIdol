class Camera {
	constructor(x, y) {
		this.visionWidth = _MAX_CELLS_WIDTH;
		this.visionHeight = _MAX_CELLS_HEIGHT;

		this.x = (x + this.visionWidth > _MAP_SIZE.width) ? _MAP_SIZE.width - this.visionWidth-1 : (x < 0) ? 0 : x;
		this.y = (y + this.visionHeight > _MAP_SIZE.height) ? _MAP_SIZE.height - this.visionHeight-1 : (y < 0) ? 0 : y;
	}

	update() {
		if(_OBJ_.character.x > this.x+this.visionWidth) { this.move(1, 0); }
		else if(_OBJ_.character.x < this.x) { this.move(-1, 0); }
		if(_OBJ_.character.y > this.y+this.visionHeight) { this.move(0, 1); }
		else if(_OBJ_.character.y < this.y) { this.move(0, -1); }

		_OBJ_.map.drawMap(this.x, this.y);
	}

	move(x, y) {
		let newX = this.x + x*this.visionWidth,
			newY = this.y + y*this.visionHeight;
		this.x = (newX + this.visionWidth > (_MAP_SIZE.width-1)) ? (_MAP_SIZE.width-1) - this.visionWidth : (newX < 0) ? 0 : newX;
		this.y = (newY + this.visionHeight > (_MAP_SIZE.height-1)) ? (_MAP_SIZE.height-1) - this.visionHeight : (newY < 0) ? 0 : newY;
	}
}