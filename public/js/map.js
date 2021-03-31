class Map {
	constructor(mapCode = null) {
		this.mapCode = [];

		if(mapCode == null)
			this.randMap();
	}

	isInMap(x, y) {
		return (
			(
				Math.abs(_MAP_SIZE.width - x) > 0
					&&
				Math.abs(_MAP_SIZE.height - y) > 0
			)
				||
			(
				Math.abs(_MAP_SIZE.width - x) < _MAP_SIZE.width
					&&
				Math.abs(_MAP_SIZE.height - y) < _MAP_SIZE.height
			)
		);
	}

	getOffset(x, y) {
		return y*_MAP_SIZE.width + x;
	}

	randXY(type) {
		var x = 0, y = 0;

		while(x==0&&y==0||x==_MAP_SIZE.width-1&&y==0||y==_MAP_SIZE.height-1&&x==0||x==_MAP_SIZE.width-1&&y==_MAP_SIZE.height-1) {
			switch(type) {
				case true:
					x = randInRange(1, _MAP_SIZE.width);
					y = randInRange(0,2) ? 0 : _MAP_SIZE.height-1;
					break;

				default:
					x = randInRange(0,2) ? 0 : _MAP_SIZE.width-1;
					y = randInRange(1, _MAP_SIZE.height);
			}
		}

		return {"x": x, "y": y};
	}

	randMap() {
		var entry = null, exit = null, last = {}, randCase = randInRange(0,2);

		this.entry = this.randXY(!!randCase);
		this.exit = this.randXY(!randCase);

		for(let y=0; y<_MAP_SIZE.height; y++) {
			for(let x=0; x<_MAP_SIZE.width; x++) {
				if(y==0 || x == 0 || x == _MAP_SIZE.width-1 || y == _MAP_SIZE.height-1) { this.writeInMap(x, y, "wall"); }

				else if((!randInRange(0, _PROBABILITY) || (((x == last.x+1 && y == last.y) || (y == last.y+1 && x == last.x)) && !randInRange(0, 2)))) {
					this.writeInMap(x, y, "wall");
					last.x = x;
					last.y = y;
				}
				else { this.writeInMap(x, y, "empty"); }
			}
		}

		this.writeInMap(this.entry.x, this.entry.y, "entry");
		this.writeInMap(this.exit.x, this.exit.y, "exit");

		if(!randCase) {
			let add = (this.entry.x == 0) ? 1 : -1;
				this.writeInMap((this.entry.x+add), this.entry.y, "empty");

			add = (this.exit.y == 0) ? 1 : -1;
				this.writeInMap(this.exit.x, (this.exit.y+add), "empty");
		} else {
			let add = (this.entry.y == 0) ? 1 : -1;
				this.writeInMap(this.entry.x, (this.entry.y+add), "empty");

			add = (this.exit.x == 0) ? 1 : -1;
				this.writeInMap((this.exit.x+add), this.exit.y, "empty");
		}
	}

	drawMap(startX, startY, visionWidth = _COUNT_CELLS_WIDTH, visionHeight = _COUNT_CELLS_HEIGHT) {
		context.clearRect(0,0,_WORLD_WIDTH,_WORLD_HEIGHT);

		for(let i=this.getOffset(startX, startY), sprite, y=0, x=0; y<visionHeight; i++) {
			if(x == visionWidth) { y++; i += _MAP_SIZE.width-visionWidth; x = 0; }
			sprite = (Array.isArray(this.mapCode[i])) ? this.mapCode[i][0] : this.mapCode[i];
			this.drawSquare(x, y, sprite);
			x++;
		}
	}

	drawSquare(x, y, sprite) {
		context.fillStyle = _SPRITES[sprite];
		context.fillRect(x*_CELLS_SIZE, y*_CELLS_SIZE, _CELLS_SIZE, _CELLS_SIZE);
	}

	getSprite(x, y) {
		let spriteCode = this.mapCode[this.getOffset(x, y)];
		if(Array.isArray(spriteCode))
			return spriteCode[0];
		else 
			return spriteCode;
	}

	getEntity(x, y) {
		let spriteCode = this.mapCode[this.getOffset(x, y)];
		if (Array.isArray(spriteCode))
			return spriteCode;
		else
			return "empty";
	}

	spriteIsWalkable(x, y) {
		return (~_SPRITES.walkable.indexOf(this.getSprite(x, y)) != 0);
	}

	writeInMap(x, y, content, inside = false) {
		let offset = this.getOffset(x, y);

		if(isString(this.mapCode[offset]) && inside)
			if(Array.isArray(content)) {
				this.mapCode[offset] = [this.mapCode[offset], content[0], content[1]];
			}
			else
				this.mapCode[offset] = [this.mapCode[offset], content];
		else
			this.mapCode[offset] = content;
	}

	eraseInMap(x, y) {
		let offset = this.getOffset(x, y);

		if(Array.isArray(this.mapCode[offset])) {
			this.mapCode[offset] = this.mapCode[offset][0];
		}
	}

	logMap() {
		console.log(this.mapCode);
	}

	logMapCode() {
		let out = '', sprite;
        for (let i = 0; i < this.mapCode.length; i++) {
            if (i % _MAP_SIZE.width == 0 && i!=0) {
                out += '\n';
            }

            sprite = (Array.isArray(this.mapCode[i])) ? _SPRITES_CODE[this.mapCode[i][1]] : _SPRITES_CODE[this.mapCode[i]];

            out += sprite;
        }
        console.log(out);
	}
}