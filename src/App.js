
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name : '',
    email : '',
    password : '',
  })

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    });
  }

  useEffect(() => {
    // Fetch user data from localStorage on component mount
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {...formData};
    const updatedUser = [...users, newUser];

    localStorage.setItem('users', JSON.stringify(updatedUser))
    setUsers(updatedUser);

    console.log(formData);
    setFormData({
      name : '',
      email : '',
      password : '',
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Enter the name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} />

        <label>Enter the Email</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} />


        <label>Enter the Password</label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} />

        <button type='submit'>Submit</button>

      </form>



      <div>
        <h2>User Data:</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
