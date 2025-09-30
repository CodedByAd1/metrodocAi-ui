import { ArrowLeft, User, Bell, Shield, Settings, HelpCircle, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserProfile = () => {
  const [notifications, setNotifications] = useState({
    documentUpdates: true,
    approvalRequests: true,
    systemAlerts: true,
    maintenanceReminders: false
  })

  const user = {
    name: 'Arjun Menon',
    email: 'arjun.menon@kmrl.co.in',
    employeeId: 'KMRL-2847',
    department: 'Rolling Stock Operations',
    joinDate: '2018-03-12',
    assignedRole: 'technician' // Role assigned by system admin
  }

  const roles = [
    {
      id: 'technician',
      title: 'Rolling Stock Technician',
      description: 'Train maintenance and field operations',
      permissions: ['Maximo job cards', 'Safety reports', 'Equipment status updates']
    },
    {
      id: 'controller',
      title: 'Station Controller',
      description: 'Station operations and passenger safety',
      permissions: ['CMRS compliance', 'Emergency protocols', 'Staff coordination']
    },
    {
      id: 'manager',
      title: 'Departmental Manager',
      description: 'Operations oversight and resource allocation',
      permissions: ['Vendor approvals', 'Budget documents', 'MOHUA reports']
    },
    {
      id: 'executive',
      title: 'Executive Director',
      description: 'Strategic planning and board governance',
      permissions: ['Board minutes', 'Regulatory compliance', 'System-wide analytics']
    }
  ]

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="screen">
      <div className="header">
        <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
          <ArrowLeft size={24} />
        </Link>
        <h1>Profile</h1>
        <button className="notification-icon">
          <Settings size={20} />
        </button>
      </div>

      {/* User Info Card */}
      <div className="card mb-24">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div 
            style={{ 
              width: '64px', 
              height: '64px', 
              backgroundColor: 'var(--primary-blue)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--white)',
              fontSize: '24px',
              fontWeight: '700'
            }}
          >
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '4px' }}>
              {user.name}
            </h2>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '2px' }}>
              {user.email}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {user.employeeId} • {user.department}
            </div>
          </div>
        </div>
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'var(--background)', 
          borderRadius: '8px',
          fontSize: '12px',
          color: 'var(--text-secondary)'
        }}>
          Member since {user.joinDate}
        </div>
      </div>

      {/* Assigned Role (Read-only) */}
      <div className="card mb-24">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Shield size={18} />
          Assigned Role
        </h3>
        
        {(() => {
          const assignedRole = roles.find(role => role.id === user.assignedRole)
          return (
            <div 
              style={{
                padding: '16px',
                borderRadius: '8px',
                border: '2px solid var(--primary-blue)',
                backgroundColor: 'var(--light-blue)',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '12px',
                  fontSize: '10px',
                  color: 'var(--primary-blue)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                System Assigned
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div 
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid var(--primary-blue)',
                    backgroundColor: 'var(--primary-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--white)', borderRadius: '50%' }} />
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '14px' }}>{assignedRole.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{assignedRole.description}</div>
                </div>
              </div>
              
              <div style={{ paddingLeft: '32px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: 'var(--text-secondary)' }}>
                  Your Permissions:
                </div>
                {assignedRole.permissions.map((permission, index) => (
                  <div key={index} style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '2px' }}>
                    • {permission}
                  </div>
                ))}
              </div>
              
              <div 
                style={{
                  marginTop: '12px',
                  padding: '8px 12px',
                  backgroundColor: 'var(--background)',
                  borderRadius: '6px',
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic'
                }}
              >
                Role assigned by System Administrator. Contact IT support for role changes.
              </div>
            </div>
          )
        })()}
      </div>

      {/* Notification Preferences */}
      <div className="card mb-24">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Bell size={18} />
          Notification Preferences
        </h3>
        
        {Object.entries({
          documentUpdates: 'CMRS Circulars',
          approvalRequests: 'Vendor Payment Approvals',
          systemAlerts: 'Safety Bulletins',
          maintenanceReminders: 'Maximo Job Alerts'
        }).map(([key, label]) => (
          <div 
            key={key}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              padding: '12px 0',
              borderBottom: '1px solid var(--border)'
            }}
          >
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>{label}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Receive notifications for {label.toLowerCase()}
              </div>
            </div>
            <div 
              onClick={() => handleNotificationToggle(key)}
              style={{
                width: '48px',
                height: '24px',
                borderRadius: '12px',
                backgroundColor: notifications[key] ? 'var(--primary-green)' : 'var(--border)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <div 
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--white)',
                  position: 'absolute',
                  top: '2px',
                  left: notifications[key] ? '26px' : '2px',
                  transition: 'all 0.2s'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Settings Options */}
      <div className="card mb-24">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
          Settings & Support
        </h3>
        
        {[
          { icon: HelpCircle, label: 'Help & Support', action: 'help' },
          { icon: Settings, label: 'App Preferences', action: 'preferences' },
          { icon: Shield, label: 'Privacy & Security', action: 'privacy' }
        ].map((item, index) => (
          <div 
            key={index}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              padding: '12px 0',
              borderBottom: index < 2 ? '1px solid var(--border)' : 'none',
              cursor: 'pointer'
            }}
          >
            <item.icon size={20} style={{ color: 'var(--text-secondary)' }} />
            <div style={{ fontSize: '14px', fontWeight: '500' }}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <button className="btn btn-outline" style={{ width: '100%', color: '#ef4444', borderColor: '#ef4444' }}>
        <LogOut size={18} />
        Sign Out
      </button>
    </div>
  )
}

export default UserProfile