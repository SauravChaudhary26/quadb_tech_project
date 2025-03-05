const Home = () => {
  return (
    <div className="flex-grow p-6">
      <h2 className="text-xl font-bold">To Do</h2>
      <input type="text" placeholder="Add a Task" className="border p-2 w-full mt-2" />
      <ul className="mt-4">
        <li className="flex items-center justify-between p-2 border-b">
          <span>Buy groceries</span>
          <span>☆</span>
        </li>
        <li className="flex items-center justify-between p-2 border-b">
          <span>Finish project report</span>
          <span>★</span>
        </li>
      </ul>
      <h3 className="mt-6 font-bold">Completed</h3>
      <ul>
        <li className="line-through">✅ Read a book</li>
        <li className="line-through">✅ Clean the house</li>
      </ul>
    </div>
  );
};

export default Home;