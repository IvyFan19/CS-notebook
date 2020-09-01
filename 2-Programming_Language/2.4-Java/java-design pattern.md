<!-- TOC -->

- [Get Started with Java Design Pattern](#get-started-with-java-design-pattern)
- [Design Patterns](#design-patterns)
  - [Builder](#builder)
    - [Step1: Create an interface](#step1-create-an-interface)
    - [Step2: Create concrete classes](#step2-create-concrete-classes)
    - [Step3: Implement](#step3-implement)
  - [Factory](#factory)
  - [Singleton](#singleton)

<!-- /TOC -->

---
Refefence:
1. 


# Get Started with Java Design Pattern




# Design Patterns
## Builder
- Builder pattern builds a complex object using simple objects and using a step by step approach
- Avoid long constructors

### Step1: Create an interface 
 Create an interface Item representing Animal
```Java
public interface Animal {
}
```

### Step2: Create concrete classes 
Create concrete classes Fish implementing the Animal interface.

```Java
public class Fish implements Animal {
        public String sound;
        public int numLegs;
        public String color;
        private int number;

// Constructors
    public Fish(String sound, int numLegs, String color, int number){
        this.sound = sound;
        this.numLegs = numLegs;
        this.color = color;
        this.number = number;
    }

// make a builder class
    public static class FishBuilder {
        // 1) paste parameters
        public String sound;
        public int numLegs;
        public String color;
        private int number;

        // 2) make setters
        public void setSound(String sound) {
            this.sound = sound;
        }

        public void setNumLegs(int numLegs) {
            this.numLegs = numLegs;
        }

        public void setColor(String color) {
            this.color = color;
        }

        public void setNumber(int number) {
            this.number = number;
        }

        // 3) build function
        public Fish build(){
            return new Fish(this.sound, this.numLegs, this.color, this.number);
        }
    }
 ```

 ### Step3: Implement
 ```java
  public static void main(String[] args){
        // Fish 1
        FishBuilder fishBuilder = new FishBuilder();
        fishBuilder.setSound("zzzzzz");
        Fish fish_zzz = fishBuilder.build();
        System.out.println(fish_zzz.getClass().getName());

        // Fish 2
        fishBuilder.setSound("~mumu~");
        fishBuilder.setColor("Black");
        Fish fish_2 = fishBuilder.build();
        System.out.println(fish_2.color);
    }
  ```

  ## Factory
  ```Java
  ```

  ## Singleton
- Makes it so there is only one instance of something
- Helpful for re-using an object in multiple places
-  private constructor
  
  ```Java
  public class Singleton {

    // 1) Properties
    // static variable single_instance of type Singleton
    private static Singleton single_instance = null;
    // public variable of type string
    public String s;

    // Constructor
    private Singleton() {
        s = "hi, i am a string!";
    }

    //  static method to create instance of Singleton class
    public static Singleton getInstance() {
        if (single_instance == null) {
            single_instance = new Singleton();
        } else {
            System.out.println("There is a existed instance.");
        }
        return single_instance;
    }
    class Main{
    public static void main(String args[]){
        // instantiating Singleton class with variable x
        Singleton x = Singleton.getInstance();
        System.out.println("String from x is: " + x.s);

        // instantiating Singleton class with variable y, y point to x
        Singleton y = Singleton.getInstance(); 

        // instantiating Singleton class with variable z, z points to x
        Singleton z = Singleton.getInstance();

        // changing variable of instance x, because it is public variable
        x.s = (x.s).toUpperCase();

        System.out.println("String from x is " + x.s);
        System.out.println("String from y is " + y.s);
        System.out.println("String from z is " + z.s);
        System.out.println("\n");


        // changing variable of instance z
        z.s = (z.s).toLowerCase();

        System.out.println("String from x is " + x.s);
        System.out.println("String from y is " + y.s);
        System.out.println("String from z is " + z.s);
    }
}

//        String from x is: hi, i am a string!
//        There is a existed instance.
//        There is a existed instance.
//        String from x is HI, I AM A STRING!
//        String from y is HI, I AM A STRING!
//        String from z is HI, I AM A STRING!
//
//
//        String from x is hi, i am a string!
//        String from y is hi, i am a string!
//        String from z is hi, i am a string!
```

## Adaper








