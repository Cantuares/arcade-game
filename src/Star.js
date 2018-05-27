export default class Star {
	
	constructor() {
		this.positions = {
			x : [1,2,3,4],
			y : [1,2,3]
		}
		this.x = this.getRandomPosition('x');
		this.y = this.getRandomPosition('y');
		
		this.sprite = 'images/Star.png';
		
		this.showStar = true;
	}

	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x*101, ((this.y*83)-15), 101, 171); // -15 to fix enemy position in the middle.
	}
	
	getRandomPosition(param) {
		return this.positions[param][Math.floor(Math.random()*this.positions[param].length)];
	}
	
	newStarRandomPosition() {
		this.x = this.getRandomPosition('x');
		this.y = this.getRandomPosition('y');
	}
}