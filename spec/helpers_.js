'use strict';

let amqp = require('amqplib');

function test(p) {
    let connection;
    let channel;
    let url = 'amqp://guest:guest@localhost:5672';

    console.log('starting');

    amqp.connect(url)
        .then((_connection) => {
            console.log('getting a connection');
            connection = _connection;
            return connection;
        })
        .then(() => {
            console.log('getting a channel');
            return connection.createChannel();
        })
        .then((_channel) => {
            channel = _channel;
            console.log('MessageBroker.Init0');
            return channel.assertExchange('test', 'topic', { 'durable': true });
        })
        .then(() => {
            console.log('MessageBroker.Init1');
            return channel.assertQueue('test', { exclusive: false });
        })
        .then((q) => {
            console.log('MessageBroker.Init2');
            channel.bindQueue(
                q.queue, 'test', 'test');
            //channel.consume(q.queue, () => { }, { noAck: false });
            console.log('MessageBroker: Starting receiving events');
        })
        .catch((err) => {
            console.log('MessageBroker.Init: ' + err);
            // throw err;
        });
        return p +1;
}
exports.test = test;

