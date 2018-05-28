export default class Star {
	
	constructor() {
		this.positions = {
			x : [1,2,3,4],
			y : [1,2,3]
		};
		
		this.x = this.getRandomPosition('x'); // random x position
		this.y = this.getRandomPosition('y'); // random y position
		
		this.sprite = 'images/Star.png';
		
		this.showStar = true;
	}
	
	/**
	 * render
	 */
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x * 101, ((this.y * 83) - 15), 101, 171); // -15 to fix star position in the middle.
	}
	
	/**
	 * get a random x or y axis position
	 */
	getRandomPosition(param) {
		return this.positions[param][Math.floor(Math.random()*this.positions[param].length)];
	}
	
	/**
	 * define a new position to x and y axis
	 */
	newStarRandomPosition() {
		this.x = this.getRandomPosition('x');
		this.y = this.getRandomPosition('y');
	}
}