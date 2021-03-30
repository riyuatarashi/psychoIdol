class Map {
	constructor(mapCode = null) {
		this.mapCode = (mapCode == null) ? this.randMap() : mapCode;
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
		var entry = null, exit = null, last = {}, mapCode = [], randCase = randInRange(0,2);

		this.entry = this.randXY(!!randCase);
		this.exit = this.randXY(!randCase);

		for(let y=0; y<_MAP_SIZE.height; y++) {
			for(let x=0; x<_MAP_SIZE.width; x++) {
				if(x == this.entry.x && y == this.entry.y) { mapCode[this.getOffset(x, y)] = "entry"; }

				else if(x == this.exit.x && y == this.exit.y) { mapCode[this.getOffset(x, y)] = "exit"; }

				else if(y==0 || x == 0 || x == _MAP_SIZE.width-1 || y == _MAP_SIZE.height-1) { mapCode[this.getOffset(x, y)] = "wall"; }

				else if((!randInRange(0, 150) || (((x == last.x+1 && y == last.y) || (y == last.y+1 && x == last.x)) && !randInRange(0, 2)))) {
					mapCode[this.getOffset(x, y)] = "wall";
					last.x = x;
					last.y = y;
				}
				else { mapCode[this.getOffset(x, y)] = "empty"; }
			}
		}

		if(!randCase) {
			let add = (this.entry.x == 0) ? 1 : -1;
				mapCode[this.getOffset((this.entry.x+add), this.entry.y)] = "empty";

			add = (this.exit.y == 0) ? 1 : -1;
				mapCode[this.getOffset(this.exit.x, (this.exit.y+add))] = "empty";
		} else {
			let add = (this.entry.y == 0) ? 1 : -1;
				mapCode[this.getOffset(this.entry.x, (this.entry.y+add))] = "empty";

			add = (this.exit.x == 0) ? 1 : -1;
				mapCode[this.getOffset((this.exit.x+add), this.exit.y)] = "empty";
		}

		return mapCode;
	}

	drawMap(startX, startY, visionWidth = _COUNT_CELLS_WIDTH, visionHeight = _COUNT_CELLS_HEIGHT) {
		context.clearRect(0,0,_WORLD_WIDTH,_WORLD_HEIGHT);

		for(let i=this.getOffset(startX, startY), y=0, x=0; y<visionHeight; i++) {
			if(x == visionWidth) { y++; i += _MAP_SIZE.width-visionWidth; x = 0; }
			this.drawSquare(x, y, this.mapCode[i]);
			x++;
		}
	}

	drawSquare(x, y, sprite) {
		context.fillStyle = _SPRITES[sprite];
		context.fillRect(x*_CELLS_SIZE, y*_CELLS_SIZE, _CELLS_SIZE, _CELLS_SIZE);
	}

	getSprite(x, y) {
		return this.mapCode[this.getOffset(x, y)];
	}

	spriteIsWalkable(x, y) {
		return (~_SPRITES.walkable.indexOf(this.getSprite(x, y)) != 0);
	}

	logMapCode() {
		let out = '';
        for (let i = 0; i < this.mapCode.length; i++) {
            if (i % _MAP_SIZE.width == 0 && i!=0) {
                out += '\n';
            }

            out += _SPRITES_CODE[this.mapCode[i]];
        }
        console.log(out);
	}
}