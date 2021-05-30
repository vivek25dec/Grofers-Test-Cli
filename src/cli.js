import chalk from 'chalk'

import {
  findKey,
  updateKey,
  watchKey,
} from './controller'

export const cli = args => {
  const skipDefault = args.slice(2)
  if (skipDefault && skipDefault.length > 1) {
    const command = skipDefault[0]
    if (command === "get") {
      const key = skipDefault[1]
      if (!key) {
        console.error(chalk.red("Please provide the key for which value needed to be fetch"))
      } else {
        findKey(key)
      }
    }
    else if (command === "put") {
      const key = skipDefault[1]
      const value = skipDefault[2]
      if (!key) {
        console.error(chalk.red("Please provide the key for which value needed to be upsert"))
      } else if (!value) {
        console.error(chalk.red("Please provide the value needed to be upsert"))
      } else {
        updateKey(key, value)
      }
    }
    else if (command === "watch") {
      const key = skipDefault[1]
      if (!key) {
        console.error(chalk.red("Please provide the key for which value needed to be watch"))
      } else {
        watchKey(key)
      }
    }
    else {
      console.error(chalk.red("Command Not Supporetd"))
    }
  }
  else {
    console.error(chalk.red("Please pass valid command to process"))
  }
}