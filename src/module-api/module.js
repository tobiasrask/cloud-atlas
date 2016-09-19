import APIObject from "./../includes/api-object"

/**
* Module API.
*/
class Module extends APIObject {

  /**
  * Construct module.
  *
  * @param attributes
  *   name
  *     Module name.
  */
  constructor(attributes = {}) {
    if (!attributes.hasOwnProperty('type'))
      attributes.type = 'module';

    if (!attributes.hasOwnProperty('name'))
      throw new Error("Module name not defiend.");

    super(attributes);

    this.setProperty('name', attributes.name);
  }

  /**
  * Hook init() is called when module is initialized by server.
  */
  init() {

  }

  /**
  * Hook remove() is called when module is removed from server.
  */
  remove() {

  }

  /**
  * Returns module name.
  *
  * @return name
  */
  getName() {
    return this.getProperty('name');
  }

  /**
  * Register module handler. This method creates new instanece.
  *
  * @param name
  * @param handler
  *   Handler class
  * @param attributes
  */
  registerHandler(name, handlerClass, attributes = {}) {
    if (!attributes.hasOwnProperty('name'))
      attributes.name = name;
    let handler = new handlerClass(attributes);
    this._registry.set('handlers', name, handler);
  }

  /**
  * Get module by name.
  *
  * @param name
  */
  getHandler(name) {
    return this._registry.get('handlers', name, null);
  }
}

export default Module;