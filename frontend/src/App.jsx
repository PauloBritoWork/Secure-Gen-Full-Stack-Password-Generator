// App.jsx

import { useState } from 'react'

function App() {
  // State hooks manage data that changes over time in the UI
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  // Asynchronous function to fetch data from our Python microservice
  const fetchPassword = async () => {
    setLoading(true)
    setCopied(false)
    try {
      // Calling the local FastAPI endpoint
      const response = await fetch("http://localhost:8000/generate?length=16")
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
  container: { textAlign: 'center', marginTop: '50px', color: '#333', fontFamily: 'Arial' },
  title: { color: '#2c3e50' },
  button: { padding: '12px 24px', fontSize: '1rem', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  resultContainer: { marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' },
  passwordBox: {
    padding: '15px',
    backgroundColor: '#f4f4f4', // Light grey background
    color: '#2c3e50',           // Dark text color
    fontSize: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    minWidth: '300px',
    wordBreak: 'break-all'
  },
  copyButton: { padding: '8px 16px', cursor: 'pointer', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px' }
}

export default App