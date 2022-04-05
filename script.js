let sum=0
const arrs=[1,2,3,4,5]
arraySum.apply(this,arrs) //adding the array to the function arraySum as the parameter
function arraySum(){
    for (i=0;i<arrs.length;i++){
        sum+=arrs[i]
    }
    document.write(`the sum is ${sum}`)
}