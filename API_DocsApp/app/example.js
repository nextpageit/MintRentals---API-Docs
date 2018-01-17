/**
 * @api {GET} /locations/ Get Locations
 * @apiVersion 1.0.0
 * @apiName Locations
 * @apiGroup Location
 *
 * @apiDescription Get Location
 *
 * @apiSuccess {Object}   Location   
 * @apiSuccess {int}      Location.id                           ID of the Location. It should be an Integer value
 * @apiSuccess {String}   Location.name                         Name of the Place with which ID is associated
 *
 *
 */


function locations() {
    return;
}

/**
 * @api {GET} /vehicles/ Get Vehicles data
 * @apiVersion 1.0.0
 * @apiName Vehicles
 * @apiGroup Vehicle
 *
 * @apiDescription Get Vehices data
 *
 * @apiSuccess {Object}   vehicle                               
 * @apiSuccess {int}      Object.id                         ID of Vehicle type. It should be an Integer value
 * @apiSuccess {String}   Object.name                       Vehicle type Name. It must be String value
 * @apiSuccess {String}   Object.year                       Make Year of the Vehicle
 * @apiSuccess {String}   Object.fuel                       Fuel Used by Car. It can be either Petrol or any other Fuel Type
 * @apiSuccess {decimal}  Object.fuelConsumption            Fuel Consumed by the vehicle in particular distance at particular speed, It can be Decimal
 * @apiSuccess {String}   Object.transmission               Vehicle Transmission. Should return String value
 * @apiSuccess {int}      Object.passengers                 Number of passengers. Must return only Integer value
 * @apiSuccess {int}      Object.doors                      Number of doors in Vehicle. Must return only Integer value
 * @apiSuccess {int}      Object.suitcasesLarge             Number of Large Suitcase(s) in Vehicle. Must return only Integer value
 * @apiSuccess {int}      Object.suitcasesSmall             Number of Small Suitcase(s) in Vehicle. Must return only Integer value
 * @apiSuccess {String}   Object.image                      Image of Vehicle
 *
 */

function vehicles() {
    return;
}

/**
 * @api {GET} /extras/ Get Extras
 * @apiVersion 1.0.0
 * @apiName Extras
 * @apiGroup Vehicle
 *
 * @apiDescription Get Extras
 *
 * @apiSuccess {Object}   extra       
 * @apiSuccess {int}      Object.id                      ID of an extra item. It should be an Integer value
 * @apiSuccess {String}   Object.name                    Name of an extra item. It should be a String value
 * @apiSuccess {money}    Object.price                   Price of an extra item customer wants. It can be Decimal
 * @apiSuccess {String}   Object.type                    Depends on Usage basis. Can be either or Daily basis of at Fixed rate
 *
 *
 */
function extras(Session) {
    return;
}

/**
 * @api {GET} /insurances/ Get Insurances
 * @apiVersion 1.0.0
 * @apiName Insurances
 * @apiGroup Insurance
 *
 * @apiDescription Get Insurances
 *
 * @apiSuccess {Object}   insurance                     
 * @apiSuccess {int}      Object.id                         Id of an Insurance Name. Must be an Integer value
 * @apiSuccess {String}   Object.name                       Type or Name of an Insurance. Must be a String value
 * @apiSuccess {money}    Object.price                      Price of an Insurance. Will be an Integer value
 * @apiSuccess {String}   Object.description                Description of an Insurance with terms. Must be a String value
 *
 */
function insurances() {
    return;
}

/**
 * @api {POST} /booking/ Create Booking
 * @apiVersion 1.0.0
 * @apiName Booking Car
 * @apiGroup Booking
 *
 * @apiDescription Booking Car
 *
 * @apiParam {Object}     authentication   
 * @apiParam {String}     Object.username           Username must be unique
 * @apiParam {String}     Object.password           Secure user password
 * @apiParam {Object}     booking   
 * @apiParam {String}     Object.pickupLocation     3 letter location code. AKL,CHC,etc
 * @apiParam {String}     Object.dropoffLocation    3 letter location code. AKL,CHC,etc
 * @apiParam {date}       Object.pickupDate         Date should be dd-mm-yyyy format   
 * @apiParam {date}       Object.dropoffDate        Date should be dd-mm-yyyy format 
 * @apiParam {24hourtime} Object.pickupTime         Should be 24 hour format. HH:mm eq. 17:00
 * @apiParam {24hourtime} Object.dropoffTime        Should be 24 hour format. HH:mm eq. 17:00
 * @apiParam {int}        Object.externalID         It should be an Integer value
 * @apiParam {Object}     customer
 * @apiParam {String}     Object.firstName          First Name of the customer
 * @apiParam {String}     Object.lastName           Last Name of the customer
 * @apiParam {String}     Object.emailAddress       Email address of the customer. It should be valid
 * @apiParam {String}     Object.phoneNumber        Valid Phone Number of the customer
 * @apiParam {String}     Object.address            The address where the customer's resides
 * @apiParam {String}     Object.city               City of the customer
 * @apiParam {String}     Object.state              State of the customer
 * @apiParam {int}        Object.postCode           Post Code of the customer. Must be an Integer value 
 * @apiParam {String}     Object.country            The country where the customer's resides
 * @apiParam {String}     Object.flightNumber       The flight Number of the customer
 * @apiParam {int}        Object.passengers         Number of passengers   
 * @apiParam {Object}     details                    
 * @apiParam {int}        Object.vehicle            Should be an Integer value
 * @apiParam {int}        Object.insurance          Should be an Integer value
 * @apiParam {Object}     Object.extra              
 * @apiParam {int}        Object.Object.id          ID of an extra item. It should be an Integer value
 * @apiParam {int}        Object.Object.quantity    Quantity of an extra item. It should be an Integer value 
 *
 */
function booking() {
    return;
}


