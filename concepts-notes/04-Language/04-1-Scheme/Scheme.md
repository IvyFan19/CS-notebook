[toc]

---

references:

1. [online complier](https://repl.it/languages/scheme)
2. [online scheme 2](https://paiza.io/projects/uL3gz5Yy2GxBEMQTRsznTA?language=scheme)
3. [learn scheme in 15 min](https://web-artanis.com/scheme.html)
4. [The Racket Reference](https://docs.racket-lang.org/reference/index.html)

# Basic Operation
```
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

## number, string, boolean, list
```
;----------------------------------------------
; atoms: number, string, boolean, list, pairs
;----------------------------------------------

123
1.23e-100
"this is string"
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
## variable, function
```
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
```
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
```
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
```
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
```
## equal
```
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
```
(define x 123)
(begin (set! x 5) (+ 1 x)); set! + declare ~ define

(define one 1)
(define seven 7)

```
## If
```
(if #t               ; test expression
    "this is true"   ; then expression
    "this is false") ; else expression
; => "this is true"

(if (> one seven) 'yes 'no)

(if (= seven (+ 3 4)) 'yes 'no)

```

## Cond
```
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
```
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
```
(define (lp i)
  (when (< i 10)
    (display i)
    (display "\n")
    (lp (+ 1 i))))
(lp 5)
```

## Iteration
```
(for-each display '(1 2 3 4 5))
```
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
```
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
