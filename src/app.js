import Enemy from './Enemy';
import Star from './Star';
import Player from './Player';

document.addEventListener('keyup', (e) => {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

(function startGame(global) {
	global.player = new Player();
	global.allEnemies = [new Enemy, new Enemy, new Enemy, new Enemy];
	global.star = new Star;
})(window);