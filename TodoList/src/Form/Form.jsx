import { useTodo } from '../Context/Context'

function Form({ activitylists, setActivityLists }) {
  const { addTodoList } = useTodo();
const handleForm=(e)=>{
e.preventDefault();
 addTodoList(activitylists)
}
  return (
    <div>
      <form className="flex" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Write Todo..."
          value={activitylists}
          onChange={(e) => {
            setActivityLists(e.target.value);
          }}
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
      </form>
    </div>
  );
}

export default Form
