<!-- TOC -->

- [Get Started with C](#get-started-with-c)
- [Pointers](#pointers)
  - [Variable](#variable)
  - [Assign to a function](#assign-to-a-function)
  - [Array and pointer](#array-and-pointer)
    - [Dynamic memory(array)](#dynamic-memoryarray)

<!-- /TOC -->

---
Refefence:
1. 


# Get Started with C

```cpp
// include information about standard
#include <stdio.h>  

// define a function called main that received no argument values statements
int main(void) { 
  printf("Hello World\n");
  return 0;
}
```

# Pointers
pointer is a variable that holds the memory location(address)
## Variable
A variable contains five information: data type, name, value, location, sizeof.

```cpp
// ptr: an addree = &
// *ptr: the value stored at the address = A


// ptr: an addree = &
// *ptr: the value stored at the address = A

int main(void) {
  char a;
  char *ptr;

  a = 'A';
  printf("Value of variable 'a': %c\n", a);
  // p is used to print the pointer type data.
  printf("The address of a is %p\n", &a); 
  ptr = &a;
  printf("Show ptr is %p\n", ptr); 
  printf("the value of p is %c\n", *ptr); 
  printf("the size of %lu\n", sizeof(*ptr)); 
  return 0;
}
```
## Assign to a function
```cpp
void set(int *x, int *y)
{
	*x = 100;
	*y = 200;
}


int main(void) {
	int a, b;
	int *x, *y;
	// assign the pointers to variables address
	x = &a;
	y = &b;
	set(x, y);
	printf("a = %d and b = %d \n", a, b);
	printf("a = %d and b = %d \n", *x, *y);
	printf("Address a = %p and b = %p \n", &a, &b);
	printf("Adreess a = %p and b = %p \n", x, y);

  return 0;
}
```
## Array and pointer
```cpp
int main(void) {
	int a[5] = { 11, 12, 13, 14, 15};
	int x, *p;

    // to assign p to the base of the array
	p = a;
	for ( x=0; x<5; x++ )
	{
		printf("%d\n", *p);
		p++;
	}
	return 0;
}
```
### Dynamic memory(array)

```cpp
int main(void) {
	char *storage; // charactor buffur
	// the prototyped in stdlib.h is
	// void *malloc(size_t size)
	storage = (char *)malloc(sizeof(char) * 16 + 1); // 16 charactor trunks + null
	if ( storage==NULL )
	{
		fprintf(stderr, "Allocation failed");
		exit(1);
	}
	else
	{
		puts("Memory allocated");
	}
	return 0;
}
```

