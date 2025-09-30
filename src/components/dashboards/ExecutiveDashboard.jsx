import { Bell, TrendingUp, BarChart3, Search, Globe, Shield, DollarSign, Users, AlertTriangle, CheckCircle, FileText, Calendar, Award, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const ExecutiveDashboard = () => {
  const executiveSummary = {
    networkHealth: { value: '96.7%', trend: '+0.3%', status: 'excellent' },
    compliance: { value: '94.2%', trend: '+1.8%', status: 'good' },
    financials: { value: '₹2.4Cr', trend: '-5.2%', status: 'under-budget' },
    passengerSatisfaction: { value: '4.2/5', trend: '+0.1', status: 'good' }
  }

  const strategicInsights = [
    {
      title: 'Bottleneck Alert: Procurement Process',
      description: 'Average vendor payment approval time increased by 23% this month. Recommended: Delegate routine approvals to department managers.',
      impact: 'Medium',
      action: 'Review delegation policy',
      category: 'process'
    },
    {
      title: 'Cost Overrun Prediction: Kakkanad Extension',
      description: 'AI analysis of contractor invoices suggests 12% budget overrun risk due to environmental compliance delays.',
      impact: 'High',
      action: 'Schedule stakeholder meeting',
      category: 'financial'
    },
    {
      title: 'Maintenance Efficiency Improvement',
      description: 'Predictive maintenance implementation reduced unplanned downtime by 34% across rolling stock fleet.',
      impact: 'Positive',
      action: 'Expand to station equipment',
      category: 'operational'
    }
  ]

  const departmentDrilldown = [
    { 
      department: 'Operations', 
      health: 98, 
      incidents: 3, 
      budget: 82, 
      compliance: 96,
      keyMetric: '99.2% uptime',
      manager: 'Suresh Nair'
    },
    { 
      department: 'Rolling Stock', 
      health: 94, 
      incidents: 5, 
      budget: 76, 
      compliance: 92,
      keyMetric: '97.8% availability',
      manager: 'Ravi Menon'
    },
    { 
      department: 'Engineering', 
      health: 91, 
      incidents: 2, 
      budget: 88, 
      compliance: 94,
      keyMetric: '85% project progress',
      manager: 'Priya Sharma'
    },
    { 
      department: 'Finance', 
      health: 97, 
      incidents: 1, 
      budget: 95, 
      compliance: 98,
      keyMetric: '₹15L cost savings',
      manager: 'Amit Kumar'
    }
  ]

  const complianceAudit = [
    { area: 'CMRS Safety Standards', status: 'compliant', lastAudit: '2025-08-15', nextDue: '2025-11-15', score: 96 },
    { area: 'MOHUA Environmental', status: 'action-required', lastAudit: '2025-07-20', nextDue: '2025-10-20', score: 78 },
    { area: 'Fire Safety Certification', status: 'overdue', lastAudit: '2025-03-10', nextDue: '2025-09-10', score: 45 },
    { area: 'ISO Quality Standards', status: 'compliant', lastAudit: '2025-06-05', nextDue: '2026-06-05', score: 92 }
  ]

  const recentReports = [
    { title: 'Monthly Board Report - September 2025', type: 'Board Document', generated: '2025-09-30', status: 'auto-generated' },
    { title: 'KMRL Quarterly Financial Summary', type: 'Financial Report', generated: '2025-09-28', status: 'ready-for-review' },
    { title: 'Network Performance Analysis', type: 'Operations Report', generated: '2025-09-29', status: 'published' }
  ]

  const riskAlerts = [
    {
      id: 1,
      type: 'Financial',
      title: 'Budget Variance Alert',
      message: 'Operations expenses 8% above quarterly budget',
      severity: 'medium',
      trend: 'increasing'
    },
    {
      id: 2,
      type: 'Compliance',
      title: 'Environmental Clearance Renewal',
      message: 'Phase 2 expansion clearance expires in 45 days',
      severity: 'high',
      trend: 'stable'
    },
    {
      id: 3,
      type: 'Operational',
      title: 'Vendor Performance',
      message: 'Cleaning contractor SLA compliance at 78%',
      severity: 'low',
      trend: 'improving'
    }
  ]

  const publicRelations = [
    {
      id: 1,
      title: 'Media Query: Fare Revision',
      status: 'pending-response',
      outlet: 'Manorama News',
      deadline: 'Today 6 PM',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Social Media Campaign: Green Transport',
      status: 'approved',
      outlet: 'Digital Marketing Team',
      deadline: 'Oct 8',
      priority: 'medium'
    }
  ]

  const getHealthColor = (value) => {
    if (value >= 95) return 'var(--primary-green)'
    if (value >= 85) return '#f59e0b'
    return '#ef4444'
  }

  const getComplianceStatusColor = (status) => {
    switch(status) {
      case 'compliant': return { bg: 'var(--light-green)', color: 'var(--primary-green)' }
      case 'action-required': return { bg: '#fef3c7', color: '#d97706' }
      case 'overdue': return { bg: '#fef2f2', color: '#ef4444' }
      default: return { bg: '#f3f4f6', color: 'var(--text-secondary)' }
    }
  }

  return (
    <div>
      <div className="header">
        <h1>Executive Director</h1>
        <div className="notification-icon">
          <Bell size={20} />
          <span className="notification-badge">8</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Executive Actions</h2>
        <div className="grid grid-2">
          <Link to="/search" className="btn btn-primary">
            <Search size={18} />
            Global Search
          </Link>
          <button className="btn btn-outline">
            <BarChart3 size={18} />
            Analytics Dashboard
          </button>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Network Overview</h2>
        <div className="grid grid-2">
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-green)', marginBottom: '4px' }}>
              {executiveSummary.networkHealth.value}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Network Health
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--primary-green)' }}>
              ↗ {executiveSummary.networkHealth.trend}
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '4px' }}>
              {executiveSummary.compliance.value}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Compliance Score
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--primary-green)' }}>
              ↗ {executiveSummary.compliance.trend}
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-green)', marginBottom: '4px' }}>
              {executiveSummary.financials.value}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Monthly Savings
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--primary-green)' }}>
              ↘ {executiveSummary.financials.trend}
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#f59e0b', marginBottom: '4px' }}>
              {executiveSummary.passengerSatisfaction.value}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Passenger Rating
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--primary-green)' }}>
              ↗ {executiveSummary.passengerSatisfaction.trend}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic AI Insights */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Strategic AI Insights</h2>
        {strategicInsights.map((insight, index) => (
          <div key={index} className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '8px',
                  backgroundColor: insight.impact === 'High' ? '#fef2f2' : 
                                 insight.impact === 'Medium' ? '#fef3c7' : 'var(--light-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '4px'
                }}
              >
                {insight.impact === 'Positive' ? 
                  <TrendingUp size={16} style={{ color: 'var(--primary-green)' }} /> :
                  <AlertTriangle size={16} style={{ color: insight.impact === 'High' ? '#ef4444' : '#f59e0b' }} />
                }
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>
                  {insight.title}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '8px' }}>
                  {insight.description}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div 
                    style={{ 
                      padding: '2px 8px', 
                      borderRadius: '4px', 
                      fontSize: '11px', 
                      fontWeight: '600',
                      backgroundColor: insight.impact === 'High' ? '#fef2f2' : 
                                     insight.impact === 'Medium' ? '#fef3c7' : 'var(--light-green)',
                      color: insight.impact === 'High' ? '#ef4444' : 
                             insight.impact === 'Medium' ? '#d97706' : 'var(--primary-green)'
                    }}
                  >
                    {insight.impact} Impact
                  </div>
                  <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: '11px' }}>
                    {insight.action}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Department Drill-down */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Department Performance</h2>
        {departmentDrilldown.map((dept, index) => (
          <div key={index} className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div>
                <div style={{ fontWeight: '600', fontSize: '14px' }}>
                  {dept.department}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  Manager: {dept.manager}
                </div>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--primary-blue)', fontWeight: '600' }}>
                {dept.keyMetric}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', fontSize: '11px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: '600', color: getHealthColor(dept.health), marginBottom: '2px' }}>
                  {dept.health}%
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>Health</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: '600', color: dept.incidents > 3 ? '#ef4444' : 'var(--primary-green)', marginBottom: '2px' }}>
                  {dept.incidents}
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>Incidents</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: '600', color: getHealthColor(dept.budget), marginBottom: '2px' }}>
                  {dept.budget}%
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>Budget</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: '600', color: getHealthColor(dept.compliance), marginBottom: '2px' }}>
                  {dept.compliance}%
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>Compliance</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Risk Management */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Risk Management</h2>
        {riskAlerts.map((alert) => (
          <div key={alert.id} className="card" style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '8px',
                  backgroundColor: alert.type === 'Financial' ? '#fef3c7' : 
                                 alert.type === 'Compliance' ? '#fef2f2' : 'var(--light-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {alert.type === 'Financial' ? 
                  <DollarSign size={16} style={{ color: '#f59e0b' }} /> :
                  alert.type === 'Compliance' ?
                  <Shield size={16} style={{ color: '#ef4444' }} /> :
                  <Globe size={16} style={{ color: 'var(--primary-blue)' }} />
                }
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <div style={{ fontWeight: '600', fontSize: '14px' }}>
                    {alert.title}
                  </div>
                  <div 
                    style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%',
                      backgroundColor: alert.severity === 'high' ? '#ef4444' : 
                                     alert.severity === 'medium' ? '#f59e0b' : 'var(--primary-green)'
                    }}
                  />
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  {alert.message}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  {alert.type} • {alert.trend}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance & Audit Status */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Compliance & Audit Overview</h2>
        {complianceAudit.map((item, index) => (
          <div key={index} className="card" style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>
                  {item.area}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  Last audit: {item.lastAudit} • Next: {item.nextDue}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary-blue)' }}>
                  {item.score}%
                </div>
                <div 
                  style={{ 
                    padding: '4px 8px', 
                    borderRadius: '6px', 
                    fontSize: '11px', 
                    fontWeight: '600',
                    backgroundColor: getComplianceStatusColor(item.status).bg,
                    color: getComplianceStatusColor(item.status).color
                  }}
                >
                  {item.status.replace('-', ' ').toUpperCase()}
                </div>
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
                width: `${item.score}%`, 
                height: '100%', 
                backgroundColor: item.score > 90 ? 'var(--primary-green)' : 
                               item.score > 70 ? '#f59e0b' : '#ef4444',
                borderRadius: '2px'
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Public Relations */}
      <div className="mb-24">
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Public Relations</h2>
        {publicRelations.map((pr) => (
          <div key={pr.id} className="card" style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>
                  {pr.title}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {pr.outlet} • Deadline: {pr.deadline}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div 
                  style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%',
                    backgroundColor: pr.priority === 'high' ? '#ef4444' : 
                                   pr.priority === 'medium' ? '#f59e0b' : 'var(--primary-green)'
                  }}
                />
                <div 
                  style={{ 
                    padding: '4px 8px', 
                    borderRadius: '6px', 
                    fontSize: '11px', 
                    fontWeight: '600',
                    backgroundColor: pr.status === 'pending-response' ? '#fef2f2' : 'var(--light-green)',
                    color: pr.status === 'pending-response' ? '#ef4444' : 'var(--primary-green)'
                  }}
                >
                  {pr.status.replace('-', ' ')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Automated Reports */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Automated Reports</h2>
        {recentReports.map((report, index) => (
          <Link key={index} to={`/document/${index + 1}`} className="card" style={{ display: 'block', textDecoration: 'none', color: 'inherit', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '2px' }}>
                  {report.title}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {report.type} • Generated: {report.generated}
                </div>
              </div>
              <div 
                style={{ 
                  padding: '4px 8px', 
                  borderRadius: '6px', 
                  fontSize: '11px', 
                  fontWeight: '600',
                  backgroundColor: report.status === 'auto-generated' ? 'var(--light-green)' : 
                                 report.status === 'ready-for-review' ? '#fef3c7' : 'var(--light-blue)',
                  color: report.status === 'auto-generated' ? 'var(--primary-green)' : 
                         report.status === 'ready-for-review' ? '#d97706' : 'var(--primary-blue)'
                }}
              >
                {report.status.replace('-', ' ')}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExecutiveDashboard