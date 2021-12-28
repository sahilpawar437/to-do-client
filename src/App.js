import ToDoList from "./ToDoList";

function App() {
  return (
    <div>
      <div class="container-lg">
        <h1 className="text-center p-3">My Todos</h1>
        <div className="d-flex justify-content-end">
          <button type="button" class="btn btn-primary">+ Add Todo List</button>
        </div>
        <div className="container">
          <div class="row">
            <ToDoList collapse="collapseOne" heading="headingOne" />
            <ToDoList collapse="collapseTwo" heading="headingTwo" />
            <ToDoList collapse="collapseThree" heading="headingThree" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
