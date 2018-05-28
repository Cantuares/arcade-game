export default class Enemy {

	constructor() {
		this.positions = [1,2,3]; // Enemy (y) positions.
		this.x = -110;
		this.y = this.positions[Math.floor(Math.random()*this.positions.length)];
		this.speed = Math.floor(Math.random() * (400 - 250) + 250);
		this.sprite = 'images/enemy-bug.png';
	}
	
	/**
	 * velocity and position control
	 */
	update(dt) {
		this.x = (this.x + (dt * this.speed));
		if (this.x >= ctx.canvas.width) {
			this.x = -110;
			this.y = this.positions[Math.floor(Math.random()*this.positions.length)];
		}
	}
	
	/**
	 * render
	 */
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, ((this.y * 83) - 25), 101, 171); // -25 to fix enemy position in the middle.
	}
}+