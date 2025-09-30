import { Bell, AlertTriangle, CheckCircle, Clock, Users, Camera, Search, FileText, MapPin, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const StationControllerDashboard = () => {
  const activeIncidents = [
    { 
      id: 'INC-2025-0847', 
      type: 'Platform Safety', 
      description: 'Passenger medical emergency - Platform 2', 
      priority: 'high', 
      status: 'in-progress',
      location: 'Aluva Station - Platform 2',
      reportedTime: '14:32',
      estimatedResolution: '15:00'
    },
    { 
      id: 'INC-2025-0848', 
      type: 'Equipment', 
      description: 'Escalator Unit 3 - Irregular noise reported', 
      priority: 'medium', 
      status: 'assigned',
      location: 'Kaloor Station - Main Concourse',
      reportedTime: '13:45',
      estimatedResolution: '16:30'
    }
  ]

  const safetyChecklist = [
    { task: 'Platform Edge Door System Check', status: 'completed', time: '08:00', nextDue: '20:00' },
    { task: 'Emergency Communication Test', status: 'completed', time: '08:30', nextDue: '20:30' },
    { task: 'Fire Safety Equipment Inspection', status: 'pending', time: '-', nextDue: '15:00' },
    { task: 'CCTV System Functionality Check', status: 'completed', time: '09:00', nextDue: '21:00' },
    { task: 'Public Address System Test', status: 'overdue', time: '-', nextDue: '14:00' }
  ]

  const recentDocuments = [
    {
      id: 1,
      title: 'Incident Report #IR-ALV-300925',
      type: 'Safety Report',
      station: 'Aluva',
      timestamp: '30 mins ago',
      status: 'draft',
      linkedIncident: 'INC-2025-0847'
    },
    {
      id: 2,
      title: 'Daily Operations Log - September 30',
      type: 'Operations Log',
      station: 'Aluva',
      timestamp: '2 hours ago',
      status: 'submitted',
      linkedIncident: null
    },
    {
      id: 3,
      title: 'Passenger Flow Analysis - Weekend',
      type: 'Analytics Report',
      station: 'Aluva',
      timestamp: '1 day ago',
      status: 'approved',
      linkedIncident: null
    }
  ]

  const liveAlerts = [
    { id: 1, message: 'Train 304 arriving Platform 1 in 2 minutes', type: 'arrival', time: 'now' },
    { id: 2, message: 'Cleaning crew deployed to Platform 2', type: 'maintenance', time: '2 mins ago' },
    { id: 3, message: 'Peak hour crowd alert - Platform 1', type: 'crowd', time: '5 mins ago' }
  ]

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return { bg: '#fef2f2', color: '#ef4444' }
      case 'medium': return { bg: '#fef3c7', color: '#f59e0b' }
      case 'low': return { bg: 'var(--light-green)', color: 'var(--primary-green)' }
      default: return { bg: '#f3f4f6', color: 'var(--text-secondary)' }
    }
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return { bg: 'var(--light-green)', color: 'var(--primary-green)' }
      case 'in-progress': return { bg: 'var(--light-blue)', color: 'var(--primary-blue)' }
      case 'pending': return { bg: '#fef3c7', color: '#d97706' }
      case 'overdue': return { bg: '#fef2f2', color: '#ef4444' }
      case 'assigned': return { bg: 'var(--light-blue)', color: 'var(--primary-blue)' }
      default: return { bg: '#f3f4f6', color: 'var(--text-secondary)' }
    }
  }

  return (
    <div>
      <div className="header">
        <h1>Station Controller</h1>
        <div className="notification-icon">
          <Bell size={20} />
          <span className="notification-badge">5</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Quick Actions</h2>
        <div className="grid grid-2">
          <Link to="/capture" className="btn btn-primary">
            <Camera size={18} />
            Report Incident
          </Link>
          <Link to="/search" className="btn btn-outline">
            <Search size={18} />
            Search Logs
          </Link>
        </div>
      </div>

      {/* Active Incidents */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Active Incidents</h2>
        {activeIncidents.map((incident) => (
          <div key={incident.id} className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%',
                  backgroundColor: getPriorityColor(incident.priority).bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <AlertTriangle size={16} style={{ color: getPriorityColor(incident.priority).color }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <div style={{ fontWeight: '600', fontSize: '14px' }}>
                    {incident.description}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                    {incident.id}
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {incident.location} • Reported: {incident.reportedTime} • ETA: {incident.estimatedResolution}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div 
                    style={{ 
                      padding: '4px 8px', 
                      borderRadius: '6px', 
                      fontSize: '11px', 
                      fontWeight: '600',
                      backgroundColor: getStatusColor(incident.status).bg,
                      color: getStatusColor(incident.status).color
                    }}
                  >
                    {incident.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {incident.status === 'assigned' && (
                      <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                        Take Action
                      </button>
                    )}
                    {incident.status === 'in-progress' && (
                      <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                        Update Status
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Checklist */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Daily Safety Checklist</h2>
        {safetyChecklist.map((item, index) => (
          <div key={index} className="card" style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                  {item.task}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {item.status === 'completed' ? `Completed: ${item.time}` : `Due: ${item.nextDue}`}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div 
                  style={{ 
                    padding: '4px 8px', 
                    borderRadius: '6px', 
                    fontSize: '11px', 
                    fontWeight: '600',
                    backgroundColor: getStatusColor(item.status).bg,
                    color: getStatusColor(item.status).color
                  }}
                >
                  {item.status}
                </div>
                {item.status === 'completed' ? (
                  <CheckCircle size={16} style={{ color: 'var(--primary-green)' }} />
                ) : item.status === 'overdue' ? (
                  <AlertTriangle size={16} style={{ color: '#ef4444' }} />
                ) : (
                  <Clock size={16} style={{ color: '#f59e0b' }} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Documents */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Recent Station Documents</h2>
        {recentDocuments.map((doc) => (
          <Link key={doc.id} to={`/document/${doc.id}`} className="card" style={{ display: 'block', textDecoration: 'none', color: 'inherit', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: 'var(--light-blue)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FileText size={16} style={{ color: 'var(--primary-blue)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>
                  {doc.title}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  {doc.type} • {doc.station} Station • {doc.timestamp}
                </div>
                {doc.linkedIncident && (
                  <div style={{ fontSize: '11px', color: 'var(--primary-blue)' }}>
                    🔗 Linked to: {doc.linkedIncident}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Live Alerts */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Live Station Alerts</h2>
        {liveAlerts.map((alert) => (
          <div key={alert.id} className="card" style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%',
                  backgroundColor: alert.type === 'arrival' ? 'var(--primary-green)' : 
                                 alert.type === 'maintenance' ? 'var(--primary-blue)' : '#f59e0b'
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>
                  {alert.message}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  {alert.time}
                </div>
              </div>
              {alert.type === 'arrival' && (
                <Zap size={16} style={{ color: 'var(--primary-green)' }} />
              )}
              {alert.type === 'crowd' && (
                <Users size={16} style={{ color: '#f59e0b' }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StationControllerDashboard