# The PROTOTYPE Model

* JavaScript is considered a Prototype-based language. 

* Whenever an instance of an object is instantiated, the JavaScript engine provides a prototype property to the constructor function and proto property to the instance of the object.

* Prototypes allow us to define methods or properties to all instances created of a particular object. Accordingly, every instance of that object has access to the method or property. 

* Every object has a prototype. 
    * Array
    * Number
    * Date
    * String

* Prototypes contain all the methods for that object type. 
    * Date prototype has getDay(), getMonth()
    * Array prototype has sort(), filter()

* Available methods to use are nested under the .__proto__ property.


* Every instance of an object has a proto property that points to the Object Prototype of the constructor function that created said instance. 

* It is the proto property's job to look to the Object Prototype of the constructor to see if it has any methods or functions available to use.

* Instance.__proto__ === Constructor.prototype

* Every Prototype (whether it be Array, Number, Symbol, Math) inherits from Object. 
* Object is the base type of prototype.
