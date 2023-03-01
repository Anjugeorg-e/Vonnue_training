class Button{

    constructor(name){
        this.button=document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button)
    }
    set width(width){
        this.button.style.width = width + 'px';
    }
    set height(height){
        this.button.style.height=height + 'px'
    }
    get width(){
        return this.button.style.width;
    }
    get height(){
        return this.button.style.height;
    }
}

var b1 = new Button('click me!')
// b1.setWidth(100)
// b1.setHeight(50)
b1.width = 100;  //it wont work if the function is not set height or set width
b1.height = 100; //it wont work

console.log(b1.width, b1.height)

//inheritence

//prototype
//---->whenever we create an object JS engine automatically assigns some hidden properties to the  newly created object and which is known as 
//prototype
