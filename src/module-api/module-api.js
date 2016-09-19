import APIObject from "./../includes/api-object"

class ModuleAPI extends APIObject {

  /**
  * Initialize Module api
  *
  * @params
  *   modules path, defaults to /src/modules.
  */
  init(params = {}) {
    this._modules = new Map;
    if (!params.hasOwnProperty('modulesPath'))
      params.modulesPath = `${ process.cwd() }/src/modules/`;
    this.setModulesPath(params.modulesPath);
  }

  /**
  * Set path for modules.
  *
  * @param path
  *   Path relative to app-root.
  */
  setModulesPath(path) {
    this.setProperty('modulesPath', path);
  }

  /**
  * Load modules.
  *
  * @param moduleList
  *   Array of module list
  */
  loadModules(list) {
    let path = this.getProperty('modulesPath');
    list.forEach((item) => {
      let moduleClass = require(path + item.src);
      this.register(item.name, moduleClass.default);
    });
  }

  /**
  * Register new module class. This method creates new instanece.
  *
  * @param name
  * @param module
  */
  register(name, moduleClass) {
    let module = new moduleClass({ name: name });

    this._modules.set(name, module);
  }

  /**
  * Get module by name.
  *
  * @param name
  */
  get(name) {
    return this._modules.get(name);
  }
}

const moduleAPI = new ModuleAPI({ type: 'module_api' });
export default moduleAPI;