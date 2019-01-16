# cloud-atlas
Provides core functionality to be used with cloud applications:

- Bootstrap your application using promises
- Refer your APIs easily withing your code
- Organize your code base by implementig modules
- Implement your own custom API objects

### Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save cloud-atlas

### Usage example

Here is an example how to implement Cloud Atlas. See [example.js (https://github.com/tobiasrask/cloud-atlas/blob/master/docs/example.js)
for more examples with descriptions.

Provided three core API elements are `system`, `Application` and `moduleAPI`.
These classes provides minimal framework to manage your application. You can
also implement your own APIs by extending `APIObject`.

## Methods and hooks

### System

System is singleton object and allows you to register other APIs. Registered
objects can be referred later from anywhere in your code.

registerAPI(object: APIObject)
  Register your custom API objects

api(name)
  Returns your API object by API type name

Example use case

```js
import system from 'cloud-atlas'
system.registerAPI(new MyCustomAPI({type: }))
```

### Application

Application API makes it easy to bootstrapp your application. It provides
few utility callbacks to customize your startup.

Application has following methods.

start()
  Start application, returns promise

exit()
  Exit application and terminate program

Application object has following callbacks:

applicationWillBootsrap()
  Hook will trigger before application bootstrap

bootstrap()
  Bootstrap application

run()
  Run application

applicationWillExit
  Application will exit

applicationWillTerminate
  React before exiting because of error.

Example implementation:

```js
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

```

Now you can start your application by calling `start()` method.

```js
const application = new MyApp()
application.start()
  .then(() => {
    // Application started
  })
  .catch(err => {
    // There was an error.
  })
```

Application implements APIObject and thus it can be registered to `system`
registry. Registering your API once makes it easy to refer your singleton
object from different parts of your application.

```js
system.registerAPI(application)
```

### APIObject

Extend the base API object to defined your custom APIs.

constructor()
  You should provide API `type` with constructor parameter. This will be used
  to retrieve your API later from system object.

getType()
  Method returns API type defiend when constructin API.

Let's define our custom API that can be used to ping thigs.

```js

class Ping extends APIObject {

  constructor(params = { type: 'ping' }) {
    super(params)
  }

  byName(name) {
    return `Ping #${name}`
  }
}

// Register API
system.registerAPI(new Ping())

// Refer to custom API
const message = system.api('ping').byName('github')
console.log(message)
// --> "Ping #github"
```

### moduleAPI

You can register and refer modules using `moduleAPI` core API.

See usage example from below, where we defined Factory module and register it to
Module API.

Module API provides few helper methods to load and implement modules:

setModulesPath(path)
  Path to modules, defaults to `${process.cwd()}/src/modules/`

loadModules(list)
  Load listed modules from module path.
  Example list to load module from [modulesPath]/[src]
  [
    {
      name: 'factory',
      src: 'factory/factory'
    }
  ]

register(name, Module, params)
  Register new module class using params

get(name)
  Returns module by name

### Module

Organize your code by using the idea of `Module` and `ModuleHandler`.

```js
import { moduleAPI, Module } from 'cloud-atlas'

class Factory extends Module {
  produce() {
    //...
  }
}

moduleAPI.get('factory').produce()
```

Hooks and methods

init()
  Init is called when module is initialized.

registerHandler(name, handler, attributes)
  Register new hanlder for module by creating handler object with attributes.

getHandler()
  Returns handler by name

remove()
  Is called when module is removed

### ModuleHandler

Module handler is helper class for module.

Hooks and methods

init()
  Handler is initialized

remove()
  When handler is removed

getName()
  Returns handler name

```js
import { ModuleHandler } from 'cloud-atlas'

const EscapePlan extends ModuleHandler {
  // ...
}

const factory = new Factory()
factory.registerHandler('escape', EscapePlan, { name: 'Plan A' })
factory.getHandler('escape')

```
