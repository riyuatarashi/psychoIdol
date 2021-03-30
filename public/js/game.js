class Game {
	constructor() {
		this.openMenu = [];
		this.key_type = null;

		this.submits = document.querySelectorAll('.submit');
		this.changeKeys = document.querySelectorAll('.change-key');

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
		this.updateTimer = requestAnimationFrame(this.update.bind(this));

		_OBJ_.camera.update();
		_OBJ_.character.update(_OBJ_.camera.x, _OBJ_.camera.y);

		for(let i=0; i<_OBJ_['attacks'].length; i++) {
			_OBJ_['attacks'][i].update();
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
}