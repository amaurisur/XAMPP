var Movie = (function (){

		var title,rating,id,getTitle,setTitle,setRating,getRating,setId,getId,play,stop,suscribir,cartel;
		var suscriptores = [];

		constructor = function (ti,ra,id){
		    title = ti,
		    rating = ra,
		    id = id

		};
		getTitle = function (){
			return title;
		};
		setTitle = function(t){
			title = t;
		};
		getRating = function(){
			return rating;
		};
		setRating = function(r){
			rating = r;
		};
		getId = function (){
			return id;
		};
		setId = function(i){
			id = i;
		};
	
		play = function(){
			alert("Comenzo: " + title);
			console.log("Ya Comienza: " + title + " No te lo pierdas ");
			for(var i = 0, l = suscriptores.length; i < l; i++) {
					suscriptores[i].verPeli(title);
			    		}
		};

		stop = function(){
			alert("Fin pelicula" + title);
			console.log("Acabas de ver: " + title );
			for(var i = 0, l = suscriptores.length; i < l; i++) {
					suscriptores[i].terminaPeli(title);
			    		}
		};

		//alert("Ingerso a movie.js"),

		cartel = function cartel(){
			alert ("ejecuto funcion alert de movie.js");
		};

		suscribir = function(wm){
			suscriptores.push(wm);
		};

		constructor.prototype = {
						suscribir : suscribir,	
						play : play,
						stop : stop,
						setId : setId,
						getId : getId,
						setRating : setRating,
						getRating : getRating,
						setTitle : setTitle,
						getTitle : getTitle
			   		};
		return constructor;
}());
