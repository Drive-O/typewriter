const app = {
	text: "Schau dir den coolen Schreibeffekt an. Boah, das ja echt wahnsinn!",
	textContainer: [],
	index: 0,
	chars: 0,
	speed: 100,
	tagName: "h1",
	container: null,
	getTag: function(){
		this.container = document.getElementsByTagName(this.tagName);
		return this.container;
	},
	init: function(){
		this.chars = this.text.length;
		this.getTag();
		this.write();
	},
	write: function(){
		this.textContainer.push(this.text[this.index]);
		this.container[0].textContent =  this.textContainer.join(""); //entferne Kommas und form in String um
		if(this.index < this.chars){
			this.index++;
			return setTimeout(function(){
				return app.write();
			}, this.speed);
		}
	}
}

app.init();