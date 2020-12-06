import { Message, Stan } from 'node-nats-streaming';
import { Subjects } from './subjects';

interface Event {
  subject: Subjects;
  data: any;
};

export abstract class Lister<T extends Event> {
  protected client: Stan;
  abstract subject: T['subject'];
  abstract onMessage(data: T['data'], msg: Message);

  constructor(client: Stan){
    this.client = client;
  };

  listener() {
    const subscription = this.client.subscribe(this.subject);
    subscription.on('message', (msg: Message) => {
      console.log(`Received Event ${msg.getSequence()} ${msg.getSubject()}`);
      const parseData = this.parseMessage(msg);
      this.onMessage(parseData, msg);
    });
  }

  parseMessage(msg: Message) {
    const data = msg.getData();
    return typeof data === 'string'
      ? JSON.parse(data)
      : JSON.parse(data.toString('utf8'));
  }
}