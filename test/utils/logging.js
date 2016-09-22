import assert from "assert"
import system, { LoggerAPI } from "./../../src/index"

describe('System log', () => {

  describe('Test log functionality with initial state', () => {
    it('Core should handle log requests without logger defined', (done) => {
      if (system.log("Test logging without logger"))
        done(new Error("It didn't indicate that logger doesn't exists"));
      done();
    })
  });

  describe('Test system log', () => {
    it('Core should pass log events to test logger', (done) => {
      let logProbeA = 'testA';
      let logProbeB = 'testB';
      let logResult = false;

      class TestLogger extends LoggerAPI {
        log(paramA, paramB) {
          logResult = {
            paramA: paramA,
            paramB: paramB
          };
        }
      }

      system.registerAPI(new TestLogger({ type: 'log' }));

      if (!system.log(logProbeA, logProbeB))
        return done(new Error("It didn't indicate that logger doesn't exists"));

      if (!logResult ||
          !logResult.hasOwnProperty('paramA') ||
          !logResult.hasOwnProperty('paramB'))
        return done(new Error("Test logger didn't pass data"));

      if (logResult.paramA != logProbeA ||
          logResult.paramB != logProbeB)
        return done(new Error("Test logger probes failed"));

      done();
    })
  });

});
