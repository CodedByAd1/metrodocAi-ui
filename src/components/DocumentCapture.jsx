import { Camera, Upload, FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const DocumentCapture = () => {
  const recentScans = [
    { id: 1, name: 'Maximo_JobCard_RS_2024_0847.pdf', date: '30 minutes ago', size: '1.2 MB' },
    { id: 2, name: 'Vendor_Invoice_Siemens_Sept.pdf', date: '2 hours ago', size: '890 KB' },
    { id: 3, name: 'WhatsApp_Safety_Update_Malayalam.pdf', date: '4 hours ago', size: '2.1 MB' },
    { id: 4, name: 'MOHUA_Environmental_Study.pdf', date: '1 day ago', size: '7.3 MB' }
  ]

  return (
    <div className="screen">
      <div className="header">
        <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
          <ArrowLeft size={24} />
        </Link>
        <h1>Document Capture</h1>
        <div></div>
      </div>

      {/* Main Scan Button */}
      <div className="text-center mb-24">
        <div 
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            boxShadow: '0 8px 24px rgba(30, 64, 175, 0.3)'
          }}
          className="scan-button"
        >
          <Camera size={64} style={{ color: 'var(--white)' }} />
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
          Scan Document
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Tap the camera to scan a new document
        </p>
        
        <button className="btn btn-outline mb-16" style={{ width: '100%' }}>
          <Upload size={18} />
          Upload from Gallery
        </button>
      </div>

      {/* Document Types */}
      <div className="mb-24">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
          Document Types
        </h3>
        <div className="grid grid-2">
          {[
            { name: 'CMRS Circulars', icon: '📋' },
            { name: 'Maximo Exports', icon: '⚙️' },
            { name: 'Vendor Invoices', icon: '💰' },
            { name: 'Engineering Drawings', icon: '📐' }
          ].map((type, index) => (
            <div key={index} className="card text-center" style={{ cursor: 'pointer' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{type.icon}</div>
              <div style={{ fontSize: '12px', fontWeight: '600' }}>{type.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Scans */}
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
          Recent Scans
        </h3>
        {recentScans.map((scan) => (
          <Link 
            key={scan.id} 
            to={`/document/${scan.id}`} 
            className="card" 
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: 'var(--light-green)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FileText size={20} style={{ color: 'var(--primary-green)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '2px' }}>
                  {scan.name}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {scan.date} • {scan.size}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>
        {`
          .scan-button:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  )
}

export default DocumentCapture