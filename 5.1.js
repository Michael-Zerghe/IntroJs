const readlineSync = require ("readline-sync");
let TvSerie = {
    "name" : "",
    "ProdYear" : "",
    "Cast" : []
};
let answer = "";
let n = 0;

function AskTvSerie(){
    TvSerie.name = readlineSync.question('What is your favorite Tv Serie? : ');
    TvSerie.ProdYear = readlineSync.question('When has it been produced ?(Year) : ');
    console.log("Enter the name of the cast members. When you are done, please write STOP to continue.");
    while(answer != "stop"){
        answer  = readlineSync.question('Enter a cast member name : ');
        TvSerie.Cast.push(answer);
        n +=1;
}
TvSerie.Cast.pop(n-1);
return TvSerie.Cast;
}
 console.log(AskTvSerie());