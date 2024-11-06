import React from 'react';
import { useNavigate } from 'react-router-dom';

function GifPage() {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/homepage'); 
  };

  return (
    <div style={styles.container}>
      <img 
        src="https://upload-os-bbs.hoyolab.com/upload/2024/01/01/296851425/2b0f2400346cd7621931df075bcb43c7_3996149763167465138.gif" 
        alt="Example GIF" 
        style={styles.gif} 
      />
      <button onClick={handleOkClick} style={styles.button}>OK</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
  },
  gif: {
    width: '200px',
    height: 'auto',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default GifPage;
