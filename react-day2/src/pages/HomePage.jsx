import React, { useState } from 'react'; // Tambahkan useState di sini
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [tasks, setTasks] = useState([]); // State untuk menyimpan daftar task
  const navigate = useNavigate(); 

  const addTask = () => {
    setTasks([...tasks, 'New Task']);
  };

  const goToKeranjang = () => {
    navigate('/keranjang'); 
  };

  return (
    <div style={styles.container}>
      <button onClick={goToKeranjang} style={styles.button}>Keranjang</button>
      <h1 style={styles.title}>HomePage</h1>
      <button onClick={addTask} style={styles.button}>Task</button>

      {tasks.map((task, index) => (
        <div key={index} style={styles.taskContainer}>
          {task}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.7rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  taskContainer: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
};

export default HomePage;
