import APIObject from "./../includes/api-object"

/**
* Module API.
*/
class ModuleHandler extends APIObject {

  /**
  * Construct module.
  *
  * @param attributes
  *   name
  *     Module name.
  */
  constructor(attributes = {}) {
    if (!attributes.hasOwnProperty('type'))
      attributes.type = 'moduleHandler';

    if (!attributes.hasOwnProperty('name'))
      throw new Error("Handler name not defiend.");

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
}

export default ModuleHandler;