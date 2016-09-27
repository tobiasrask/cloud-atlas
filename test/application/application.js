import assert from "assert"
import system, { Application } from "./../../src/index"

describe('Appliction', () => {

  describe('Creating application', () => {
    it('Should build without errors', (done) => {

      let application = new Application();
      if (application.getType() != 'application')
        return done(new Error("Application type doesn't match"));

      done();
    })
  });


  describe('Implementing application', () => {
    it('Should build without errors', (done) => {

      class MyApp extends Application {

        /**
        * Implementation of hook bootsrap.
        */
        bootstrap() {
          this.setProperty('bootsrapped', true);
          return Promise.resolve();
        }

        /**
        * Method to check if application bootstrapped.
        *
        * @return boolean status
        */
        didBootstrap() {
          return this.getProperty('bootsrapped', false);
        }
      }

      let application = new MyApp();
      if (application.getType() != 'application')
        return done(new Error("Application type doesn't match"));

      if (!application.didBootstrap())
        return done(new Error("Application didn't bootsrapped correctly"));

      done();
    })
  });
});
