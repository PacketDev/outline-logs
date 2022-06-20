class OutlineLogger {
    constructor() {}
    config = {
        "Default": `\x1b[0m`,
        "Bright": `\x1b[1m`,
        "Green": `\x1b[32m`,
        "Blue": `\x1b[34m`,
        "Yellow": `\x1b[33m`,
        "Red": `\x1b[31m`,
        "Cyan": `\x1b[36m`,
        "INFO": "INFO -",
        "ERROR": "ERROR -",
        "WARNING": "WARNING -"
    }
    CurrentTime() {
        const current_time =
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();
        return `[${current_time}]`;
    }
    Log = {
        INFO: message => console.log(`${this.config.Yellow}${this.CurrentTime()} ${this.config.Cyan}${this.config.INFO}`, this.config.Default,message),
        ERROR: message => console.log(`${this.config.Yellow}${this.CurrentTime()} ${this.config.Bright}${this.config.Red}${this.config.ERROR}`, this.config.Default, message),
        WARNING: message => console.log(`${this.config.Yellow}${this.CurrentTime()} ${this.config.Bright}${this.config.Yellow}${this.config.WARNING}`, this.config.Default, message)
    }
}

module.exports = OutlineLogger;