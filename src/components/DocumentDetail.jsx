import { ArrowLeft, Download, CheckCircle, XCircle, Forward, Clock, User } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import AIInsights from './AIInsights'

const DocumentDetail = () => {
  const { id } = useParams()
  
  const document = {
    title: 'CMRS Safety Bulletin - Emergency Braking System Update',
    type: 'CMRS Regulatory Directive',
    department: 'Safety & Operations',
    uploadedBy: 'Rajesh Kumar',
    uploadDate: '2024-09-30 09:15',
    status: 'Pending Station Controller Review',
    fileSize: '3.7 MB',
    summary: 'Commissioner of Metro Rail Safety directive regarding updated emergency braking protocols for all rolling stock. Effective immediately for all train operations on Aluva-Maharajas corridor. Requires immediate training updates for drivers and station controllers. Bilingual implementation (English/Malayalam) mandatory within 7 days. Critical for upcoming audit compliance.',
    aiInsights: [
      'URGENT: Implementation deadline - October 7, 2024 (Page 1, Para 2)',
      'Training Required: All 47 train operators must complete certification (Page 3)',
      'Malayalam Translation: Safety announcements must be updated (Page 4, Section 3.2)',
      'Audit Impact: Non-compliance affects upcoming MOHUA review (Page 2)',
      'Rolling Stock: Applies to all 25 trains in current fleet (Page 5)'
    ]
  }

  const approvalHistory = [
    { 
      action: 'CMRS Document Received', 
      user: 'KMRL System', 
      role: 'Email Gateway',
      timestamp: '2024-09-30 09:15',
      status: 'completed'
    },
    { 
      action: 'AI Processing & Translation', 
      user: 'KMRL DocAI', 
      role: 'AI System',
      timestamp: '2024-09-30 09:17',
      status: 'completed'
    },
    { 
      action: 'Safety Team Notification', 
      user: 'Auto-Routing', 
      role: 'Workflow System',
      timestamp: '2024-09-30 09:18',
      status: 'completed'
    },
    { 
      action: 'Awaiting Station Controller Approval', 
      user: 'Priya Nair', 
      role: 'Station Controller - Aluva',
      timestamp: '2024-09-30 09:20',
      status: 'pending'
    }
  ]

  return (
    <div className="screen">
      <div className="header">
        <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
          <ArrowLeft size={24} />
        </Link>
        <h1>Document Details</h1>
        <button className="btn-outline" style={{ padding: '8px' }}>
          <Download size={18} />
        </button>
      </div>

      {/* Document Info */}
      <div className="card mb-16">
        <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>
          {document.title}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px' }}>
          <div>
            <span style={{ color: 'var(--text-secondary)' }}>Type:</span> {document.type}
          </div>
          <div>
            <span style={{ color: 'var(--text-secondary)' }}>Department:</span> {document.department}
          </div>
          <div>
            <span style={{ color: 'var(--text-secondary)' }}>Uploaded by:</span> {document.uploadedBy}
          </div>
          <div>
            <span style={{ color: 'var(--text-secondary)' }}>Date:</span> {document.uploadDate}
          </div>
          <div>
            <span style={{ color: 'var(--text-secondary)' }}>Status:</span> 
            <span style={{ 
              color: 'var(--primary-blue)', 
              backgroundColor: 'var(--light-blue)', 
              padding: '2px 6px', 
              borderRadius: '4px', 
              marginLeft: '4px' 
            }}>
              {document.status}
            </span>
          </div>
          <div>
            <span style={{ color: 'var(--text-secondary)' }}>Size:</span> {document.fileSize}
          </div>
        </div>
      </div>

      {/* AI Summary */}
      <div className="card mb-16">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--primary-green)', borderRadius: '50%' }}></div>
          AI-Generated Summary
        </h3>
        <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
          {document.summary}
        </p>
      </div>

      {/* AI Insights */}
      <div className="card mb-16">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
          Key Insights
        </h3>
        {document.aiInsights.map((insight, index) => (
          <div key={index} style={{ 
            fontSize: '13px', 
            padding: '8px 12px', 
            backgroundColor: index === 0 ? '#fef3c7' : 'var(--background)',
            borderRadius: '6px',
            marginBottom: '8px',
            border: index === 0 ? '1px solid #fbbf24' : '1px solid var(--border)'
          }}>
            {insight}
          </div>
        ))}
      </div>

      {/* AI Insights Panel */}
      <AIInsights document={document} />

      {/* Action Buttons */}
      <div className="grid grid-2 mb-24">
        <button className="btn btn-secondary">
          <CheckCircle size={18} />
          Approve
        </button>
        <button className="btn btn-outline" style={{ borderColor: '#ef4444', color: '#ef4444' }}>
          <XCircle size={18} />
          Reject
        </button>
      </div>

      <button className="btn btn-outline mb-24" style={{ width: '100%' }}>
        <Forward size={18} />
        Delegate to Manager
      </button>

      {/* Approval Timeline */}
      <div className="card">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
          Approval History
        </h3>
        {approvalHistory.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '50%',
              backgroundColor: item.status === 'completed' ? 'var(--light-green)' : 'var(--light-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2px'
            }}>
              {item.status === 'completed' ? 
                <CheckCircle size={16} style={{ color: 'var(--primary-green)' }} /> :
                <Clock size={16} style={{ color: 'var(--primary-blue)' }} />
              }
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '2px' }}>
                {item.action}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '2px' }}>
                {item.user} • {item.role}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                {item.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DocumentDetail