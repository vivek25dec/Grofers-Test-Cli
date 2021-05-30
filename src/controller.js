import chalk from 'chalk'
import ora from 'ora'

import {
  fetchKey,
  upsertKey,
} from './api'

const spinner = ora('Loading data')

export const findKey = async id => {
  try {
    spinner.start()
    const result = await fetchKey(id)
    const {
      response
    } = result
    const {
      value,
      key,
    } = response
    spinner.stop()
    console.log(chalk.green(`The value of key ${key} is ${value}`))
  } catch (error) {
    spinner.stop()
    console.error(chalk.red(error.message))
  }
}

export const updateKey = async (id, value) => {
  try {
    spinner.start()
    const result = await upsertKey(id, value)
    const {
      response
    } = result
    const {
      message
    } = response
    spinner.stop()
    console.log(chalk.green(message))
  } catch (error) {
    spinner.stop()
    console.error(chalk.red(error.message))
  }
}

export const watchKey = async id => {
  try {
    spinner.start()
    setInterval(async () => {
      const result = await fetchKey(id)
      const {
        response
      } = result
      const {
        value,
        key,
      } = response
      console.log(chalk.green(`\n The value of key ${key} is ${value} \n `))
    }, 1000)
  } catch (error) {
    console.error(chalk.red(error.message))
  }
}

