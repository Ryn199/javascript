import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function KeranjangPage() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1); // Jumlah produk
  const productPrice = 5000; // Harga produk

  // Fungsi untuk menambah jumlah produk
  const tambah = () => {
    setQuantity(quantity + 1);
  };

  // Fungsi untuk mengurangi jumlah produk
  const kurang = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Fungsi untuk mereset jumlah produk
  const reset = () => {
    setQuantity(1);
  };

  // Menghitung total harga
  const totalPrice = quantity * productPrice;

  const goToGif = () => {
    navigate('/gif'); 
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Keranjang</h1>
      <div style={styles.productContainer}>
        <h2 style={styles.productName}>Quasong Asli Prancis</h2>
        <img
          className="avatar"
          src={'https://i.pinimg.com/736x/bf/6f/3a/bf6f3a8a3c4113e653c295582d6ce343.jpg'}
          style={{
            width: 100,
            height: 100
          }}
        />
        <p style={styles.productPrice}>Harga: Rp {productPrice}</p>
        <p style={styles.productQuantity}>Jumlah: {quantity}</p>
        <div style={styles.buttonContainer}>
          <button onClick={tambah} style={styles.button}>Tambah</button>
          <button onClick={kurang} style={styles.button}>Kurang</button>
          <button onClick={reset} style={styles.button}>Reset</button>
        </div>
        <h3 style={styles.totalPrice}>Total Harga: Rp {totalPrice}</h3>
        <div style={styles.buttonContainer}>
          <button onClick={goToGif} style={styles.button}>Checkout</button>
        </div>
      </div>
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
  title: {
    marginBottom: '1rem',
  },
  productContainer: {
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  productName: {
    fontSize: '1.5rem',
    margin: '0.5rem 0',
  },
  productPrice: {
    fontSize: '1.2rem',
    margin: '0.5rem 0',
  },
  productQuantity: {
    fontSize: '1rem',
    margin: '0.5rem 0',
  },
  buttonContainer: {
    margin: '1rem 0',
  },
  button: {
    padding: '0.5rem 1rem',
    margin: '0 0.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  totalPrice: {
    marginTop: '1rem',
    fontWeight: 'bold',
  },
};

export default KeranjangPage;
