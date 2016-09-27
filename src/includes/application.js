import DomainMap from "domain-map"
import APIObject from './api-object'

/**
* Base class for Application.
*/
class Application extends APIObject {

  /**
  * Construct API.
  *
  * @params
  */
  constructor(params = {}) {
    params.type = 'application';
    super(params);
  }

  /**
  * Initialize and run application.
  */
  init() {
    process.on('uncaughtException', (err) => {
      this.applicationWillTerminate(err);
    });
    process.on('exit', () => {
      this.applicationWillExit();
    });
    this.bootstrap()
    .then(() => {
      this.run();
    });
  }

  /**
  * Bootstrap application.
  *
  * @return promise
  */
  bootstrap() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  /**
  * Exit application.
  */
  exit() {
    process.exit();
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
  applicationWillTerminate(err) {

  }

  /**
  * Run application.
  *
  * @return promise
  */
  run() {

  }
}

export default Application;