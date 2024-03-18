const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kafka',
  brokers: ['kafka:29092','kafka2:29093']
})

const producer = kafka.producer();

const produce = async (msg) => {
    await producer.connect();
    await producer.send({
          topic: 'my-topic', 
          messages: [
              {value: msg}
          ],
    });

    
}

module.exports = produce;
