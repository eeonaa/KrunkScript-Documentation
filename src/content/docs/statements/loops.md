---
title: Loops
description: Loop functionality in KS
---

There are three types of loops in KrunkScript, `for` loops, `while` loops, and recursion

## For Loop

```krnk
# Create for loop
for (num i = 0; i < 10; i++) { # loop 10 times
	# more code here
}

# Create object property loop
obj test = {x: 1, y: 4, z: 2};
for (obj prop in test) {
    GAME.log(number.key, number.value);  # x 1, y 4, z 2
}

# Iterate over array
str[] list = str["a", "b", "c"];
for (num i = 0; i < lengthOf list; i++) {
    GAME.log(list[i]); # log item in list
}

# You can break out of a loop (end loop entirely):
for (num i = 0; i < 10; i++) {
    if (i == 5) {
		break; # ends loop
	}
}

# You can also continue out of a loop (jump to next iteration):
for (num i = 0; i < 10; i++) {
    if (i == 5) {
        continue; # go to next iteration
    }
    GAME.log("Test " + toStr i);
}
```

## While Loop

```krnk
# Create while loop
num test = 10;
while (test > 0) { # loop 10 times
	test--;
}

# You can break out of a loop (end loop entirely):
while (test > 0) {
    if (test == 5) {
		break; # ends loop
	}

    test--;
}

# You can also continue out of a loop (jump to next iteration):
while (test > 0) {
    if (test == 5) {
		continue; # ends loop
	}

    GAME.log("Test " + toStr i);
    test--;
}
```

## Recursion

```krnk
num amount = 10;

action loop(num amount) {
    amount--;
    GAME.log(amount);

    if ((num)amount > 0) {
        loop(amount);
    }
}
```