var ioClient = require('socket.io-client');
var ioServer = require('../app.js');
var should = require('should');

var options ={
    transports: ['websocket'],
    'force new connection': true,
    'reconnection delay' : 0,
    'reopen delay' : 0
};

var serverUrl = 'http://localhost:8000';

describe("Urban Tribble Server", function(){
    beforeEach(function(done){
        ioServer();
    });
    afterEach(function(done){
        ioServer.stop();
    });
    describe("Customer Client", function(){
        it("should allow a customer to create a user profile");
        it("should allow a customer to get customer details based on id");
        it("should allow a customer to post current location");
        it("should allow a customer to create a ride with a starting location and ending location");
        it("should allow a customer to recieve updates of ride via subscription");
        it("should allow a customer to get updates of ride via http");
        it("should disconnect the customer from ride subscription after 5 minutes of no acceptance");

    });

    describe("Driver Client", function(){
        it("should allow a driver to create a user profile");
        it("should allow a driver to post current location");
        it("should allow a driver to recieve driver details based on id");
        it("should allow a driver to subscribe to rides within 20km radius of themselves");
        it("should allow a driver to recieve rides within a 20km radius of current location");
        it("should not allow a driver to recieve rides outside of current location");
        it("should allow a driver to accept a ride");
        it("should not allow two drivers to accept the same ride");
    });
});




