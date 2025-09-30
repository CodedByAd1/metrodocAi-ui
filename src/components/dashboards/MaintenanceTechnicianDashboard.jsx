import { Bell, AlertTriangle, Clock, CheckCircle, Camera, Search, FileText, Truck, Wrench, Battery, Zap, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const MaintenanceTechnicianDashboard = () => {
  const workOrders = [
    { 
      id: 'WO-2025-1247', 
      title: 'Train 301 - Brake System Inspection', 
      asset: 'Rolling Stock 301',
      priority: 'high', 
      status: 'assigned',
      estimatedTime: '4 hours',
      dueDate: 'Today 16:00',
      location: 'Depot - Bay 3'
    },
    { 
      id: 'WO-2025-1248', 
      title: 'Escalator Unit 2 - Motor Maintenance', 
      asset: 'ESC-ALV-02',
      priority: 'medium', 
      status: 'in-progress',
      estimatedTime: '2 hours',
      dueDate: 'Tomorrow 10:00',
      location: 'Aluva Station - Concourse'
    },
    { 
      id: 'WO-2025-1249', 
      title: 'Platform Lighting - LED Replacement', 
      asset: 'Platform 3 Lighting',
      priority: 'medium', 
      status: 'awaiting-parts',
      estimatedTime: '1 hour',
      dueDate: 'Oct 2, 14:00',
      location: 'Kaloor Station - Platform 3'
    },
    { 
      id: 'WO-2025-1250', 
      title: 'HVAC System - Filter Replacement', 
      asset: 'HVAC-KKD-01',
      priority: 'low', 
      status: 'assigned',
      estimatedTime: '3 hours',
      dueDate: 'Oct 3, 09:00',
      location: 'Kakkanad Station - Plant Room'
    }
  ]

  const assetHistory = [
    { 
      asset: 'Train 301', 
      lastMaintenance: '2025-09-15',
      status: 'Due for Service',
      totalJobs: 23,
      uptime: '97.8%',
      nextScheduled: '2025-10-05'
    },
    { 
      asset: 'Escalator ALV-02', 
      lastMaintenance: '2025-09-20',
      status: 'Good Condition',
      totalJobs: 15,
      uptime: '99.2%',
      nextScheduled: '2025-10-20'
    },
    { 
      asset: 'HVAC KKD-01', 
      lastMaintenance: '2025-09-25',
      status: 'Service Required',
      totalJobs: 18,
      uptime: '95.5%',
      nextScheduled: '2025-10-01'
    }
  ]

  const linkedDocuments = [
    {
      id: 1,
      workOrder: 'WO-2025-1247',
      title: 'Brake System Technical Manual - Siemens',
      type: 'Manual',
      linkedReports: ['Incident Report #IR-301-092025', 'Previous Job Card #JC-301-0820']
    },
    {
      id: 2,
      workOrder: 'WO-2025-1248',
      title: 'Escalator Safety Inspection Report',
      type: 'Incident Report',
      linkedReports: ['Maintenance Schedule MS-ESC-Q3', 'Vendor Contract VC-OTIS-2025']
    },
    {
      id: 3,
      workOrder: 'WO-2025-1249',
      title: 'LED Lighting Specification Sheet',
      type: 'Technical Spec',
      linkedReports: ['Purchase Order PO-LED-2025-089', 'Installation Guide IG-LED-V2']
    }
  ]

  const recentAlerts = [
    { id: 1, message: 'New work order assigned: Train 302 Door System', time: '10 mins ago', type: 'assignment' },
    { id: 2, message: 'Parts arrived for WO-2025-1249', time: '1 hour ago', type: 'parts' },
    { id: 3, message: 'Overdue: Platform cleaning checklist', time: '2 hours ago', type: 'overdue' },
    { id: 4, message: 'Battery backup test completed - All systems OK', time: '3 hours ago', type: 'completion' }
  ]

  const todaySchedule = [
    { time: '09:00', task: 'Morning safety briefing', location: 'Depot Office', status: 'completed' },
    { time: '09:30', task: 'Train 301 brake inspection', location: 'Bay 3', status: 'in-progress' },
    { time: '14:00', task: 'Escalator motor maintenance', location: 'Aluva Station', status: 'pending' },
    { time: '16:30', task: 'Daily equipment check', location: 'Depot', status: 'pending' }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'assigned': return { bg: 'var(--light-blue)', color: 'var(--primary-blue)' }
      case 'in-progress': return { bg: '#fef3c7', color: '#d97706' }
      case 'awaiting-parts': return { bg: '#fef2f2', color: '#ef4444' }
      case 'completed': return { bg: 'var(--light-green)', color: 'var(--primary-green)' }
      case 'pending': return { bg: '#f3f4f6', color: 'var(--text-secondary)' }
      default: return { bg: '#f3f4f6', color: 'var(--text-secondary)' }
    }
  }

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 'high': return <AlertTriangle size={16} style={{ color: '#ef4444' }} />
      case 'medium': return <Clock size={16} style={{ color: '#f59e0b' }} />
      case 'low': return <CheckCircle size={16} style={{ color: '#10b981' }} />
      default: return <Clock size={16} style={{ color: 'var(--text-secondary)' }} />
    }
  }

  return (
    <div>
      <div className="header">
        <h1>Maintenance Tech</h1>
        <div className="notification-icon">
          <Bell size={20} />
          <span className="notification-badge">6</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Quick Actions</h2>
        <div className="grid grid-2">
          <Link to="/capture" className="btn btn-primary">
            <Camera size={18} />
            Upload Photo
          </Link>
          <Link to="/search" className="btn btn-outline">
            <Search size={18} />
            Search Assets
          </Link>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Today's Schedule</h2>
        {todaySchedule.map((item, index) => (
          <div key={index} className="card" style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                fontSize: '12px', 
                fontWeight: '600', 
                color: 'var(--primary-blue)',
                minWidth: '45px',
                fontFamily: 'monospace'
              }}>
                {item.time}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>
                  {item.task}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {item.location}
                </div>
              </div>
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
                {item.status.replace('-', ' ')}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Work Orders */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Assigned Work Orders</h2>
        {workOrders.map((wo) => (
          <div key={wo.id} className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ marginTop: '4px' }}>
                {getPriorityIcon(wo.priority)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <div style={{ fontWeight: '600', fontSize: '14px' }}>
                    {wo.title}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                    {wo.id}
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  {wo.asset} • {wo.estimatedTime} • Due: {wo.dueDate}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  📍 {wo.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div 
                    style={{ 
                      padding: '4px 8px', 
                      borderRadius: '6px', 
                      fontSize: '11px', 
                      fontWeight: '600',
                      backgroundColor: getStatusColor(wo.status).bg,
                      color: getStatusColor(wo.status).color
                    }}
                  >
                    {wo.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {wo.status === 'assigned' && (
                      <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                        <Wrench size={14} />
                        Start Work
                      </button>
                    )}
                    {wo.status === 'in-progress' && (
                      <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                        <CheckCircle size={14} />
                        Complete
                      </button>
                    )}
                    {wo.status === 'awaiting-parts' && (
                      <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '12px' }}>
                        <Truck size={14} />
                        Track Parts
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Asset History */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Asset Maintenance History</h2>
        {assetHistory.map((asset, index) => (
          <div key={index} className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ fontWeight: '600', fontSize: '14px' }}>
                {asset.asset}
              </div>
              <div style={{ 
                padding: '4px 8px', 
                borderRadius: '6px', 
                fontSize: '11px', 
                fontWeight: '600',
                backgroundColor: asset.status === 'Due for Service' || asset.status === 'Service Required' ? '#fef3c7' : 'var(--light-green)',
                color: asset.status === 'Due for Service' || asset.status === 'Service Required' ? '#d97706' : 'var(--primary-green)'
              }}>
                {asset.status}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              <div>Last: {asset.lastMaintenance}</div>
              <div>Jobs: {asset.totalJobs}</div>
              <div>Uptime: {asset.uptime}</div>
              <div>Next: {asset.nextScheduled}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: '100%', 
                height: '4px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  width: asset.uptime, 
                  height: '100%', 
                  backgroundColor: parseFloat(asset.uptime) > 98 ? 'var(--primary-green)' : 
                                  parseFloat(asset.uptime) > 95 ? '#f59e0b' : '#ef4444',
                  borderRadius: '2px'
                }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Document DNA Links */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Document DNA View</h2>
        {linkedDocuments.map((doc) => (
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
                  Work Order: {doc.workOrder} • {doc.type}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--primary-blue)' }}>
                  🔗 Linked: {doc.linkedReports.join(', ')}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Alerts */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Recent Alerts</h2>
        {recentAlerts.map((alert) => (
          <div key={alert.id} className="card" style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%',
                  backgroundColor: alert.type === 'assignment' ? 'var(--primary-blue)' : 
                                 alert.type === 'parts' ? 'var(--primary-green)' : 
                                 alert.type === 'completion' ? 'var(--primary-green)' : '#ef4444'
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
              {alert.type === 'assignment' && <Wrench size={16} style={{ color: 'var(--primary-blue)' }} />}
              {alert.type === 'parts' && <Truck size={16} style={{ color: 'var(--primary-green)' }} />}
              {alert.type === 'completion' && <CheckCircle size={16} style={{ color: 'var(--primary-green)' }} />}
              {alert.type === 'overdue' && <AlertTriangle size={16} style={{ color: '#ef4444' }} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MaintenanceTechnicianDashboard