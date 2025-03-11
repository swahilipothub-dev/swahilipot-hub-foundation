import React from 'react';

function MailingListModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          {/* Close Button */}
          <button
            type="button"
            className="btn-close m-3 align-self-end"
            onClick={onClose}
            aria-label="Close"
          />
          <div className="modal-body p-4">
            <h2 className="mb-3">Join Our Mailing List!</h2>
            <p>
              Keep up to date with newsletters, Artisan Collective sales,
              and events!
            </p>

            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>

            <small className="text-muted d-block mt-3">
              We respect your privacy.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailingListModal;
