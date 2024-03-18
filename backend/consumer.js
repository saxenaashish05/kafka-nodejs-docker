const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kafka',
  brokers: ['kafka:29092','kafka2:29093']
})

const consumer = kafka.consumer({ groupId: 'clientId-kafka'})

const consume = async () => {

  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'my-topic', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
}

consume();