import { Subjects, Publisher, ExpirationCompleteEvent } from '@rdvtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}