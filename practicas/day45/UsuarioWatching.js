function watchMoves(nombre) {
    this.nombre = nombre
};
watchMoves.prototype.verPeli = function(peli) {
    		console.log(this.nombre + " mirando: " + peli);
	};
watchMoves.prototype.terminaPeli = function(peli) {
    		console.log(this.nombre + " termine de ver: " + peli);
	};
