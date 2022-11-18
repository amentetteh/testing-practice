
class Test {

    stringLength(string){
        return string.length;
    }

    reverseString(string){
        return string.split('').reverse().join('');
    }
    capitalize(string){
        console.log(string.slice(1))
        return string[0].toUpperCase()+string.slice(1);
    }
    



}
module.exports = Test;

