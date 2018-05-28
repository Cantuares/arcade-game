export default class Player {

	constructor() {
		this.x = 2;
		this.y = 5;
		this.sprite = 'images/char-boy.png';
		this.star = false;
		this.dead = false;
		this.score = 0;
	}
	
	/**
	 * render
	 */
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x * 101, ((this.y * 83) - 15), 101, 171); // -15 to fix player position in the middle.
	}
	
	/**
	 * control the position that player will move.
	 */
	handleInput(key) {
		(key == 'up' ? 
		 this.y - 1 < 0 ? this.y = 0 : this.y-- : this.y);
		(key == 'down' ? 
		 this.y + 1 > 5 ? this.y = 5 : this.y++ : this.y);
		(key == 'left' ? 
		 this.x - 1 < 0 ? this.x = 0 : this.x-- : this.x);
		(key == 'right' ? 
		 this.x + 1 > 4 ? this.x = 4 : this.x++ : this.x);
	}
}