import { Bell, TrendingUp, Users, FileText, Search, Clock, CheckCircle, AlertTriangle, DollarSign, Calendar, UserCheck, BarChart3, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const DepartmentManagerDashboard = () => {
  const approvalQueue = [
    { 
      id: 1, 
      title: 'Siemens Spare Parts Invoice - ₹2,47,000', 
      type: 'Vendor Invoice',
      submittedBy: 'Procurement Team',
      priority: 'high', 
      amount: '₹2,47,000',
      dueDate: 'Today',
      description: 'Brake system components for Train 301-305'
    },
    { 
      id: 2, 
      title: 'Overtime Authorization - Security Staff', 
      type: 'HR Approval',
      submittedBy: 'Station Controller',
      priority: 'medium', 
      amount: '₹15,600',
      dueDate: 'Tomorrow',
      description: 'Extended shift coverage for weekend operations'
    },
    { 
      id: 3, 
      title: 'Emergency Maintenance Contract - Platform 2', 
      type: 'Work Order',
      submittedBy: 'Maintenance Team',
      priority: 'high', 
      amount: '₹85,000',
      dueDate: 'Today',
      description: 'Urgent escalator motor replacement'
    }
  ]

  const kpis = [
    { 
      title: 'Avg Resolution Time', 
      value: '2.3 hrs', 
      change: '-15%', 
      trend: 'down',
      color: 'var(--primary-green)',
      target: '< 3 hrs'
    },
    { 
      title: 'Compliance Score', 
      value: '94.7%', 
      change: '+2.1%', 
      trend: 'up',
      color: 'var(--primary-blue)',
      target: '> 95%'
    },
    { 
      title: 'Budget Utilization', 
      value: '73.2%', 
      change: '+5.3%', 
      trend: 'up',
      color: '#f59e0b',
      target: '80%'
    },
    { 
      title: 'Team Workload', 
      value: '85%', 
      change: '-8%', 
      trend: 'down',
      color: 'var(--primary-green)',
      target: '< 90%'
    }
  ]

  const analytics = {
    incidentTrends: [
      { category: 'Equipment Failure', count: 12, change: '-3 from last week', trend: 'improving' },
      { category: 'Safety Reports', count: 8, change: '+2 from last week', trend: 'attention' },
      { category: 'Passenger Complaints', count: 5, change: 'No change', trend: 'stable' }
    ],
    recurringIssues: [
      { issue: 'Escalator Motor Overheating', frequency: 4, lastOccurrence: '2025-09-28', status: 'under-review' },
      { issue: 'Platform Door Sensor Malfunction', frequency: 3, lastOccurrence: '2025-09-26', status: 'action-taken' }
    ],
    staffWorkload: [
      { name: 'Arjun Menon', workload: '12 tasks', status: 'normal', department: 'Operations' },
      { name: 'Priya Nair', workload: '18 tasks', status: 'high', department: 'Maintenance' },
      { name: 'Rajesh Kumar', workload: '8 tasks', status: 'low', department: 'Security' }
    ]
  }

  const complianceItems = [
    { title: 'CMRS Monthly Report', status: 'submitted', dueDate: 'Oct 5', risk: 'low', progress: 100 },
    { title: 'MOHUA Environmental Compliance', status: 'pending', dueDate: 'Oct 10', risk: 'medium', progress: 65 },
    { title: 'Fire Safety Certificate Renewal', status: 'overdue', dueDate: 'Sep 30', risk: 'high', progress: 20 }
  ]

  const pendingNotifications = [
    { id: 1, title: 'Budget approval needed', message: 'Q4 maintenance budget requires review', priority: 'high', category: 'financial' },
    { id: 2, title: 'Compliance deadline', message: 'MOHUA report due in 10 days', priority: 'medium', category: 'compliance' },
    { id: 3, title: 'Staff performance review', message: '5 reviews pending completion', priority: 'low', category: 'hr' }
  ]

  const teamPerformance = [
    { member: 'Operations Team', tasks: 45, completed: 42, efficiency: '93%', rating: 'excellent' },
    { member: 'Maintenance Team', tasks: 38, completed: 35, efficiency: '92%', rating: 'excellent' },
    { member: 'Security Team', tasks: 28, completed: 24, efficiency: '86%', rating: 'good' },
    { member: 'Cleaning Team', tasks: 52, completed: 46, efficiency: '88%', rating: 'good' }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'submitted': return { bg: 'var(--light-green)', color: 'var(--primary-green)' }
      case 'pending': return { bg: '#fef3c7', color: '#d97706' }
      case 'overdue': return { bg: '#fef2f2', color: '#ef4444' }
      default: return { bg: '#f3f4f6', color: 'var(--text-secondary)' }
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return { bg: '#fef2f2', color: '#ef4444' }
      case 'medium': return { bg: '#fef3c7', color: '#d97706' }
      case 'low': return { bg: 'var(--light-green)', color: 'var(--primary-green)' }
      default: return { bg: '#f3f4f6', color: 'var(--text-secondary)' }
    }
  }

  return (
    <div>
      <div className="header">
        <h1>Department Manager</h1>
        <div className="notification-icon">
          <Bell size={20} />
          <span className="notification-badge">12</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Quick Actions</h2>
        <div className="grid grid-2">
          <Link to="/search" className="btn btn-primary">
            <Search size={18} />
            Search Documents
          </Link>
          <button className="btn btn-outline">
            <Users size={18} />
            Delegate Task
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Key Performance Indicators</h2>
        <div className="grid grid-2">
          {kpis.map((kpi, index) => (
            <div key={index} className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '700', color: kpi.color, marginBottom: '4px' }}>
                {kpi.value}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                {kpi.title}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Target: {kpi.target}
              </div>
              <div style={{ 
                fontSize: '11px', 
                fontWeight: '600',
                color: kpi.trend === 'up' ? 'var(--primary-green)' : 'var(--primary-blue)'
              }}>
                {kpi.trend === 'up' ? '↗' : '↘'} {kpi.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Approval Queue */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Approval Queue</h2>
        {approvalQueue.map((item) => (
          <div key={item.id} className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%',
                  backgroundColor: getPriorityColor(item.priority).bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {item.type === 'Vendor Invoice' ? 
                  <DollarSign size={16} style={{ color: getPriorityColor(item.priority).color }} /> :
                  item.type === 'HR Approval' ?
                  <UserCheck size={16} style={{ color: getPriorityColor(item.priority).color }} /> :
                  <FileText size={16} style={{ color: getPriorityColor(item.priority).color }} />
                }
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  {item.type} • By {item.submittedBy} • Due: {item.dueDate}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  {item.description}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--primary-blue)' }}>
                    {item.amount}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                      <CheckCircle size={14} />
                      Approve
                    </button>
                    <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '12px' }}>
                      Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Performance */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Team Performance</h2>
        {teamPerformance.map((team, index) => (
          <div key={index} className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontWeight: '600', fontSize: '14px' }}>
                {team.member}
              </div>
              <div style={{ 
                padding: '4px 8px', 
                borderRadius: '6px', 
                fontSize: '11px', 
                fontWeight: '600',
                backgroundColor: team.rating === 'excellent' ? 'var(--light-green)' : '#fef3c7',
                color: team.rating === 'excellent' ? 'var(--primary-green)' : '#d97706'
              }}>
                {team.rating}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', fontSize: '12px', marginBottom: '8px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: '600', color: 'var(--primary-blue)' }}>{team.completed}/{team.tasks}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>Tasks</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: '600', color: parseFloat(team.efficiency) > 90 ? 'var(--primary-green)' : '#f59e0b' }}>
                  {team.efficiency}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>Efficiency</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: '600', color: 'var(--primary-blue)' }}>
                  {Math.round((team.completed / team.tasks) * 100)}%
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>Complete</div>
              </div>
            </div>
            <div style={{ 
              width: '100%', 
              height: '4px', 
              backgroundColor: '#f3f4f6', 
              borderRadius: '2px',
              overflow: 'hidden'
            }}>
              <div style={{ 
                width: `${(team.completed / team.tasks) * 100}%`, 
                height: '100%', 
                backgroundColor: (team.completed / team.tasks) > 0.9 ? 'var(--primary-green)' : '#f59e0b',
                borderRadius: '2px'
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Analytics & Insights */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Analytics & Insights</h2>
        
        {/* Incident Trends */}
        <div className="card mb-16">
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Incident Trends</h3>
          {analytics.incidentTrends.map((trend, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '500' }}>{trend.category}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{trend.change}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--primary-blue)' }}>
                  {trend.count}
                </div>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%',
                  backgroundColor: trend.trend === 'improving' ? 'var(--primary-green)' : 
                                 trend.trend === 'attention' ? '#ef4444' : '#f59e0b'
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Staff Workload */}
        <div className="card">
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Staff Workload Distribution</h3>
          {analytics.staffWorkload.map((staff, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '500' }}>{staff.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{staff.department}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {staff.workload}
                </div>
                <div 
                  style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%',
                    backgroundColor: staff.status === 'high' ? '#ef4444' : 
                                   staff.status === 'normal' ? 'var(--primary-green)' : '#f59e0b'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Status */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Compliance & Audit</h2>
        {complianceItems.map((item, index) => (
          <div key={index} className="card" style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  Due: {item.dueDate}
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
                <div 
                  style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%',
                    backgroundColor: item.risk === 'low' ? 'var(--primary-green)' : 
                                   item.risk === 'medium' ? '#f59e0b' : '#ef4444'
                  }}
                />
              </div>
            </div>
            <div style={{ 
              width: '100%', 
              height: '4px', 
              backgroundColor: '#f3f4f6', 
              borderRadius: '2px',
              overflow: 'hidden'
            }}>
              <div style={{ 
                width: `${item.progress}%`, 
                height: '100%', 
                backgroundColor: item.progress > 80 ? 'var(--primary-green)' : 
                               item.progress > 50 ? '#f59e0b' : '#ef4444',
                borderRadius: '2px'
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Notifications */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Pending Notifications</h2>
        {pendingNotifications.map((notification) => (
          <div key={notification.id} className="card" style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%',
                  backgroundColor: notification.priority === 'high' ? '#ef4444' : 
                                 notification.priority === 'medium' ? '#f59e0b' : 'var(--primary-green)'
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>
                  {notification.title}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {notification.message}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {notification.category === 'financial' && <DollarSign size={14} style={{ color: 'var(--text-secondary)' }} />}
                {notification.category === 'compliance' && <FileText size={14} style={{ color: 'var(--text-secondary)' }} />}
                {notification.category === 'hr' && <Users size={14} style={{ color: 'var(--text-secondary)' }} />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentManagerDashboard