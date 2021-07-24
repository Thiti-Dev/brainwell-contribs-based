import chalk from "chalk";

export class Logger {
  static debug(text: string) {
    console.log(`${chalk.yellow("[DEBUG]")}: ${text}`);
  }
  static log(namespace: string, text: string) {
    console.log(`${chalk.bgWhite.blackBright(`[${namespace}]`)}: ${text}`);
  }
  static plain(text: string) {
    console.log(text);
  }
}
