const InputText = ({ isTextArea, label, name, ...props }) => {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          className="textarea textarea-primary textarea-lg w-full"
          placeholder="Type here..."
          name={name}
        ></textarea>
      ) : (
        <input {...props} className="input input-bordered w-full " />
      )}
    </div>
  );
};

export default InputText;
