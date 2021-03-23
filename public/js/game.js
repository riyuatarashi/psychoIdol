class Game {
	constructor() {
		
	}

	update() {
		this.updateTimer = requestAnimationFrame(this.update.bind(this));

		_OBJ_.camera.update();
		_OBJ_.character.update(_OBJ_.camera.x, _OBJ_.camera.y);
	}
}