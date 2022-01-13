# LegitLog

![npm (scoped)](https://img.shields.io/npm/v/@mativizo/legitlog)

Mini library for logging with emoji 😎 and colors 🟥. Just get some legit fun with coding! 😎


## How to use?

### Instalation

1. Install package `npm i @mativizo/legitlog`.
2. Require package `const legit = require('@mativizo/legitlog')`.
3. Use it!


### Example

```
const legit = require('@mativizo/legitlog')

legit.beLegit()
legit.log("Is this a test?")
legit.log("This is error :(", legit.LEVEL.ERROR)
legit.log("Very important warning!", legit.LEVEL.WARNING, true, false, legit.COLOR.RED)
legit.log("Info about success!", legit.LEVEL.INFO, true, false, legit.COLOR.BLACK, legit.BACKGROUND.GREEN)
legit.newLine()
legit.log("VERY SCARY THING HAPPENED!", legit.LEVEL.ERROR, true, false, null, legit.BACKGROUND.RED, legit.EFFECT.UNDERSCORE, "💀 ", " 💀")
legit.newLine()
legit.log("I don't need time...", legit.LEVEL.ERROR, false, true)
legit.log("I need time and date...", legit.LEVEL.ERROR, true, true)
legit.log("I don't need anything...", legit.LEVEL.ERROR, false, false)
legit.log()
```

This code will output:

![LegitLog output in terminal](https://raw.githubusercontent.com/mativizo/legitlog/main/screenshot.png)

### Methods

##### log(?logMessage, ?logLevel, ?logTime, ?logDate, ?messageColor, ?messageBackground, ?messageEffect, ?prepend, ?append)

Logs message to console.

- `logMessage` | Type: `string` (optional) | Default: `Legit!` - Message to output.
- `logLevel` | Type: `string` (optional) | Default: level.MESSAGE (see: [Levels](#levels)) - Message level (message, info, notice, warning, error).
- `logTime` | Type: `boolean` (optional) | Default: `true` - Adds time to logged line.
- `logDate` | Type: `boolean` (optional) | Default: `false` - Adds date to logged line.
- `messageColor` | Type: `string` (optional) | Default: `null` (see: [Colors](#colors)) - Sets color for given message.
- `messageBackground` | Type: `string` (optional) | Default: `null` (see: [Backgrounds](#backgrounds)) - Sets background color for given message.
- `messageEffect` | Type: `string` (optional) | Default: `null` (see: [Effects](#effects)) - Sets effect for given message.
- `prepend` | Type: `string` (optional) | Default: `` - Adds content before logged line.
- `append` | Type: `string` (optional) | Default: `` - Adds content after logged line.

##### newLine(?howMany)

Logs new line.

- `howMany` | Type: `int` (optional) | Default: `1` - Number of empty lines.


##### beLegit()

Shows legitness


### Vars

All variables are accessible via `legit` object:
```
const legit = require('@mativizo/legitlog')

legit.COLOR
legit.BACKGROUND
legit.EFFECT
```

##### Levels

Available message levels:

- `LEVEL.MESSAGE`
- `LEVEL.INFO`
- `LEVEL.NOTICE`
- `LEVEL.WARNING`
- `LEVEL.ERROR`


##### Colors

Available colors:

- `COLOR.BLACK`
- `COLOR.RED`
- `COLOR.GREEN`
- `COLOR.YELLOW`
- `COLOR.BLUE`
- `COLOR.MAGENTA`
- `COLOR.CYAN`
- `COLOR.WHITE`

##### Backgrounds

Available background colors:
- `BACKGROUND.BLACK`
- `BACKGROUND.RED`
- `BACKGROUND.GREEN`
- `BACKGROUND.YELLOW`
- `BACKGROUND.BLUE`
- `BACKGROUND.MAGENTA`
- `BACKGROUND.CYAN`
- `BACKGROUND.WHITE`

##### EFFECT

Available effects:

- `EFFECT.RESET`
- `EFFECT.BRIGHT`
- `EFFECT.DIM`
- `EFFECT.UNDERSCORE`
- `EFFECT.BLINK`
- `EFFECT.REVERSE`
- `EFFECT.HIDDEN`