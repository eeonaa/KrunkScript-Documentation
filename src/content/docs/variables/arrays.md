---
title: Arrays
description: Array functionality available in KS
---

Arrays in KS are handled quite differently compared to most other languages, using many KS specific Keywords and Types

## Non-Nested Arrays

```krnk
# Array creation always has to be prefixed by the types held in said array

str[] list = str["a", "b"];
obj[] list = obj[{a: 1}, {a: 5, b: 10}];
num[] list = num[1, 2, 3, 4, 5];
```

## Nested Arrays

```krnk
# Nested Arrays can get quite confusing, make sure to pay attention when prefixing them

num[][] nested = num[][num[1], num[1, 2]];
```

## Array Keywords

```krnk
# Remove index from array
remove list[0]; # remove first item from list
remove list[i]; # remove specific index from list

# Get array length
lengthOf list;

# Add entry to array
addTo list 10;
```