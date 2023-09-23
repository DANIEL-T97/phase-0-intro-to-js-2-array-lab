var cats =['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(bosco) {
    cats.push(bosco);
}
function destructivelyPrependCat(tiana){
    cats.unshift(tiana);
}
function destructivelyRemoveLastCat(bosco){
    cats.pop();
}
function destructivelyRemoveFirstCat(tiana){
    cats.shift();
}
function appendCat(tatiana){
    return [...cats, tatiana];
}
function removeFirstCat(){
    return cats.slice(1);
}
function prependCat(kamaliza){
    return [kamaliza, ...cats];
}
function removeLastCat(){
    return cats.slice(0,-1);
}