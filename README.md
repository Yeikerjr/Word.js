# Word.js



This is a library in development, currently you can use in your projects to capitalize your words contained in strings or arrays, it is a free use library, you can freely extend its functionalities, always adding the names of the authors who have participated from the beginning.

## How to use

Here you have available two versions of the *"Word"* library, a full version and a minified version, in both you can use **capitalize**.

 **You must first make use of the necessary import**
```javascript
 import Word from "./Word.min.js";
```

---

To start capitalizing your words contained in **strings**, I share the following example

```javascript
 let str = "hello, how are you ?";
 let cap = Word.capitalize(str);
 console.log(cap);
```
 
> Output: "Hello, How Are You ?"


---



To capitalize your words contained in **arrays**, I share the following example

```javascript
 let arr = ["hello", "how", "are", "you ?"];
 let cap = Word.capitalize(arr);
 console.log(cap);
```

> Output: ["Hello", "How", "Are", "You ?"]


------------



If you want to capitalize strings contained in **objects**, you must do the following

```javascript
 let obj = {name: "yeiker", lastname: "romero"};
 let cap_name = Word.capitalize(obj.name);
 let cap_lastname = Word.capitalize(obj.lastname);
 console.log(cap_name, cap_lastname);
```

> Output: Yeiker Romero


------------



If your **array** contains ***strings*** and ***null*** or ***booleans*** or ***numbers*** or ***undefined*** and you want to **capitalize** only the strings that you have in your array, then you simply have to place your array, example:

```javascript
 let arr2 = ["hello", 2,  0, "how", false, "are", 5, "you ?", undefined, true];
 let cap = Word.capitalize(arr2);
 console.log(cap);
```

> Output: ["Hello", 2,  0, "How", false, "Are", 5, "You ?", undefined, true]


------------

### Note

I hope it has been very useful and to use it in your projects to save many lines of code, if you want to contribute you can write to my email yeikerjr@gmail.com
