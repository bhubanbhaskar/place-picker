import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, oncancel }) {
  // Auto confirm after TIMER
  useEffect(() => {
    const timer = setTimeout(onConfirm, TIMER);
    return () => clearTimeout(timer);
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>

      <ProgressBar duration={TIMER} onComplete={onConfirm} />

      <div id="confirmation-actions">
        <button onClick={oncancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
