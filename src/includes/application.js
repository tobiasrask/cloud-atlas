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
  * Initialize application.
  */
  init() {
    this.bootstrap()
    .then(() => {
      return this.run();
    })
    .then(() => {
      return this.shutdown();
    })
    .then(() => {
      process.exit();
    })
    .catch((err) => {
      // Log error
      process.exit(1);
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
  * Shutdown application.
  *
  * @return promise
  */
  shutdown() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  /**
  * Run application.
  *
  * @return promise
  */
  run() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}

export default APIObject;