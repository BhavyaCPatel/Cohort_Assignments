let counter = 0
console.log(counter) 
const count = () => {
    setTimeout(()=>{
        counter+=1
        console.log(counter)
        count();
    },1000) 
}

count();

