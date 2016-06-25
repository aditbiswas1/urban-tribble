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
    })
});
describe("ABC test", function(){
    it("should be a string", function(){
        should("abc").be.a.String();
        
    });
});

describe("Customer Client", function(){
    it("should allow customer to create a user profile", function(done){
    done();
    });
    it("should allow customer to post current location", function(done){
        done();
    });
    it("should allow customer to create a ride with a starting location and ending location", function(done){
        done();
    });
    it("should allow customer to recieve acceptance of ride", function(done){
    done();
    });
    it("should disconnect the customer after 5 minutes of no acceptance", function(done){
        done();
    });

});

describe("Driver Client", function(){
    it("should allow driver to create a user profile", function(done){
    done();
    });
    it("should allow driver to post current location", function(done){
        done();
    });
    it("should allow driver to subscribe to rides within 20km radius of themselves", function(done){
    done();
    });
    it("should allow drivers to recieve rides within a 20km radius of current location", function(done){
        done();
    });
    it("should not allow drivers to recieve rides outside of current location", function(done){
        done();
    });
    it("should allow driver to accept a ride", function(done){
        done();
    });
    it("should not allow two drivers to accept the same ride", function(done){
        done();
    });
});


