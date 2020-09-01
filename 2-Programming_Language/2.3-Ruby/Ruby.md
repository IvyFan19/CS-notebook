<!-- TOC -->

- [Get Started with Ruby](#get-started-with-ruby)
  - [Ruby is OOP](#ruby-is-oop)
  - [What is object?](#what-is-object)
- [Baisc object types](#baisc-object-types)
  - [Variable](#variable)
  - [Integer](#integer)
  - [String](#string)
  - [Array](#array)
  - [Hash](#hash)
  - [Symbols](#symbols)
  - [Ranges](#ranges)
  - [Set](#set)
  - [Scalar argument](#scalar-argument)
  - [Puts, p, print](#puts-p-print)
- [Control structures](#control-structures)
  - [Conditional](#conditional)
    - [If...else](#ifelse)
    - [Unless = if !](#unless--if)
    - [Case](#case)
  - [Iterators](#iterators)
    - [Times](#times)
    - [Upto, downto](#upto-downto)
    - [each](#each)
  - [Loop](#loop)
    - [while](#while)
    - [until](#until)
    - [for](#for)
    - [map](#map)
    - [collect](#collect)
    - [select](#select)
    - [reject](#reject)
- [Methods and Class](#methods-and-class)
  - [return 2  value](#return-2-value)
- [Class](#class)
  - [Accessor(geter & setter)](#accessorgeter--setter)
  - [Class varivable @@](#class-varivable)
  - [Self](#self)
  - [Public, Protected, Pricate methods](#public-protected-pricate-methods)
- [Exercise](#exercise)
  - [palindrome](#palindrome)
  - [find largest number](#find-largest-number)
  - [tail recursion](#tail-recursion)
  - [Class Set(show, found, hasMember, isSet?)](#class-setshow-found-hasmember-isset)
  - [Recursive and non-recursive](#recursive-and-non-recursive)

<!-- /TOC -->

---
Refefence:
1. [search mehtods and classes](https://ruby-doc.org/core-2.7.1/)


# Get Started with Ruby
1. Interactive ruby shell in terminal: irb
2. (terminal) ri String#upcase
3. Ruby name convention: lowercase_lowercase
4. Ruby is interpreted language, not compiled
## Ruby is OOP
Ruby is an object-oriented programming language
- No "primitives"
- Most everything is an object

  
## What is object?
- Object can represent abstract ideas
- Object have attributs
- Objects are instance of class
- Object have behaviors
  

# Baisc object types
## Variable
variable is referrence, not object

|Variablel| Style|
|:----:|:---------:|
|Global| $variable|
|Class| @@varibale|
|Instance| @variable|
|Lacal|varible|
|Block|variable|

```ruby
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
```

## Integer
```ruby
x = 10
print x.class
# Integer

print 10.to_f
# 10.0
print 3.0.to_i
# 3
#
.round
.abs
.floor
.ceil
```


## String
```ruby
# 1. join
A = 'hello'
B = 'world'
puts A + ' ' + B

# multiplication
x = "Good" * 3
puts x

# 2. reverse
y = x.reverse.capitalize
puts y
# Doogdoogdoog

# 3. interpolation
msg="I love you"
puts "I just called to say: #{msg}."   #{} make expression into string
# I just called to say: I love you.
```

## Array
Array has a lot of methods: .uniq, .shuffle, .include(2), .delete('c')

```ruby
array = [1, 2, 3, 'a', 'b', 'c']
puts array.reverse
puts array.reverse! # it will save in the array

# Intersection
show([1,3,5,7]&[2,4,5,8])

# Union of arrays
show([1,2,5,7] | [2,4,6,8])
#1257468

# Concatenation of array
show([1,3,5,7]+[2,4,6,8])
# 13572468

# Difference of array
show([1,3,5,7]-[1,1,2,5,7])
# 3

# Repetition of array
show(["Y","e","s"]*3)

a = [1,2,3,4,5,6]
puts a.include?(4)
puts a.at(-1)
puts a.delete(4)
print a

a.each{|i| print i," - "} # content
a.length.times do |i|     # list number

# true
# # 6
# # 4
# # [1, 2, 3, 5, 6]
# # 1 - 2 - 3 - 5 - 6 - 

# ponter and assignment
a.dup
a.clone

```

## Hash
```ruby
scores = {:low => 10, :high => 99, :avg=>50}
scores = {low:10, high:10, avg:50}    # short and simple
```
## Symbols
symbol like sting but has unique memory location
```ruby
irb(main):011:0> "test".object_id
=> 70205301248600
irb(main):012:0> "test".object_id
=> 70205301266800
irb(main):013:0> :test.object_id
=> 374428
irb(main):014:0> :test.object_id
=> 374428
```
## Ranges
```
inclusive = 1..10
puts inclusive.begin
puts inclusive.end

exclusive = 1...10
```

## Set
Set implements a collection of unordered values with no duplicates. 
```ruby
require 'set'
s1 = Set.new [1, 2]              # -> #<Set: {1, 2}>
s2 = [1, 2].to_set                    # -> #<Set: {1, 2}>
s1 == s2                              # -> true
s1.add("foo")                         # -> #<Set: {1, 2, "foo"}>
s1.merge([2, 6])                 # -> #<Set: {6, 1, 2, "foo"}>
s1.subset? s2                         # -> false
s2.subset? s1                         # -> true
```

## Scalar argument
```ruby
# return array
def demo(*arg) # change to array
  return arg
end
a = demo(1,2,3,4)
puts a.class
```

## Puts, p, print
```ruby
a = [1, 2, 3, 4]
a = a << 5 << 6
#  p prints the the raw object that you pass to it.
# This is because it uses .inspect to convert the object to a string rather than .to_s..
p a

# print also converts the argument you pass it into a string using .to_s and prints it to the command line.
# But it does not add a newline character.
print a, "\n"

# Puts = Put string. Puts will also print the individual elements of an array with the a newline character after each.
puts a
# one
# two
# three
# four
# five
```
# Control structures
## Conditional
### If...else
```ruby

# basic relationship: ==, !=, >, <, <=, &&, ||, !
# If-elsif-else
# if <condition1> then <B1> elsif <C2> <B2> .... end
if x == 1 
  then "one"
elsif x == 2 
  then "two"
else
  "many"
end
```
### Unless = if !

```ruby
# Unless
# do <puts> unless x is qual to y
# locially different with IF
unless x == y
  puts "x is not equal to y"
end
```

### Case

```ruby
# Case syntax
year = 2020
case
when year % 400 == 0
  puts "400"
when year % 100 == 0
  puts "100"
else
  puts "don't know"
end
```

## Iterators
### Times

```ruby
5.times {
  puts "Hello"
}

n = x = 2
n.times{x=0.5*(x+n/x);puts x}
# 1.5
# 1.4166666666666665
```
### Upto, downto

```ruby
1.upto(5){
  puts "Hello"
}

5.upto(1){
  puts "Hello"
}
```
### each
```ruby
### each
a = [1,2,3]
a.each do |com|
  puts com
end

(V.S.) 
a.length.times do |i|
# 1
# 2
# 3
```
## Loop
### while
```ruby
# while <boolean expression> [do | :]
#     <body>
# end

x = 0.5
while x <= 3 do
  puts "#{x} #{x*x}"
  x += 0.5
end

# 0.5 0.25
# 1.0 1.0
# 1.5 2.25
# 2.0 4.0
# 2.5 6.25
# 3.0 9.0

array = [1,2,3,4]
i = 0
while i < 4 do
  puts array[i]
  i += 1
end
# 1
# 2
# 3
# 4
```

### until

```ruby
# until <condition for exit> [do | :]
# <body>
# end

x = 0.5
until x > 3 do
  puts "#{x} #{x*x}"
  x += 0.5
end

# 0.5 0.25
# 1.0 1.0
# 1.5 2.25
# 2.0 4.0
# 2.5 6.25
# 3.0 9.0

array = [1,2,3,4]
i = 0
until i > 3 do
  puts array[i]
  i += 1
end
# 1
# 2
# 3
# 4

# <exp> while <boolean exp> # true
# <exp> until <boolean exp> # false
x = 0
puts x = x + 1 while x < 5
# 1
# 2
# 3
# 4
# 5


array = [1,2,3,4]
i = 0
begin
  puts array[i]
  i = i + 1
end until i > 3
# 1
# 2
# 3
# 4
```

### for

```ruby
# for <var> [, <var>]...in <collection> [do|:]
#   <body>
# end

array = [1,2,3,4]
for com in array
  puts com
end
# 1
# 2
# 3
# 4

hash = {:a=>1, :b=>3, :c=>2}
for key, value in hash
  puts "#{key} : #{value}"
end
# a : 1
# b : 3
# c : 2


for a in [0,1] do
  for b in [0,1] do
    for c in [0,1] do
      puts "#{a} #{b} #{c}"
    end
  end
end

# 0 0 0
# 0 0 1
# 0 1 0
# 0 1 1
# 1 0 0
# 1 0 1
# 1 1 0
# 1 1 1
```

### map
```ruby
[1, 2, 3].map{|x| puts 1.0/(x*x*x)}
# 1.0
# 0.125
# 0.037037037037037035
```

### collect
return value into a array, same as map

```ruby
cubs = [1, 2, 3].collect { |x| x**3 }
puts cubs
# 1
# 8
# 27
```

### select
select components

```ruby
evens = (1..10).select{|x| x%2==0}
puts evens
# 2
# 4
# 6
# 8
# 10
```

### reject
```ruby
odds = (1..10).reject{|x| x%2==0}
puts odds
# 1
# 3
# 5
# 7
# 9
```
# Methods and Class
## return 2  value 
return 2 value will be an array

``` ruby
def return2(x, y)
  return x+y, x*y
end

result = return2(7,2)
puts "result is an #{result.class}"
# result is an Array

puts result
# 9
# 14

p result
# [9, 14]

def qe(a, b, c)
  x1 = (-b + Math::sqrt(b**2-4*a*c))/(2*a)
  x2 = (-b - Math::sqrt(b**2-4*a*c))/(2*a)
  return x1, x2
end

puts "Solving x**2 - 3x + 2 = 0"
x1, x2 = qe(1, -3, 2)
puts "x1 = #{x1}, x2 = #{x2}"
```
# Class

An instance of a class always has access to its instance variables.

## Accessor(geter & setter)
```ruby
class Box
  def initialize(length, width, height)
    @length = length
    @width = width
    @height = height
  end
  attr_accessor :length, :width, :height
end

mybox = Box.new(1,2,3)
p mybox

mybox.length = 10
mybox.width = 20
mybox.height = 30
p mybox
#<Box:0x00007fcb95063ef8 @length=1, @width=2, @height=3>
#<Box:0x00007fcb95063ef8 @length=10, @width=20, @height=30>
```
## Class varivable @@
```ruby
class Box
  @@boxcounter = 0
  @@totalvolum = 0.0
  
  def initialize(x,y,z)
    @length = x
    @@boxcounter += 1
  end
end
```
## Self
```ruby
class Area
  def self.box(a,b)
    area = a * b
  end
  def self.triangle(a, h)
    area = a * h /2
  end
end

b = Area.box(2.0,3.0)
puts b.class

t= Area.triangle(2,3)
puts t.class
```

## Public, Protected, Pricate methods
```ruby
protected
  def
private
  def
public
  def
```

# Exercise
## 1. palindrome
```ruby
a = ["radar", "madam", "Madam","amanaplanacanalpanama","9876543210123456789"]

def pal(str)        #return true or false
  str == str.reverse
end

for w in a do
  puts "Is {#w} palindrome: #{pal(w)}"
end
```
## 2. find largest number
```ruby
def max(first, *rest)
  max=first
  rest.each do |x|
      if x > max
        max = x
      end 
      return max
  end
end
```

## 3. tail recursion
```ruby
def tail(a)
  a[1..a.length-1]
end

def sum(a)
  if a.length == 0
    0
  else
    a[0] + sum(tail(a))
  end
end

a = [1,2,3,4,6]
p a, tail(a), sum(a)
```
## 4. Class Set(show, found, hasMember, isSet?)
```ruby
class Set
  def initialize(*a)
    @a = a   # it will return to array
  end

  def show
    print "{"
    @a.length.times do |i|  # 0,1,2
      print @a[i]
      print ',' if i < @a.length-1
    end
    print "}"
  end

  def found(x)
    @a.include?(x)
  end

  def hasMember(x)
    if @a.include?(x)
      print "YES!"
    else
      print "NO!"
    end
  end

  def isSet?  # No same number. | intersection
    (@a | @a).length == @a.length
  end
end


s = Set.new(1,2,3) 
puts s.show()        # {1,2,3}
puts s.found(5)      # false
puts s.hasMember(5)  # NO!
puts s.isSet?        # true
```
## 5. Recursive and non-recursive
```ruby
# write a recursive 'sr' and on-recursive 'si' and commpute 1 + (1/2)^2 + (1/3)^2 + ...
# recursive: s(n) = s(n-1) + 1/(n)^2
# non-recursive: sum + 1/(i)^2

def sr(n)
  if n == 0
    return 0
  end
  Math.sqrt(1.0/n) + sr(n - 1)
end


def si(n)
  sum = 0
  i = 1
  while i <= n
    sum = sum + Math.sqrt(1.0/i)
    i = i + 1
  end
  return sum
end
```

## 6. Extend Array and return sequence 1-7 

``` ruby
  def saw(m)
    self.length.times do |i|  # list number
      self[i] = 1 + i % m
    end
    self
  end

  def show
    self.each do |i|
      print self[i], " "
    end
  end
end

a = Array.new(30)
p a.saw(7)
a.show
# [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2]
# 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 
```
## 7. Sphere class

```ruby
# Create the class Ball that inherits properties from the class Sphere and adds a new instance variable color
class Ball < Sphere
  def initialize(radius, color)
    super(radius)
    @color = color
  end
  def show
     "Ball: #{@r}, #{@color}"
  end
end

# Then create the class MyBall that inherits properties from the class Ball and adds a new instance variable owner.
class MyBall < Ball
  def initialize(radius, color, owner)
    super(radius,color)
    @owner = owner
  end

  def show
    super + " it belongs to: " + @owner
  end
end

p
b = Sphere.new(1)
puts b.area
puts b.volume
# 12.566370614359172
# 4.1887902047863905
#
oneball = Ball.new(2,'red')
puts oneball.show

myball = MyBall.new(1, "blue", "peter")
puts myball.show
# Ball: 1, blue it belongs to: peter
```