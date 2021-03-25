class Materializer{
constructor(targetName){
this.target = targetName,
this.activated = false;

}
activate(){
return this.activated = true;}

materialize(){
if (this.activated === true){
return this.target}
else{
return undefined}}

}
const m = new Materializer('Kevin');
console.log(m.activated);

m.activate();
console.log(m.activated);

console.log(m.materialize());
