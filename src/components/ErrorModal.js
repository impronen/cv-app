export default function ErrorModal({ showErrorModal, closeErrorModal }) {
  return (
    showErrorModal && (
      <dialog className="errorModal" open="open">
        <p>Please fill in all the required fields.</p>
        <button onClick={closeErrorModal}>OK</button>
      </dialog>
    )
  );
}
