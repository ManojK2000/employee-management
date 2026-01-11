import React from "react";

function ConfirmModal({
  title = "Confirm",
  message = "Are you sure?",
  onConfirm,
  onCancel,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content confirm-modal">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="form-actions">
          <button type="submit" className="btn-primary" onClick={onConfirm}>
            Delete
          </button>
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
