class Character {
	constructor(sprite, offsetX, offsetY, x = null, y = null, direction = 0, pa = 1, hp = 5, monster = false) {
		this.x = (x === null) ? _OBJ_.map.entry.x : x;
		this.y = (y === null) ? _OBJ_.map.entry.y : y;
		this.lastX = x;
		this.lastY = y;

		this.newX = 0;
		this.newY = 0;
		this.direction = direction;
		this.sprite = sprite;
		this.offsetX = offsetX;
		this.offsetY = offsetY;

		this.pa = pa;
		this.hp = hp;

		this.state = 1;
		this.anime = 0;

		this.velocity = 2;

		if(!monster) {
			var _this = this;
			window.addEventListener("keydown", function(e) {
				if(_KEYS_DIRECTION[e.key] && _OBJ_.game.updateTimer !== null) {
					_this.changeDirection(_KEYS_DIRECTION[e.key]);
				}
			});

			window.addEventListener('click', function() {
				if(_OBJ_.game.updateTimer !== null) {
					_this.attack();
				}
			});
		}
	}

	attack() {
		_OBJ_.attacks.push(new Attack("character", "monster", _CELLS_SIZE, _DIRECTION[this.direction], "#fff", 5));
	}

	draw() {		
		var sprite = this.sprite,
			sx = (this.offsetX*144)+(this.state*48),
			sy = (this.offsetY*192)+(this.direction*48),
			sLargeur = 48,
			sHauteur = 48,
			dx = ((this.x-_OBJ_.camera.x)*_CELLS_SIZE)-this.newX,
			dy = ((this.y-_OBJ_.camera.y)*_CELLS_SIZE)-this.newY,
			dLargeur = _CELLS_SIZE,
			dHauteur = _CELLS_SIZE;

		context.drawImage(sprite, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);
	}

	update() {
		if(this.hp > 0) {
			if(this.anime%8 == 0 && this.anime != 0) {
				this.state = (this.state-1 < 0) ? 2 : this.state-1;
			} else if( this.anime == 0) { this.state = 1; this.anime = 0; }

			this.anime = (this.anime <= 0) ? 0 : this.anime-this.velocity;

			this.newX = (this.anime == 0 || Math.abs(this.newX) <= this.velocity) ? 0 : this.newX;
			this.newY = (this.anime == 0 || Math.abs(this.newY) <= this.velocity) ? 0 : this.newY;

			this.newX = (this.newX > 0) ? this.newX-this.velocity : this.newX+this.velocity;
			this.newY = (this.newY > 0) ? this.newY-this.velocity : this.newY+this.velocity;

			this.draw();
		}
		else {
			_OBJ_.game.gameOver();
		}
	}

	changeDirection(direction, write = "character") {
		if(Math.abs(this.newY) < _CELLS_SIZE*.5 && Math.abs(this.newX) < _CELLS_SIZE*.5) {
			let value = _DIRECTION_VALUE[direction],
				upcoming = {
					"x": this.x + value.upcoming.x,
					"y": this.y + value.upcoming.y
				};

			this.direction = value.animation;

			if(_OBJ_.map.isInMap(upcoming.x, upcoming.y) && _OBJ_.map.spriteIsWalkable(upcoming.x, upcoming.y))
			{
				this.lastX = this.x;
				this.lastY = this.y;
				this.x = upcoming.x;
				this.y = upcoming.y;

				_OBJ_.map.eraseInMap(this.lastX, this.lastY);
				_OBJ_.map.writeInMap(this.x, this.y, write, true);

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