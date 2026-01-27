// App.jsx

import { useState } from 'react'

function App() {
  // State hooks manage data that changes over time in the UI
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  // Asynchronous function to fetch data from our Python microservice
  const fetchPassword = async () => {
    setLoading(true)
    setCopied(false)
    try {
      // Calling the local FastAPI endpoint
      const response = await fetch(`http://localhost:8000/generate?length=${length}`)
      const data = await response.json()

      // Updating the UI state with the returned JSON data
      setPassword(data.password)
    } catch (error) {
      console.error("API Connection Error:", error)
    } finally {
      setLoading(false) // Reset loading state regardless of success or failure
    }
  }

  // Modern Browser API usage for clipboard interaction
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Temporary visual feedback
    }
  }



  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Secure-Gen</h1>
        <div style={styles.inputArea}>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Length:</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value) || 0)}
            min="4"
            max="64"
            style={styles.numberInput}
          />
        </div>
      <button onClick={fetchPassword} style={styles.button} disabled={loading}>
        {loading ? 'Generating...' : 'Generate New Password'}
      </button>

      {password && (
        <div style={styles.resultContainer}>
          <div style={styles.passwordBox}>
            {password}
          </div>
          <button onClick={copyToClipboard} style={styles.copyButton}>
            {copied ? '✅ Copied!' : 'Copy to Clipboard'}
          </button>
        </div>
      )}
    </div>
  )
}

// Simple CSS-in-JS to fix your visibility issues
const styles = {
  container: { textAlign: 'center', marginTop: '50px', fontFamily: 'Arial', color: '#333' },
  title: { color: '#2c3e50', marginBottom: '30px' },
  inputArea: { marginBottom: '20px' },
  numberInput: {
    padding: '8px',
    width: '60px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    textAlign: 'center'
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  resultContainer: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
  },
  passwordBox: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    color: '#2c3e50',
    fontSize: '1.4rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    minWidth: '300px',
    maxWidth: '80%',
    wordBreak: 'break-all',
    fontFamily: 'monospace'
  },
  copyButton: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  }
}

export default App