class Game {
	constructor(numberMonster) {
		this.numberMonster = numberMonster;

		this.openMenu = [];
		this.key_type = null;

		this.submits = document.querySelectorAll('.submit');
		this.changeKeys = document.querySelectorAll('.change-key');

		this.frameId = 0;
		this.frameTime = Date.now();

		var _this = this;
		window.addEventListener("keydown", function(e) {
			if(e.key === "Escape") {
				_this.diplayMenu('key-menu');
				_this.stopUpdate();
			}
			else if(~_this.openMenu.indexOf('key-menu') && _this.key_type !== null) {
				_this.changeKey(e.key, _this.key_type);
			}
		});

		for(let i=0; i < this.submits.length; i++) {
			this.submits[i].addEventListener("click", function(e) {
				_this.hideMenu(e.target.attributes.ref.value);
				_this.update();
			});
		}
	}

	setKeyType(type) {
		console.log(type);
		this.key_type = type;
	}

	update() {
		if(_OBJ_.monsters.length == 0) { this.createMonster(); }

		this.updateTimer = requestAnimationFrame(this.update.bind(this));

		if(Date.now()-this.frameTime >= 1000/_FRAME_RATE_MAX) {
			this.frameId++;

			_OBJ_.camera.update();
			_OBJ_.character.update();

			for(let i=0; i<_OBJ_.monsters.length; i++) {
				_OBJ_.monsters[i].auto_move();
			}

			for(let i=0, status; i<_OBJ_.attacks.length; i++) {
				status = _OBJ_.attacks[i].update();
				if(status !== "exist") {
					_OBJ_.attacks.splice(i, 1);
				}
				console.log(status);
			}

			this.frameTime = Date.now();
		}

		if(_OBJ_.monsters.length == 0) {
			this.gameWin();
		}
	}

	stopUpdate() {
		cancelAnimationFrame(this.updateTimer);
		this.updateTimer = null;
	}

	diplayMenu(menu) {
		document.getElementById(menu).classList.remove('d-none');
		this.openMenu.push(menu);
	}

	hideMenu(menu) {
		document.getElementById(menu).classList.add('d-none');
		this.openMenu.splice(this.openMenu.indexOf(menu), 1);
	}

	changeKey(newKey, type) {
		let keySet = Object.entries(_KEYS_DIRECTION);

		for(let i=0; i < keySet.length; i++) {
			if(~keySet[i].indexOf(type)) {
				keySet[i][0] = newKey;
			}
		}

		_KEYS_DIRECTION = Object.fromEntries(keySet);
		console.log('key-' + type);
		document.getElementById('key-' + type).innerText = newKey;
	}

	createMonster() {
		for(let i=0; i<this.numberMonster; i++) {
			_OBJ_.monsters.push(new Monster(i, document.getElementById('Monster'), 2, 1, randInRange(85, 151)));
		}
	}

	gameOver() {
		this.stopUpdate();
		alert("Vous avez perdu, recherger la page pour recommancer !");
	}

	gameWin() {
		this.stopUpdate();
		alert("Vous avez gagné, recherger la page pour recommancer !");
	}
}
