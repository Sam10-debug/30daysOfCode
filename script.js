let sum=0
const arrs=[1,2,3,4,5]
lol.apply(this,arrs) //adding the array to the function lol as the parameter
function lol(){
    for (i=0;i<arrs.length;i++){
        sum+=arrs[i]
    }
    console.log(`the sum is ${sum}`)
}