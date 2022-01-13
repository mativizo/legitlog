const LEVEL = {
    MESSAGE: "message",
    INFO: 'info',
    NOTICE: 'notice',
    WARNING: 'warning',
    ERROR: 'error'
};

const emoji = {}
emoji[LEVEL.MESSAGE] = "📩";
emoji[LEVEL.INFO] = "💡";
emoji[LEVEL.NOTICE] = "📝";
emoji[LEVEL.WARNING] = "🛑";
emoji[LEVEL.ERROR] = "😡";

const COLOR = {
    BLACK: "\x1b[30m",
    RED: "\x1b[31m",
    GREEN: "\x1b[32m",
    YELLOW: "\x1b[33m",
    BLUE: "\x1b[34m",
    MAGENTA: "\x1b[35m",
    CYAN: "\x1b[36m",
    WHITE: "\x1b[37m"
}

const EFFECT = {
    RESET: "\x1b[0m",
    BRIGHT: "\x1b[1m",
    DIM: "\x1b[2m",
    UNDERSCORE: "\x1b[4m",
    BLINK: "\x1b[5m",
    REVERSE: "\x1b[7m",
    HIDDEN: "\x1b[8m"
};

const BACKGROUND = {
    BLACK: "\x1b[40m",
    RED: "\x1b[41m",
    GREEN: "\x1b[42m",
    YELLOW: "\x1b[43m",
    BLUE: "\x1b[44m",
    MAGENTA: "\x1b[45m",
    CYAN: "\x1b[46m",
    WHITE: "\x1b[47m"
};

const levelColor = {}
levelColor[LEVEL.MESSAGE] = COLOR.WHITE
levelColor[LEVEL.INFO] = COLOR.GREEN
levelColor[LEVEL.NOTICE] = COLOR.BLUE
levelColor[LEVEL.WARNING] = COLOR.YELLOW
levelColor[LEVEL.ERROR] = COLOR.RED


const log = (logMessage = "Legit!", logLevel = LEVEL.MESSAGE, logTime = true, logDate = false, messageColor = null, messageBackground = null, messageEffect = null, prepend="", append="") => {
    let date = new Date();
   
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let t = (logTime) ? ` ⏰ ${hours}:${minutes}:${seconds}` : ``
    let d = (logDate) ? ` 📅 ${day}-${month}-${year}` : ``

    let threeLetterLevel = logLevel.slice(0, 3).toUpperCase();

    if (messageColor == null) messageColor = EFFECT.RESET;
    else {
        let exists = false
        for (const color of Object.keys(COLOR)) {
            if (COLOR[color] == messageColor) exists = true;
        }
        if (!exists) messageColor = ""
    }

    if (messageBackground == null) messageBackground = "";
    else {
        let exists = false
        for (const background of Object.keys(BACKGROUND)) {
            if (BACKGROUND[background] == messageBackground) exists = true;
        }
        if (!exists) messageBackground = ""
    }
    
    if (messageEffect == null) messageEffect = "";
    else {
        let exists = false
        for (const effect of Object.keys(EFFECT)) {
            if (EFFECT[effect] == messageEffect) exists = true;
        }
        if (!exists) messageEffect = ""
    }

    let r = ``
    
    // Prepend
    r += `${prepend}`

    // Emoji
    r += `${emoji[logLevel]} `

    // Level Color, code and reset
    r += `${levelColor[logLevel]}`
    r += `${threeLetterLevel}`
    r += `${EFFECT.RESET}`

    // Tab
    r += `\t`

    // Date and Time color, value and reset
    r += `${COLOR.CYAN}`
    r += `${d}${t}${(d != "" || t != "") ? ":" : ""}`
    r += `${EFFECT.RESET}`

    // Tab
    r += `\t`

    // Message color, background, effect, content, reset
    r += `${messageColor}`
    r += `${messageBackground}`
    r += `${messageEffect}`
    r += `${logMessage}`
    r += `${EFFECT.RESET}`

    // Append
    r += `${append}`

    console.log(r)
}

const newLine = (howMany = 1) => {
    for (let i = 0; i < howMany; i++) {
        console.log("")
    }
}


const testLines = () => {
    let phrase = "This is only a test."
    let line = ""

    for (const color of Object.keys(COLOR)) { line += `\n${COLOR[color]}${phrase}${EFFECT.RESET} ` }
    for (const background of Object.keys(BACKGROUND)) { line += `\n${BACKGROUND[background]}${phrase}${EFFECT.RESET} ` }
    for (const color of Object.keys(COLOR)) {
        let random = getRandomFromObject(BACKGROUND)
        line += `\n${random}${COLOR[color]}${phrase}${EFFECT.RESET} `
    }
    for (const background of Object.keys(BACKGROUND)) {
        let random = getRandomFromObject(COLOR)
        line += `\n${random}${BACKGROUND[background]}${phrase}${EFFECT.RESET} `
    }
    for (const effect of Object.keys(EFFECT)) {
        line += `\n${EFFECT[effect]}${phrase}${EFFECT.RESET} `
    }

    console.log(line)

}

const getRandomFromObject = (o) => {
    let keys = Object.keys(o)
    let randomKey = keys[Math.floor(Math.random() * keys.length)]

    return o[randomKey]
}

const beLegit = () => {
    
    console.log(``)
    console.log(``)
    console.log(``)
    let randomColor = getRandomFromObject(COLOR)
    console.log(`${randomColor}        ___     ______  __________  ___  __________  `)
    randomColor = getRandomFromObject(COLOR)
    console.log(`${randomColor}       /  /    /  ___/ /  _______/ /  / /___   ___/  `)
    randomColor = getRandomFromObject(COLOR)
    console.log(`${randomColor}      /  /    /  /_   /  / _____  /  /     /  /      `)
    randomColor = getRandomFromObject(COLOR)
    console.log(`${randomColor}     /  /    /  __/  /  / /_   / /  /     /  /       `)
    randomColor = getRandomFromObject(COLOR)
    console.log(`${randomColor}    /  /__  /  /__  /  /___/  / /  /     /  /        `)
    randomColor = getRandomFromObject(COLOR)
    console.log(`${randomColor}   /_____/ /_____/ /_________/ /__/     /__/         `)
    console.log(``)
    console.log(``)
    console.log(`${EFFECT.RESET}`)
}






module.exports = {
    log, newLine, testLines, beLegit, LEVEL, EFFECT, COLOR, BACKGROUND
}