import { Bell } from 'lucide-react'
import { useState } from 'react'
import StationControllerDashboard from './dashboards/StationControllerDashboard'
import MaintenanceTechnicianDashboard from './dashboards/MaintenanceTechnicianDashboard'
import DepartmentManagerDashboard from './dashboards/DepartmentManagerDashboard'
import ExecutiveDashboard from './dashboards/ExecutiveDashboard'

const Dashboard = () => {
  const [currentRole, setCurrentRole] = useState('station-controller')
  
  // Debug logging
  console.log('Dashboard component loaded')
  console.log('StationControllerDashboard:', StationControllerDashboard)
  
  const roles = [
    { id: 'station-controller', name: 'Station Controller', component: StationControllerDashboard },
    { id: 'maintenance-tech', name: 'Maintenance Tech', component: MaintenanceTechnicianDashboard },
    { id: 'department-manager', name: 'Dept Manager', component: DepartmentManagerDashboard },
    { id: 'executive', name: 'Executive', component: ExecutiveDashboard }
  ]

  const CurrentDashboardComponent = roles.find(role => role.id === currentRole)?.component || StationControllerDashboard

  // Safety check
  if (!CurrentDashboardComponent) {
    return (
      <div className="screen">
        <div className="header">
          <h1>KMRL DocAI</h1>
        </div>
        <div className="card">
          <h2>Loading Dashboard...</h2>
          <p>Current role: {currentRole}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="screen">
      {/* Role Selector */}
      <div style={{ 
        position: 'fixed', 
        top: '10px', 
        right: '10px', 
        zIndex: 1000,
        background: 'var(--white)',
        borderRadius: '8px',
        boxShadow: '0 2px 8px var(--shadow)',
        border: '1px solid var(--border)'
      }}>
        <select 
          value={currentRole}
          onChange={(e) => setCurrentRole(e.target.value)}
          style={{
            padding: '6px 8px',
            border: 'none',
            background: 'transparent',
            fontSize: '12px',
            fontWeight: '600',
            color: 'var(--primary-blue)'
          }}
        >
          {roles.map(role => (
            <option key={role.id} value={role.id}>{role.name}</option>
          ))}
        </select>
      </div>

      <CurrentDashboardComponent />
    </div>
  )
}

export default Dashboard