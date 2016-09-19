import APIObject from "./../includes/api-object"

class ModuleAPI extends APIObject {

  /**
  * Initialize Module api
  *
  * @params
  *   modules path, defaults to /src/modules.
  */
  init(params = {}) {
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
  * @param attributes
  */
  register(name, moduleClass, attributes = {}) {
    if (!attributes.hasOwnProperty('name'))
      attributes.name = name;
    let module = new moduleClass(attributes);
    this._registry.set('modules', name, module);
  }

  /**
  * Get module by name.
  *
  * @param name
  */
  get(name) {
    return this._registry.get('modules', name, null);
  }
}

const moduleAPI = new ModuleAPI({ type: 'module_api' });
export default moduleAPI;