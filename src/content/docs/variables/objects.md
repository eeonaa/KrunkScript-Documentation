---
title: Objects
description: Obj Type available in KS
---

The `obj` Type is KrunkScript's equivalent of the [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) type in JavaScript.

## Object Creation

Objects can be created with initializers, [similar to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer):

```krnk
# Unlike arrays, objects do not need to be prefixed by the type they are being populated with

obj object = {
    string: "Hello!",
    number: 123,
    boolean: true,
    array: num[1, 2, 3],
    object: { string: "Nested Objects!" }
};
```

Properties can also be read from and written to:

```
# When writing and reading objects, you might need to cast the value beforehand

(num) object.number += 10;  # Casting needed
object.string = "Goodbye!"; # No casting needed

# Casting when comparing object values is always needed
if ((str)object.string == otherString) {...}
```

## Object Keywords

```krnk
# Checking an empty object
obj other = {};
if (notEmpty other) {
	# this condition would fail
}

# Check if property exists
hasProp object.string;   # returns true
hasProp object.name;     # returns false
```
