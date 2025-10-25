---
title: Conditions
description: Condition functionality in KS
---

KrunkScript contains multiple different types of Conditional checking, the main being the `If Else` Condition 

## If Else Condition

```krnk
num value = 10;
if (value > 20) {
    GAME.log("Bigger than 20");
} 
else {
    GAME.log("Less than or equal to 20");
}
```

## Conditional Operators

```krnk
value > other   # greater than
value >= other  # greater than or the same
value < other   # less than
value <= other  # less than or the same
value == other  # same as
value != other  # not the same as

condition && condition  # multiple conditions must be met
condition || condition  # any condition is met

# You can also check if a value exists/is true
if (!!value) {

}

# Some examples
if ((10 < 5) || (5 == 10)) {
    # wont run
}

str test = "ab";
if (("a"+"b") == test && (1+1) == 2) {
    # will run
}

# Ternary operations
num = (true ? 1 : 0);

```