class Ground{
       constructor(x,y,w,h){
let options={isStatic:true}
this.x=x
this.y=y
this.w=w
this.h=h
this.body=Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body)
       }
       

display(){
var pos= this.body.position
push()
rectMode(CENTER) 
fill("blue")
rect(pos.x,pos.y,this.w,this.h)
pop ()       
       }
} 









