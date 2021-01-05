
# Python3

<!-- TOC -->autoauto- [Python3](#python3)auto- [Basic Concepts](#basic-concepts)auto    - [Why use self?](#why-use-self)auto    - [Time and space complexity for Python3](#time-and-space-complexity-for-python3)autoauto<!-- /TOC -->


# Basic Concepts
## Why use self?
Self represents the instance of the class. We can access the attritute and methods of the class by self.

```python
class car(): 
      
    # init method or constructor 
    def __init__(self, model, color): 
        self.model = model 
        self.color = color 
          
    def show(self): 
        print("Model is", self.model ) 
        print("color is", self.color ) 
          
# both objects have different self which contain their attributes 
audi = car("audi a4", "blue") 
ferrari = car("ferrari 488", "green") 
  
audi.show()  # same output as car.show(audi) 
ferrari.show()  # same output as car.show(ferrari) 
```

## Time and space complexity for Python3

[Reference](https://medium.com/analytics-vidhya/time-and-space-complexity-simplified-how-to-reduce-it-for-scalability-435304f64191)