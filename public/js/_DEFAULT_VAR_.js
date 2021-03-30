var // variable semi-contante, l'utilisateur, ou le jeux pourra les faires changer au cour de la partie
	_MAP_SIZE = {"width": 20, "height": 20};

const // toute les constantes
	canvas = document.getElementById('box'),
	context = canvas.getContext('2d'),
	main = document.querySelector('main'),

	_CELLS_SIZE = 48,
	_PADDING = 3 * _CELLS_SIZE,

		// taille du canvas en px
	_WORLD_WIDTH = getPowOf(main.offsetWidth, _CELLS_SIZE, _MAP_SIZE.width, _PADDING),
	_WORLD_HEIGHT = getPowOf(main.offsetHeight, _CELLS_SIZE, _MAP_SIZE.height, _PADDING),

		// taille du canvas en nb de cellules
	_COUNT_CELLS_WIDTH = _WORLD_WIDTH / _CELLS_SIZE,
	_COUNT_CELLS_HEIGHT = _WORLD_HEIGHT / _CELLS_SIZE,
	_MAX_CELLS_WIDTH = _COUNT_CELLS_WIDTH-1,
	_MAX_CELLS_HEIGHT = _COUNT_CELLS_HEIGHT-1,

		// variable relative au sprites
	_COLORS = {
		'clear': "rgba(0,0,0,0)",
		'red': "#f0413f",
		'green': "#40ec3a",
		'purple': "#c875ec"
	},

	_SPRITES = {
		"empty": _COLORS.clear,
		"wall": _COLORS.red,
		"entry": _COLORS.green,
		"exit": _COLORS.purple,
		"character": _COLORS.clear,

		"walkable": [ "empty", "entry", "exit" ]
	},

		// variable pour les changement de directions des éléments mouvant
	_DIRECTION = [
		"up",
		"down",
		"right",
		"left"
	],

	_DIRECTION_VALUE = {
		"up": {
			"upcoming": { "x": 0, "y": -1 },
			"animation": 3
		},
		"down": {
			"upcoming": { "x": 0, "y": 1 },
			"animation": 0
		},
		"right": {
			"upcoming": { "x": 1, "y": 0 },
			"animation": 2
		},
		"left": {
			"upcoming": { "x": -1, "y": 0 },
			"animation": 1
		}
	};


var // variable constante mais généré automatiquement
	_SPRITES_CODE = {};
	let i=0;
	for(let key in _SPRITES) {
		_SPRITES_CODE[key] = i;
		i++;
	}

var // dernière variable semi-contante, l'utilisateur, ou le jeux pourra les faires changer au cour de la partie
	_KEYS_DIRECTION = {
		"z": _DIRECTION[0],
		"q": _DIRECTION[3],
		"s": _DIRECTION[1],
		"d": _DIRECTION[2]
	},

	_FRAME_RATE_MAX = 60;