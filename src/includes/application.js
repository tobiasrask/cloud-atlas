import APIObject from './api-object'

/**
* Base class for Application.
*/
class Application extends APIObject {

  /**
  * Construct API.
  *
  * @params
  */
  constructor(params = {}) {
    params.type = 'application'
    super(params)
  }

  /**
  * Initialize and run application.
  */
  init() {
    process.on('uncaughtException', (err) => {
      this.applicationWillTerminate(err)
    })
    process.on('exit', () => {
      this.applicationWillExit()
    })
  }

  /**
  * Start application. Application will bootstrap with given bootstrap level.
  *
  * @param params
  *   bootstrapLevel
  * @return promise
  */
  start(_params = {}) {
    return this.applicationWillBootsrap()
      .then(() => {
        return this.bootstrap()
      })
      .then(() => {
        return this.run()
      })
  }

  /**
  * Hook will trigger before application bootstrap.
  *
  * @return promise
  */
  applicationWillBootsrap() {
    return new Promise((resolve, _reject) => {
      resolve()
    })
  }

  /**
  * Bootstrap application.
  *
  * @return promise
  */
  bootstrap() {
    return new Promise((resolve, _reject) => {
      resolve()
    })
  }

  /**
  * Run application.
  *
  * @return promise
  */
  run() {
    return new Promise((resolve, _reject) => {
      resolve()
    })
  }


  /**
  * Exit application.
  */
  exit() {
    process.exit()
  }

  /**
  * Application will exit.
  *
  */
  applicationWillExit() {

  }

  /**
  * React before exiting because of error.
  *
  * @param err
  */
  applicationWillTerminate(_err) {

  }
}

export default Application
