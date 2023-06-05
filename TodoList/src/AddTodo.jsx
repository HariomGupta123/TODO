const AddTodo = ({ input, onSelect,id }) => {
  return (
    <>
      <ul>
        <li>
          {input}{" "}
          <button
            onClick={() => {
              return onSelect(id);
            }}
          >
            remove
          </button>
        </li>
      </ul>
    </>
  );
};
export default AddTodo;