import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onCancel, onAdd }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescreption = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescreption.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      // show the error modal
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescreption,
      date: enteredDate,
    });
    // to do 1) add validation to check if inputs are valid 2) drop modal if inputs are invlaid
  }
  return (
    <>
      <Modal buttonCaption="Got it" ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invliad Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="py-2 px-6 text-stone-50 bg-stone-800 rounded-md hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={date} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
