interface Shape{void draw();}
class Circle implements Shape{public void draw(){System.out.println("Circle");}}
class Square implements Shape{public void draw(){System.out.println("Square");}}
class ShapeFactory{
Shape getShape(String t){
if("circle".equalsIgnoreCase(t)) return new Circle();
if("square".equalsIgnoreCase(t)) return new Square();
return null;}}
public class FactoryPattern{
public static void main(String[] args){
ShapeFactory f=new ShapeFactory();
f.getShape("circle").draw();
f.getShape("square").draw();
}}