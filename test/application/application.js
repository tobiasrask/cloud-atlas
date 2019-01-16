import { Application } from './../../src/index'

describe('Appliction', () => {

  describe('Creating application', () => {
    it('Should build without errors', (done) => {

      let application = new Application()
      if (application.getType() != 'application') {
        return done(new Error('Application type doesn\'t match'))
      }

      done()
    })
  })


  describe('Implementing application', () => {
    it('Should bootsrap and execute hooks in right order', (done) => {

      class MyApp extends Application {

        /**
        * Hook will trigger before application bootstrap.
        *
        * @return promise
        */
        applicationWillBootsrap() {
          return new Promise((resolve, _reject) => {
            this.setProperty('beforeBootstrapExecuted', true)
            resolve()
          })
        }

        /**
        * Implementation of hook bootsrap.
        */
        bootstrap() {
          if (this.getProperty('beforeBootstrapExecuted', false)) {
            this.setProperty('bootsrapped', true)
          }
          return Promise.resolve()
        }

        /**
        * Implementation of hook run.
        */
        run() {
          this.setProperty('run', true)
          return Promise.resolve()
        }

        /**
        * Method to check if application bootstrapped.
        *
        * @return boolean status
        */
        didBootstrap() {
          return this.getProperty('bootsrapped', false)
        }

        /**
        * Method to check if application run.
        *
        * @return boolean status
        */
        didRun() {
          return this.getProperty('run', false)
        }
      }

      const application = new MyApp()

      application.start()
        .then(() => {
          if (application.getType() != 'application') {
            return done(new Error('Application type doesn\'t match'))
          }

          if (!application.didBootstrap()) {
            return done(new Error('Application didn\'t bootsrapped correctly'))
          }

          if (!application.didRun()) {
            return done(new Error('Application didn\'t run correctly'))
          }
          done()
        })
    })
  })
})
