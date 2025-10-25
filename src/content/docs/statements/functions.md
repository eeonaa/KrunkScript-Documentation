---
title: Functions
description: Function functionality in KS
---

The `action` Type is KrunkScripts implementation of generic Functions in programming

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