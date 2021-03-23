class Character {
	constructor(x, y, direction, sprite, offsetX, offsetY) {
		this.x = x;
		this.y = y;
		this.newX = 0;
		this.newY = 0;
		this.direction = (direction == null) ? 0 : direction;
		this.sprite = sprite;
		this.offsetX = offsetX;
		this.offsetY = offsetY;

		this.state = 1;
		this.anime = 0;

		this.speed = 2;

		var _this = this;
		window.addEventListener("keydown", function(e) {
			if(_KEYS_DIRECTION[e.key]) {
				_this.changeDirection(_KEYS_DIRECTION[e.key]);
			}
		});
	}

	draw(camX, camY) {		
		var sprite = this.sprite,
			sx = (this.offsetX*144)+(this.state*48),
			sy = (this.offsetY*192)+(this.direction*48),
			sLargeur = 48,
			sHauteur = 48,
			dx = ((this.x-camX)*_CELLS_SIZE)-this.newX,
			dy = ((this.y-camY)*_CELLS_SIZE)-this.newY,
			dLargeur = _CELLS_SIZE,
			dHauteur = _CELLS_SIZE;

		context.drawImage(sprite, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);
	}

	update(camX = 0, camY = 0) {
		if(this.anime%8 == 0 && this.anime != 0) {
			this.state = (this.state-1 < 0) ? 2 : this.state-1;
		} else if( this.anime == 0) { this.state = 1; this.anime = 0; }

		this.anime = (this.anime <= 0) ? 0 : this.anime-this.speed;

		this.newX = (this.anime == 0 || Math.abs(this.newX) <= this.speed) ? 0 : this.newX;
		this.newY = (this.anime == 0 || Math.abs(this.newY) <= this.speed) ? 0 : this.newY;

		this.newX = (this.newX > 0) ? this.newX-this.speed : this.newX+this.speed;
		this.newY = (this.newY > 0) ? this.newY-this.speed : this.newY+this.speed;

		this.draw(camX, camY);
	}

	changeDirection(direction) {
		if(Math.abs(this.newY) < _CELLS_SIZE*.5 && Math.abs(this.newX) < _CELLS_SIZE*.5) {
			let value = _DIRECTION_VALUE[direction],
				upcoming = {
					"x": this.x + value.upcoming.x,
					"y": this.y + value.upcoming.y
				};

			if(_OBJ_.map.isInMap(upcoming.x, upcoming.y) && _OBJ_.map.spriteIsWalkable(upcoming.x, upcoming.y))
			{
				this.x = upcoming.x;
				this.y = upcoming.y;
				this.direction = value.animation;
				this.anime = _CELLS_SIZE;

				switch(direction) {
					case "up":
						this.newY += -_CELLS_SIZE;
						break;
						
					case "down":
						this.newY += _CELLS_SIZE;
						break;
						
					case "right":
						this.newX += _CELLS_SIZE;
						break;
						
					case "left":
						this.newX += -_CELLS_SIZE;
						break;
				}
			}
		}
	}
}