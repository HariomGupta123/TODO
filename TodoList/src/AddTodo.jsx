const AddTodo = ({ input, onSelect,id }) => {
  return (
  
    <div>
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
  
    </div>
  );
};
export default AddTodo;