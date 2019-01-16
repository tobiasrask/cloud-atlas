import { Application } from 'cloud-atlas'

class MyApp extends Application {

  /**
  * Hook will trigger before application bootstrap.
  *
  * @return promise
  */
  applicationWillBootsrap() {
    return Promise.resolve()
  }

  /**
  * Implementation of hook bootsrap.
  */
  bootstrap() {
    return Promise.resolve()
  }

  /**
  * Implementation of hook run.
  */
  run() {
    return Promise.resolve()
  }
}

const application = new MyApp()

application.start()
  .then(() => {
    // Application started
  })

