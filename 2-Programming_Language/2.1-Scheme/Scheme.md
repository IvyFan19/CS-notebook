
<!-- TOC -->

- [Basic Operation](#basic-operation)
    - [number, string, boolean](#number-string-boolean)
    - [char](#char)
    - [vector](#vector)
    - [list: append, sum](#list-append-sum)
    - [function return value](#function-return-value)
    - [variable](#variable)
    - [set!, define, let](#set-define-let)
    - [reading](#reading)
    - [default function](#default-function)
    - [equal](#equal)
- [Control Flow](#control-flow)
    - [Begin](#begin)
    - [If](#if)
    - [Cond](#cond)
    - [Case](#case)
    - [Loop](#loop)
    - [Iteration](#iteration)
- [Practice](#practice)
    - [1. Is the list of number?](#1-is-the-list-of-number)
    - [2. Temperature conversion: Farenheit <=> Celsius](#2-temperature-conversion-farenheit--celsius)
    - [3. Make recognizers: alphabetic, numeric, whitespace](#3-make-recognizers-alphabetic-numeric-whitespace)
    - [4. Check type](#4-check-type)
    - [4.Find the largest number in a list](#4find-the-largest-number-in-a-list)
    - [5. Rotate the three element list:(a b c) -> (c, a, b)](#5-rotate-the-three-element-lista-b-c---c-a-b)
    - [6. Remove the last element of list](#6-remove-the-last-element-of-list)
    - [7. Make a list that consist of first and last element](#7-make-a-list-that-consist-of-first-and-last-element)
-----
<!-- /TOC -->

references:

1. [online complier](https://repl.it/languages/scheme)
2. [online scheme 2](https://paiza.io/projects/uL3gz5Yy2GxBEMQTRsznTA?language=scheme)
3. [learn scheme in 15 min](https://web-artanis.com/scheme.html)
4. [The Racket Reference](https://docs.racket-lang.org/reference/index.html)
5. [Scheme tutorial](http://www.shido.info/lisp/idx_scm_e.html)

Sheme is the first-class object language. A function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
```scheme
(define add2
  (lambda (n)
    (* n 2)))


(define mycompose
  (lambda (f g) 
    (lambda (x)
      (f ( g x)))))  ; return the funtions f(g(x)) 


(define n '(1 2 3 4))
(map add2 n)
(define add4 (mycompose add2 add2)) ; add4(x) = add2(add2(x)) = x + 2 + 2


```

# Basic Operation
```scheme
;----------------------------------------------
; basic operation
;----------------------------------------------

; (-)
; (+)
; (*)
; (/)
; (* 4)
(+ 1 2)
(/ 1 3)
(* 1 2 3)
(/ 1 2 3 4)
(/ 1e77 1e75)
; intergert store as a list instead of number
1234567890123456789011234567890
```

## number, string, boolean
```scheme
;----------------------------------------------
; atoms: number, string, boolean, list, pairs
;----------------------------------------------

123
1.23e-100
"this is string"
  (string-append "123" "123")
=> "123123"
""
#b111                  ; binary => 7
#o111                  ; octal => 73
#x111                  ; hexadecimal => 273
 #t
 #T
;true
;t

 #t
 #F
;f

(); false and nil are interpreted as an empty list ()
;nil

Variable ; not defined symbol

(define lst '(1 2 3 4))
(define str "ejhfak")

;; `list' is a convenience variadic constructor for lists
(list 1 2 3) ; => '(1 2 3)
;; and a quote can also be used for a literal list value
'(1 2 3) ; => '(1 2 3)

   ;; `cons' constructs pairs, `car' and `cdr' extract the first
;; and second elements
 => (1 . 2)
   1
=> 1
   (car (cons 1 2))
=> 1
   (cdr (cons 1 2))
=> 2 
```

## char
Characters are objects that represent printed characters, such as letters and digits.

```scheme
#\a                     ; lowercase letter
#\A                     ; uppercase letter
#\(                     ; left parenthesis
#\space                 ; the space character
#\newline               ; the newline character

> (char? #\a)
#true
> (char? #\space)
#true

```
## vector
A vector is a fixed-length array with constant-time access and update of the vector slots, which are numbered from 0 to one less than the number of slots in the vector.
```scheme
(define v (make-vector 5))
(vector-set! v 0 'shoe)
(vector-set! v 2 '(savoy truffle))
(vector-ref v 3)
; BREAD
(vector-length v)
```
## list: append, sum
```scheme
; (1) sum of list
(define (sumlist lst)
  (if(null? lst)
     0
  (+ (car lst) (sumlist (cdr lst)))))

(sumlist '(1 2 3 4))
; => 10


(append (list 4 3 2 1) '(5))
; => (4 3 2 1 5)

   (list 'a (+ 3 4) 'c) 
=> (a 7 c)

```
## function return value

```scheme
;;(1) list expression
   (+ 1 2 3)
=> 6

;;(2) fucntion defination
   (define (square x) (* x x))
   (square 10)]
=> 100

;;(3) anonymous function
   ((lambda(n) (* n n)) 5)
=> 25

;;(4)two variable function 
;;; (define (func_name v1 v2) (do))
   (define (tri a b)(sqrt(+ (* a a)(* b b))))  ; sqrt(3*3+4*4)
   (tri 3 4)
=> 5
```

## variable

```scheme
;----------------------------------------------
; define: define variables and functions
;----------------------------------------------


;; a variable name can use any character except: ()[]{}",'`;#|\
define x 123)    ; x := 123
(define y 1)
(+ x y)
'(+ x y)          ; changed to list

(define(my_double x)(* 2 x)); input x, output 2x, function named my_double
(my_double 4)
(define x 3)
(my_double x)
(my_double (- 1 2))

(define (square n) (* n n))
(define square_2 (lambda(n) (* n n))) ; lambda is anoynous funtion
(square_2 10)

(define (square_3 n) (square_2 n))    ; named square_2 as square_3
(square_3 20)

(define (square_4 n) (square_3 (+ 1 n))) ; (6+1) * (6+1)
(square_4 6)  ; 49

;; Use `lambda' to create functions.
;; A function always returns the value of its last expression
   (lambda () "Hello World")
=> #<Closure>
;; Use parens to call all functions, including a lambda expression
   ((lambda () "Hello World")) 
=> "Hello World"
   ((lambda (x) (+ x x)) 5)  
=> 10

;; Assign a function to a var
   (define hello (lambda () "Hello Ivy"))
   (hello)
=> "Hello Ivy"

   (define hello 
..   (lambda(name) 
..     (string-append "hello " name)))
   (hello "ivy")
=> "hello ivy"
```


## set!, define, let
```scheme
;----------------------------------------------
; scheme: dynamic typing, set!, define operator
;----------------------------------------------   
;; `set!' stores a value into a variable:
;; Please define my-name first, or you can't assign it.
(define my-name "unknown")
(set! my-name "NalaGinrut")

;; Local binding: `me' is bound to "Bob" only within the (let ...)
   (let((me "Bob")) me)
=> "Bob"
   
   (define x 123)
   (define x 123.1234)
   x
=> 123.1234
   (define x "string")
   x
=> "string"

   (set! x 3)  ; set! can't define variable
   (define y 4)
   (define op)
   (set! op +) ; set can name operator
   (op x y)

   (define op *)
   (op x y)
=> 12

```

## reading
```scheme
;----------------------------------------------
; scheme: Reading list
;----------------------------------------------

(define x (read))
(begin (define a (read)) (define b (read)))

(begin
  (define a (read))
  (define b (read))
  (display a)
  (display b))

(define z (read))
     z
=> (1 2 3 4 5)
   (car z)
=> 1
   (cdr z)
=> (2 3 4 5)

(define z (read))
(begin
display(car z) (display " ") (display (cdr z)))
```
## default function
```scheme
;----------------------------------------------
; default functions: abs, quotient, remainder, round, display, cons, append, map
;----------------------------------------------

(abs -3.14)
(quotient -7 2)
(remainder -7 2)
(modulo -7 2)  ; c = a/b   modulo = a - c*b: -7-(-3)*2 = -1
(round 7.5)
;(truncate 7.999)
(floor 3.14)
(ceiling 3.14)  ; larger
(ceiling -3.14)
(floor -5.14)
(floor 6.14)
(log(exp 1))
(sqrt 1024)
pi
(sin pi)
(max 1.1 3.1 7 9)
（reverse ’（3 2 1））

   (string-append "Hello " "world!")
=> "Hello world!"

   (display "I'm Guile. Nice to meet you!\n")
I'm Guile. Nice to meet you!

;; Can still use `cons' to add an item to the beginning of a list
(cons 4 '(1 2 3)) ; => '(4 1 2 3)

;; Use `append' to add lists together
(append '(1 2) '(3 4)) ; => '(1 2 3 4)

   (map add1 '(1 2 3))          ; => '(2 3 4)
   (map + '(1 2 3) '(10 20 30))
=> (11 22 33)   

; from '() to expression we can compute 
> (eval '(+ 1 2))
3						


```
## equal
```scheme
;----------------------------------------------
; =       ;numerical comparison
; eq?     ;equal beased pointer (role: rename function)
; equal?  ;same printed representation
; eqv?    ;numerical, string comparison
;----------------------------------------------

(define one 1)
(define two 2)
(define 1st '(1 2 3))
(define pair (cons 'a 'b))
(define str "string")
(define sym 'symbol)
(define fun1 (lambda (n) (* n n))

   (= 2 two)
=> #t
   (= "123" "113")
Error: =: number required,
   (= 1 1.0)
=> #t

   (equal? 1st '(1 2 3))
=> #t
   (equal? one 1)
=> #t
   (equal? (+ one 1) two)
=> #t
   (equal? str sym)
=> #f   
   (equal? fun1 fun1)
=> #t
```
# Control Flow

## Begin
```scheme
(define x 123)
(begin (set! x 5) (+ 1 x)); set! + declare ~ define

(define one 1)
(define seven 7)

```
## If
```scheme
(if #t               ; test expression
    "this is true"   ; then expression
    "this is false") ; else expression
; => "this is true"

(if (> one seven) 'yes 'no)

(if (= seven (+ 3 4)) 'yes 'no)

```

## Cond
```scheme
;(cond (<cond_1> <return_1>)
; 		(<cond_2> <return_2)>)
; 		(else <do>)); 


(define x 3)
(define y 4)
(cond ((> x y) 'greater)
      ((< x y) 'less)
      (else 'equal))

(set! x 4)
(cond ((> x y) 'greater)
      ((< x y) 'less)
      (else 'equal))

```

## Case
```scheme
(define test
  (lambda (x)
    (case x
      (1 'odd)
      (3 'odd)
      (else 'not define'))))


(define test
(lambda (x)
(case x
((1 3 5) 'odd)
((2 3 6) 'even)
(else 'not))))
```
## Loop
```scheme
(define (lp i)
  (when (< i 10)
    (display i)
    (display "\n")
    (lp (+ 1 i))))
(lp 5)
```

## Iteration
```scheme
(for-each display '(1 2 3 4 5))

(do ((k 1 (+ k 1)))             ; init
    ((> k 5) (display " "))     ; terminate statement
    (display k) (display " "))  ; body

; recursive version
; sum1: 5+4+3+2+1
(define (sum n)
        (cond ((<= n 0)  0)
          (else (+ n (sum (- n 1))))))

; sum2: 5+4+3+2+1
(define sum (lambda (n)
                 (if (< n 1)
                     0
                     (+ n (sum (- n 1))))))

; fact: 5*4*3*2*1
(define fact (lambda (n)
                 (if (< n 2)
                     1
                     (* n (fact (- n 1)))))


# Code Practice
## convert decimal to binary
# PYTHON: Function to print binary number for the input decimal using recursion  
def decimalToBinary(n):  
    if(n > 1):  
        # divide with integral result  
        decimalToBinary(n//2)        
    print(n%2, end='') 
        
;;; Scheme: tail recursive
(define (dec->bin n)
  (cond ((= n 0) '())
        (else (cons (remainder n 2)
                    (dec->bin (quotient n 2))))))

             
;(display(dec->bin 9))

(define (loop x)
  (cond (= x -2) (display ""))
      (else (display x)))

(loop 9)
```

# Practice

## 1. Is the list of number?
```scheme
(define is-list-number?
  (lambda (lst)
    (if (null? lst)
        #T
          (if (number? (car lst))
            (is-list-number? (cdr lst))
            #F) ; the capical is not number
          )))

(define l (list 1 2 3 4))
(define m (list 1 2 +))

(is-list-number? l)
; => #t
(is-list-number? m)
; => #f
```

## 2. Temperature conversion: Farenheit <=> Celsius

```scheme
(define FtoC
  (lambda(F)
    (/ (* 5 (- F 32)) 9)))

(define CtoF
  (lambda(C)
    (+ 32 (/ (* 9 C) 5))))
```

## 3. Make recognizers: alphabetic, numeric, whitespace

```scheme
 ; alphabetic: a-z or A-Z
(define is-alphabetic?
  (lambda(x)
    (and (char? x)
      (or (and (char>=? x #\a) (char<=? x #\z))
          (and (char>=? x #\A) (char<=? x #\Z))))))

;    (is-alphabetic? #\a)
; => #t
;    (is-alphabetic? #\()
; => #f
    
; numberic: 0-9
(define is-numberic?
  (lambda(x)
    (and (char? x)
         (and (char>=? x #\0) (char<=? x #\9)))))
   
;    (is-numberic? #\a)
; => #f
;    (is-numberic? #\9)
; => #t

; whitespace: #\space, \#tab, #\newline, #\page, #\return
(define is-space?
  (lambda(x)
    (case x
      ((#\space \#tab #\newline #\page #\return)
       #t)
      (else
       #f))))

; upercase: A-Z
(define is-uppercase?
  (lambda(x)
    (and (char? x)
         (and (char>=? x #\A) (char<=? x #\Z)))))
         
;    (is-uppercase? #\a)
; => #f
```

## 4. Check type

```scheme
(define get-Type
  (lambda (x)
    (cond ((number? x) "Number")
          ((pair? x) "Pair")
          ((string? x) "String")
          ((list? x) "List")))) 
```

## 4.Find the largest number in a list
```scheme
(define list-max
  (lambda(lst)
    (cond ((null? (cdr lst)) (car lst))  ;cond((if lst is null) (return car))
          ((> (car lst) (list-max(cdr lst))) (car lst))     
          (else (list-max(cdr lst))))))

; (list-max '(1 2 3 4 2 9 0))
; => 9
```

## 5. Rotate the three element list:(a b c) -> (c, a, b) 
```scheme
; (car x)    ==(first x)
; (cadr x)   ==(second x) ==(car (cdr x))
; (caddr x)  ==(third x)  ==(car (cdr (cdr x)))
; (cadddr x) ==(fourth x) ==(car (cdr (cdr (cdr x))))

(define rotate_three
  (lambda(lst)
    (if (= 3 (length lst))
        (list (caddr lst) (car lst) (cadr lst))
        (else
         (display "the lengh of the list is not three! Try again")))))

(rotate_three '(1 2 3))
; => (3 1 2)
(rotate_three '(1 2 3 4))
; => the lengh of the list is not three! Try again
```

## 6. Remove the last element of list
```scheme
(reverse '(9 0 6 8))
; => (8 6 0 9)

(define remove_last_ele
  (lambda (lst)
    (reverse (cdr (reverse lst)))))

(remove_last_ele '(8 9 0 1 2))
; => (8 9 0 1)
```


## 7. Make a list that consist of first and last element

 ```scheme
(define first_and_last
  (lambda (lst)
    (list (car lst) (car (reverse (cdr lst))))))

(first_and_last '(1 2 3 54 66))
; => (1 66)
```

## 8. Write a number then compute its squre and root
```scheme
(define sqare-and-root
  (lambda()
    (write "Enter your number:")
	(define n (read))
	(display "n=")
	(print n)
	(if (eqv? n 'stop)
        (display "bye")
		(begin
		(display "the square is: ")
        (print (* n n))
		(display "the root is: ")
		(print (sqrt n))
		))))

; "Enter your number:" 4
; n=4
; the square is: 16
; the root is: 2
```


## 9.Quadratic equation solver
```scheme
(define quadratic_solver
  (lambda(a b c)
    (define denominator (* 2 a))
    (define numerator1 (+ (* -1 b) (sqrt (- (* b b) (* 4 a c)))))
	(define numerator2 (- (* -1 b) (sqrt (- (* b b) (* 4 a c)))))
	(display "x1 = ")
    (print (/ numerator1 denominator))
	(display "x2 = ")
	(print (/ numerator2 denominator))))

(quadratic_solver 1 -1 0)
(quadratic_solver 1 4 3)
; x1 = 1
; x2 = 0
; x1 = -1
; x2 = -3
```

## 10. Recursive and Non-revursive 
```scheme
; write a recursive 'sr' and on-recursive 'si' and commpute 1 + (1/2)^2 + (1/3)^2 + ...
; recursive: s(n) = s(n-1) + 1/(n)^2
; non-recursive: sum + 1/(i)^2


(define sr
  (lambda (n)
    (if (= n 0)
        0
        (+ (/ 1 (* n n)) (sr (- n 1)))))) ;call itself


(define si
  (lambda (n)
    (do ((i 1 (add1 i)) (sum 0))            ;initialization and update
        ((> i n) display(sum))               ; termination test and expression
        (set! sum (+ sum (/1 (* i i)))))))   ; loop body


(sr 5)
(si 5)
```
# 11. Count list number
```scheme
; count the number of times the elements e occurs in the list
; (count 1 '(1 2 1 2 3 2 1))
; 3


; cond ((lst is null)  (return 0))
;      ((e == car.lst) (expr1) (expr2))
;      (else (expr1) (expr2))

(define count
  (lambda(e lst)
    (cond ((null? lst) 0)          
          ((equal? e (car lst)) (add1 (count e (cdr lst))))   
          (else (count e (cdr lst))))))


(define sum 0)
(define count_2
  (lambda(e lst) 
    (cond ((null? lst) (display sum)))          
          ((equal? e (car lst)) ((+ 1 sum) (count_2 e (cdr lst))))
          (else (count_2 e (cdr lst)))))

(count 1 '(1 1 1 2 3 2 0))
(count_2 1 '(1 1 1 2 3 2 0))
```

## 12. Show star
```scheme
; cond ((cond1) (do))
; 	 ((cond2) (do1) (do2))
; 	 (else (do1) (do2))

(define dot
  (lambda (n)
    (cond ((< n 1) (newline))
        (else (display "*") (dot (- n 1))))))

(define show_star
  (lambda (lst)
    (cond ((null? lst) (newline))
          (else (dot (car lst)) (show_star (cdr lst))))))
(show_star (list 3 4 5 6)
; ***
; ****
; *****
; ******
```


