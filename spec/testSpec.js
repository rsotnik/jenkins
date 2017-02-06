'use strict';

let amqp = require('amqplib');
let test = require('./helpers_.js').test;

describe('test', () => {
    beforeAll((done) => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 1;
        done();
    });

    it('tests a RabbitMQ connection', (done) => {
        let a = 10;        
        expect(a).toBe(10);
       
        expect(test(a)).toBe(11);

        done();
    });
});
