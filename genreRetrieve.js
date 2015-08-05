// %%%%%%%%%%%%%%%%%%%%%%%%% begin JS notes
// 1) create array of artists under and brand
// 2) loop through that array, searching for the genre in echo api
// 3) return those genres to another array for further processing
// 4) end program
//
// 
//
// %%%%%%%%%%%%%%%%%%%%%%%%% begin JS notes
console.log("murderworld online!");
var murderworld ={};

murderworld.echoApi 		= "IIDEXTACNIDGJQBQQ";
murderworld.echoArtistsUrl 	= "http://developer.echonest.com/api/v4/artist/search?";

// declare artists here

murderworld.artistsArray = function (){
	var artistList = [
	"Absolutely Free ",
	"Amy Millan ",
	"Andy Kim ",
	"BADBADNOTGOOD ",
	"Bell Orchestre ",
	"Bishop Morocco ",
	"Black English", 
	"Bloc Party", 
	"Broken Social Scene", 
	"Calvin Love", 
	"Charles Spearin", 
	"Chikita Violenta", 
	"Chilly Gonzales ",
	"Cold Specks", 
	"Dan Mangan", 
	"Deer Tick", 
	"Eight and a Half", 
	"Farao", 
	"Feist", 
	"Fucked Up", 
	"Gold and Youth",
	"Gord Downie, The Sadies, And The Conquering Sun", 
	"Hayden", 
	"In The Valley Below", 
	"Jason Collett", 
	"Kevin Drew", 
	"Los Campesinos!" ,
	"Lowell" ,
	"Memphis" ,
	"Mia Maestro" ,
	"Moby" ,
	"No Joy" , 
	"Ra Ra Riot" , 
	"Reuben And The Dark" ,
	"Rey Pila" ,
	"Royksopp" ,
	"Royksopp and Robyn" ,
	"Sally Seltmann" ,
	"Snowblink" ,
	"Still Life Still" ,
	"Tei Shi" ,
	"The Cribs" , 
	"The Darcys" ,
	"The Drums" ,
	"Timber Timbre" ,
	"Tobias Jesso Jr" , 
	"Torres" ,
	"Tricky" ,
	"Trust" ,
	"TR/ST",
	"WIN WIN",
	"Years",
	"Zeus",
	"Zulu Winter" 
	];
	murderworld.genreChecker(artistList);
};


// end artists Array



// start genre checker
// accepts an array
// shoots value to ajax call
// makes call
// outputs two variables: the name of the artist, and the genres associated
// output used for future functions.

murderworld.genreChecker = function (artistList){
	console.log("entering Genre Checker!");
	
	// verify array integrity
	console.log(artistList);
	$.each(artistList, function(index, item){
		var artist 	= item;
		var genre 	= "";	
		
		$.ajax({
			url: murderworld.echoArtistsUrl,
			type: "GET",
			dataType: "json",
			data:{
				api_key: murderworld.echoApi,
				format:"json",
				name: artist,
				bucket: "genre"
			},
			success: function (rawGenre){
				var genre 		= (rawGenre.response.artists[0].genres); // this is an array
				var genreLength	= genre.length;
				console.log("this artist's name is:" + artist);
				console.log("there are " + genreLength + " genres associated with this artist");
				console.log(genre);
				console.log("exiting ajax call");	
				//call arrangement function or printing function here
			}
		});
		
		
	});
	console.log("exiting genre checker");
};

// end genre checker

// initializers
murderworld.init = function (){
	murderworld.artistsArray();
};

// final check to fire doc ready status

$(document).ready(function(){
	murderworld.init();
});