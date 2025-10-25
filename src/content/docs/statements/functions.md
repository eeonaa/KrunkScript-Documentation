---
title: Functions
description: Function functionality in KS
---

The `action` Type is KrunkScript's equivalent of Functions in other programming languages.

## Creating Functions

```krnk
action doSomething(str param) {
    GAME.log(param);
}

# To return a value from an action, the type must prefix the action
num action add(num a, num b) {
    return a + b;
}
```
