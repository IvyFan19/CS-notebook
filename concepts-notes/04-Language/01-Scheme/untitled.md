<!-- GFM-TOC -->
- [Basic Operation](#basic-operation)
  * [number, string, boolean, list](#number--string--boolean--list)
  * [variable, function](#variable--function)

<!-- GFM-TOC -->

## Basic Operation
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
; atoms: number, string, boolean, list 
;----------------------------------------------

123
1.23e-100
"this is string"
""

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
```
### variable, function
```
;----------------------------------------------
; define: define variables and functions
;----------------------------------------------

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
```