import assert from "assert"
import system, { Module, ModuleHandler } from "./../../src/index"

describe('Module handler', () => {
  describe('Module handler tests', () => {

    it('API should handle unknown handler referenses', (done) => {
      let module = new Module({ name: 'test'});

      if (module.getHandler() != null || module.getHandler('undefined') != null)
        return done(new Error("Module didn't return null for unknown handler"));
      done();
    })
  });

  describe('API integrations', () => {
    it('API should deliver module objects', (done) => {
      let probe1 = 'testHandler1';
      let probe2 = 'testProbe2';
      let module = new Module({ name: 'test'});

      class CustomHandler extends ModuleHandler {
        getProbe() {
          return probe2;
        }
      }

      module.registerHandler(probe1, CustomHandler)

      if (module.getHandler(probe1).getType() != 'moduleHandler')
        return done(new Error("Module handler didn't return expected type"));

      if (module.getHandler(probe1).getName() != probe1)
        return done(new Error("Module handler didn't return expected name"));
      done();
    })
  });
});
