[toc]

---

references:

```
# Range
# 1..5 : 1,2,3,4,5
(1..5)
(1...5)

# Variable are not declare, because Ruby uses dynamic typing
bin = 0b1111_1111 # binary number from dec.class => 255
oct = 0377        # => 255
hex = 0xFF        # => 255
dec = 255
bin + oct + hex == 3*dec

# Classification of Variable

# name = local variable (begine with lowercase letter or _)
# @name = instance variable(access from outside of that class)
# @@name = class variable (shared among all instances)
# $name = global variable, for all program
# CONST = named constant(star with uppercase)

# parallel assignment

a, b, c = 1, 2, 3     # a = 1; b = 2; c = 3
print("a = ", a, " b = ", b, " c = ", c, "\n")
a, b, c = 1, 2        # a = 1; b = 2; c = nil
print("a = ", a, " b = ", b, " c = ", c, "\n")  # a = 1 b = 2 c = 
a, b = b, a           # swap, don't need to complete "temp" => a = 2 b = 1 c = 
print("a = ", a, " b = ", b, " c = ", c, "\n")

# Block expression
# Block expression: begin and end
# it returns a value

# Control structure
# ruby control strucure has nearly 30 mechanisms
# picture

# if-then
# if <condition> then <Block1> else <Block2> end
x = 1
y = 1
if x == y then 
  puts "x equals y" 
else
  puts "x is not equal to y"
end
# basic relationship: ==, !=, >, <, <=, &&, ||, !

# short ciruit evaluation
# if a == false return a
# else return b
a && b

# if a == true then return a 
# else return b 
a || b

# If-elsif-else
# if <condition1> then <B1> elsif <C2> <B2> .... end
if x == 1 
  then "one"
elsif x == 2 
  then "two"
else
  "many"
end

# Unless
# do <puts> unless x is qual to y
# locially different with IF
unless x == y
  puts "x is not equal to y"

# return value
# return the alas expression evaluated, this is one of concepts of functional programming


```










```ruby

```

```ruby

```