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



# Case syntax
year = 1915
war = case year
when 1914 .. 1918 then "WW1"
end
puts "the war was " + war



leap = case
  when year % 400 == 0 then true
  when year % 100 == 0 then false

# print year, "was a war", war puts

# puts in string, #{ }, it will return expression fuction -> nil
a = 2
b = 3
x = puts "abc#{a*b}def#{a**b}ghi" # x = nil, because assignment is a expression
```

## Iterators
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
### upto, downto

```ruby
k = 1
(k+1).upto(k+3){|k| puts k}
# 2
# 3
# 4
#
```
### times

```ruby
# <obj><iterator name>{|<var>|<loop body>}
# obj.times{<block>} # repeates <block> <expression = n> time

3.times{puts "Morning"}
# Morning
# Morning
# Morning

n = x = 2
n.times{x=0.5*(x+n/x);puts x}
# 1.5
# 1.4166666666666665
```
### each
```ruby
### each
a = [1,2,3]
a.each{|com| puts com}
# 1
# 2
# 3
```

### map
```ruby
[1, 2, 3].map{|x| puts 1.0/(x*x*x)}
# 1.0
# 0.125
# 0.037037037037037035
```

### collect
return value into a array

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

0504

```ruby

# loop do 
#   <block>
# end

def mysqrt(x)
  result =x
  8.times{
    result = 0.5 * (result + x /result)
  }
  return result
end

# => :mysqrt
#    mysqrt(2)
# => 1.4142135623730095
#    mysqrt(10)
# => 3.162277660168379 mnbko90- 
[o1`q po  a/≥zp#    mysqrt(16)
# => 4.0



def demo(arg1="First", arg2="second")
  arg1+arg2
end
print demo, "\n"
print demo("1", " 2")

puts["a","b","c"].join(",")

```

```ruby

```