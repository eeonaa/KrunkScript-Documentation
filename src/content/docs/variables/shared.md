---
title: Shared
description: Shared Type functionality available in KS
---

All Types in KS share basic functionality.

<!-- this would fit better in a section dedicated to variable declarations, and other syntax stuff -->
## Naming Rules

```krnk
# Naming rules
num 0test = 0;      # invalid

num test = 0;       # valid
str _test = "hi";   # valid
num test0 = 0;      # valid
obj name = {};      # valid
```

## Type Conversion

```krnk
num number = 1;             # create number
str text = (str) number;    # cast to string
str text = toStr number;    # convert number ("Deprecated" according to developers))
num newNum = toNum text;    # convert to string ("Deprecated" according to developers)

num test = toNum "0";       # valid ("Deprecated" according to developers)
num test2 = toNum "a";      # invalid: returns 0 ("Deprecated" according to developers)
```
