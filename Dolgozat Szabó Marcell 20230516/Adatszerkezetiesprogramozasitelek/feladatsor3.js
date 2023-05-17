// 19. Feladat
let isValid = function(s){
    const hashMap = {"(" : ")", "{" : "}", "[" : "]"}
    const stack = []
    for(let ch of s){
        if(hashMap[ch]){
            stack.push(hashMap[ch])
        }else if(stack.length > 0 && stack[stack.length - 1] === ch){
            stack.pop()
        }else{
            return false
        }
    }
    return stack.length === 0;
    
};
console.log(s)

function helyeszarojel(S){
    st,x,S = read;
    helyes = true;
    V = Verem;
    if(helyes && st === nom){
        let x = ('{' || x === '[' || x === '(') 
        
        
    }else if (helyes && st === nom){
        let x = ('}' || x === ']' || x === ')') 
    }else{
        let x = prompt("SKIP");
    }
}