var Mixin = {
		compartir: function(nombreAmigo){
					console.log("Compartiendo "+ this.title +" con " + nombreAmigo);
			},
		meGusta: function(){
					console.log('Me gusta');
				   
			}
};

/*copy paste de libro JavaScript Patterns*/
Mixin.mix = function() {
			var arg, prop, child = {};
			for (arg = 0; arg < arguments.length; arg += 1) {
				for (prop in arguments[arg]) {
					if (arguments[arg].hasOwnProperty(prop)) {
						child[prop] = arguments[arg][prop];
					}
				}
			}
		return child;
		};
