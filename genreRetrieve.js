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

// declare artists here

murderworld.artistsArray = [
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
	"Gold and Youth ",
	"Gord Downie, The Sadies, And The Conquering Sun", 
	"Hayden", 
	"In The Valley Below", 
	"Jason Collett", 
	"Kevin Drew", 
	"Los Campesinos!", 
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

// end artists Array



// start genre checker
// accepts an array
// shoots value to ajax call
// makes call
// outputs two variables: the name of the artist, and the genre.
// output used for future use.

murderworld.genreChecker = function (artistList){
	console.log
};

// end genre checker





// initializers
murderworld.init = function (){

};


// final check to fire doc ready status

$(document).ready(function(){
	murderworld.init();
});