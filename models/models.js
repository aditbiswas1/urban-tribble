var thinky = require('thinky')(),
    type = thinky.type,
    r = thinky.r;


var Customer = thinky.createModel("Customer", {
    id: type.string(),
    name: type.string(),
    current_location : type.point()
});


var Driver = thinky.createModel("Driver", {
    id: type.string(),
    name: type.string(),
    current_location : type.point()
});


var Ride = thinky.createModel("Ride", {
    id: type.string(),
    start_location: type.point(),
    end_location: type.point(),
    expected_end_location: type.point(),
    booking_time: type.date().default(r.now()),
    start_time: type.date(),
    end_time: type.date(),
    customerId: type.string(),
    driverId: type.string()
});

Customer.hasMany(Ride, "rides", "id", "customerId");
Ride.belongsTo(Customer, "customer", "customerId", "id");

Driver.hasMany(Ride, "rides", "id", "driverId");
Ride.belongsTo(Driver, "driver", "driverId", "id");

exports.Customer = Customer;
exports.Driver = Driver;
exports.Ride = Ride;