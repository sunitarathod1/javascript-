class Grand_Parents {
    constructor(name , email , sal){
        this.name=name;
        this.email=email;
        this.sal=sal;
        console.log("this is the grandParent constructor")
    }
}
class Parents extends Grand_Parents {
    constructor(name , email , sal){
        super();
        this.name=name;
        this.email=email;
        this.sal=sal;
        //console.log("this is the parent constructor")

    }
}
class Child extends Parents {
    mbal=500;
    constructor(name , email , sal=2){
        super();
        this.name=name;
        this.email=email;
        this.sal=sal;
        console.log("this is the child constructor");
        
    }
    get_Bal(){
        return this.sal-this.mbal
    }
}
let p1 = new Parents( "sunita" , "sr@gmail.com" , 20000 );
let c1 = new Child( "santosh" , "sl@gmail.com" , "3000");

console.log(p1);
console.log(c1.get_Bal());