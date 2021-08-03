import { Publisher, Subjects, PaymentCreatedEvent } from '@rdvtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}