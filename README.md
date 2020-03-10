# Check writer

## Description

Given a Euro amount between 0 and 999,999.00 the program should output a worded
represantation of an Euro amount on a check.

The following inputs (float or integer) are all the same:

```
25001
25001.0
25001.00
```

And the output for each of them should be:

```
Twenty five thousand one Euros and zero cents.
```

Examples:

```
112.10 -> One hundred twelve Euros and ten cents
874327.9 -> Eight hundred seventy four thousand three hundred twenty seven Euros and ninety
cents
978 -> Nine hundred sevety eight Euros and zero cents
1.01 -> One Euro and one cent
```

Go to [https://codesandbox.io/s/github/infojav/neo-task](https://codesandbox.io/s/github/infojav/neo-task) to play with a live demo.
