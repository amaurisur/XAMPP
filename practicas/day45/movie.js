function Movie(title, rating, id){
    this.title = title,
    this.rating = rating,
    this.id = id,
    this.suscriptores = [],
    this.getTitle = function (){
        return this.title;
    },
    this.setTitle = function(t){
        this.title = t;
    },
    this.getRating = function(){
        return this.rating;
    },
    this.setRating = function(r){
        this.rating = r;
    },
    this.getId = function (){
        return this.id;
    },
    this.setId = function(i){
        this.id = i;
    }
};

Movie.prototype.play = function(){
	alert("Comenzo: " + this.title);
	console.log("Ya Comienza: " + this.title + " No te lo pierdas ");
	for(var i = 0, l = this.suscriptores.length; i < l; i++) {
			this.suscriptores[i].verPeli(this.title);
	    		}
    };
Movie.prototype.stop = function(){
	alert("Fin pelicula" + this.title);
	console.log("Acabas de ver: " + this.title );
	for(var i = 0, l = this.suscriptores.length; i < l; i++) {
			this.suscriptores[i].terminaPeli(this.title);
	    		}
    };

Movie.prototype.suscribir = function(wm){
	this.suscriptores.push(wm);
    };

alert("Ingerso a movie.js");

function cartel(){
	alert ("ejecuto funcion alert de movie.js");
};
