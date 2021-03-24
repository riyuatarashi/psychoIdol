class Game {
	constructor() {
		this.submits = document.querySelectorAll('.submit');

		var _this = this;
		window.addEventListener("keydown", function(e) {
			if(e.key === "Escape") {
				_this.manageMenu('key-menu');
			}
		});

		for(let i=0; i < this.submits.length; i++) {
			this.submits[i].addEventListener("click", function(e) {
				_this.manageMenu(e.target.attributes.ref.value, "close");
			});
		}
	}

	update() {
		this.updateTimer = requestAnimationFrame(this.update.bind(this));

		_OBJ_.camera.update();
		_OBJ_.character.update(_OBJ_.camera.x, _OBJ_.camera.y);
	}

	manageMenu(menu, type = "open") {
		switch(menu) {
			case 'key-menu':
				if(type == "open") {
					this.diplayMenu(menu);
				}
				else {
					this.hideMenu(menu);
				}
				break;
		}
	}

	diplayMenu(menu) {
		document.getElementById(menu).classList.remove('d-none');
	}

	hideMenu(menu) {
		document.getElementById(menu).classList.add('d-none');
	}
}