---
title: Math
description: Math Constants and Functions available in KS
---

The `Math` Global Object is Krunkscript's version of the [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) Global Object in JavaScript. It provides many useful Constants and Functions to the language.

## All Constants and Functions

```krnk
Math.E                              # Euler's number
Math.PI                             # PI
Math.PI2                            # PIx2

Math.sin(num);                      # Sine
Math.sinh(num);                     # Hyperbolic Sine
Math.cos(num);                      # Cosine
Math.cosh(num);                     # Hyperbolic Cosine
Math.tan(num);                      # Tangent
Math.tanh(num);                     # Hyperbolic Tangent
Math.asin(num);                     # Arcsine 
Math.asinh(num);                    # Hyperbolic arcsine
Math.acos(num);                     # Arccos
Math.acosh(num);                    # Hyperbolic Arccos
Math.atan(num);                     # Arctan
Math.atan2(num);                    # Arctan²
Math.atanh(num);                    # Hyperbolic Arctan

Math.log(num);                      # Logarithm
Math.exp(num);                      # Exponent
Math.pow(num, pow);                 # Power of

Math.round(num);                    # Round number
Math.floor(num);                    # Round down number
Math.ceil(num);                     # Round up number
Math.roundDecimal(num, decimals);   # Number reduced to certain decimals
Math.roundToNearest(num, near);     # Round number to nearest
Math.trunc(num);                    # Removes x amount of decimals

Math.abs(num);                      # Absolute number (non-negative)
Math.hypot(...args);                # Hypotenuse
Math.sqrt(num);                     # Square root
Math.min(num1, num2);               # Lowest of two values
Math.max(num1, num2);               # Highest of two values
Math.lerp(num1, num2, amnt);        # Interpolates between two values
Math.calcPerc(num, perc);           # Percent value of number

Math.toRad(num);                    # Converts degrees to radians
Math.toDeg(num);                    # Converts radians to degrees

```