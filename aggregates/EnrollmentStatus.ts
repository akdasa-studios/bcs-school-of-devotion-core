export enum EnrollmentStatus {
  /**
   * Enrollment has not been submitted to the server yet. It exists only on the
   * local device of a student. Once he gets an internet connection, it will be
   * submitted to the server.
   */
  NotSubmitted = 'not-submitted',

  /**
   * Enrollment has been submitted, but no one has started processing it yet.
   */
  Pending = 'pending',

  /**
   * Someone has started processing an enrollment request.
   */
  InReview = 'in-review',

  /**
   * Enrollment has been approved. A student has access to the lessons.
   */
  Approved = 'approved',

  /**
   * Enrollment has been declined.
   */
  Declined = 'declined'
}