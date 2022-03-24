const Form = () => (
  <div>
    <h2>Add New Book</h2>
    <form>
      <input type="text" name="name" placeholder="Book title" />
      <input type="text" name="author" placeholder="Author" />
      <select>
        <option disabled selected>Category</option>
      </select>
      <input type="submit" />
    </form>
  </div>
);

export default Form;
