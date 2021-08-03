import { Publisher, OrderCancelledEvent, Subjects } from '@rdvtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}