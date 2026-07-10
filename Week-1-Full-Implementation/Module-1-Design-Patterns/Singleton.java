public class Singleton{
private static Singleton instance;
private Singleton(){}
public static Singleton getInstance(){
 if(instance==null){instance=new Singleton();}
 return instance;
}
public void show(){System.out.println("Singleton Pattern");}
public static void main(String[] args){
 Singleton s1=Singleton.getInstance();
 Singleton s2=Singleton.getInstance();
 s1.show();
 System.out.println(s1==s2);
}}