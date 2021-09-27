
let somme =0;
for (let a=2 ; a < process.argv.length ; a++)
{
    somme +=Number(process.argv[a]);
}
console.log(process.argv);
console.log(somme);
