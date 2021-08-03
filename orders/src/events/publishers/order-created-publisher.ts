import { Publisher, OrderCreatedEvent, Subjects } from '@rdvtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}