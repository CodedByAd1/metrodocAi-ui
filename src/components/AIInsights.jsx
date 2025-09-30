import { Brain, Users, AlertCircle, Clock, Globe } from 'lucide-react'

const AIInsights = ({ document }) => {
  const crossDepartmentalImpacts = [
    {
      department: 'Operations',
      impact: 'Train service disruption during implementation',
      urgency: 'high',
      timeline: '7 days',
      action: 'Schedule service windows'
    },
    {
      department: 'Rolling Stock',
      impact: 'All 25 trains require system updates',
      urgency: 'high', 
      timeline: '5 days',
      action: 'Coordinate with maintenance schedule'
    },
    {
      department: 'HR',
      impact: '47 train operators need certification',
      urgency: 'medium',
      timeline: '14 days',
      action: 'Arrange training sessions'
    },
    {
      department: 'Communications',
      impact: 'Malayalam safety announcements update',
      urgency: 'medium',
      timeline: '3 days', 
      action: 'Translation and voice recording'
    }
  ]

  const complianceRisks = [
    { risk: 'CMRS audit non-conformity', probability: 'High', deadline: '7 days' },
    { risk: 'MOHUA reporting delay', probability: 'Medium', deadline: '30 days' }
  ]

  const knowledgeConnections = [
    'Similar directive implemented in Delhi Metro (2023)',
    'Related to previous brake system upgrade (Job Card #RS-2024-0156)',
    'Connects to ongoing UNS integration project'
  ]

  return (
    <div className="ai-insights-panel">
      {/* Cross-Departmental Impact */}
      <div className="card mb-16">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Users size={18} style={{ color: 'var(--primary-blue)' }} />
          Cross-Departmental Impact Analysis
        </h3>
        
        {crossDepartmentalImpacts.map((impact, index) => (
          <div key={index} style={{ 
            padding: '12px', 
            borderLeft: `4px solid ${impact.urgency === 'high' ? '#ef4444' : '#f59e0b'}`,
            backgroundColor: impact.urgency === 'high' ? '#fef2f2' : '#fffbeb',
            borderRadius: '6px',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text-primary)' }}>
                {impact.department}
              </div>
              <div style={{ 
                fontSize: '11px', 
                padding: '2px 6px', 
                backgroundColor: impact.urgency === 'high' ? '#ef4444' : '#f59e0b',
                color: 'white',
                borderRadius: '4px'
              }}>
                {impact.timeline}
              </div>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
              {impact.impact}
            </div>
            <div style={{ fontSize: '12px', fontWeight: '500', color: 'var(--primary-blue)' }}>
              → {impact.action}
            </div>
          </div>
        ))}
      </div>

      {/* Compliance Risks */}
      <div className="card mb-16">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={18} style={{ color: '#ef4444' }} />
          Compliance Risk Assessment
        </h3>
        
        {complianceRisks.map((risk, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 12px',
            backgroundColor: '#fef2f2',
            borderRadius: '6px',
            marginBottom: '8px'
          }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
                {risk.risk}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Deadline: {risk.deadline}
              </div>
            </div>
            <div style={{ 
              fontSize: '11px',
              padding: '4px 8px',
              backgroundColor: risk.probability === 'High' ? '#ef4444' : '#f59e0b',
              color: 'white',
              borderRadius: '4px'
            }}>
              {risk.probability}
            </div>
          </div>
        ))}
      </div>

      {/* Knowledge Connections */}
      <div className="card mb-16">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Brain size={18} style={{ color: 'var(--primary-green)' }} />
          Institutional Knowledge Links
        </h3>
        
        {knowledgeConnections.map((connection, index) => (
          <div key={index} style={{ 
            fontSize: '13px',
            padding: '8px 12px',
            backgroundColor: 'var(--light-green)',
            borderRadius: '6px',
            marginBottom: '8px',
            color: 'var(--text-secondary)'
          }}>
            🔗 {connection}
          </div>
        ))}
      </div>

      {/* Language Processing */}
      <div className="card">
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Globe size={18} style={{ color: 'var(--primary-blue)' }} />
          Language Processing Status
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'var(--light-green)', borderRadius: '6px' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-green)' }}>✓</div>
            <div style={{ fontSize: '12px', fontWeight: '600' }}>English</div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Processed</div>
          </div>
          <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fef3c7', borderRadius: '6px' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#d97706' }}>⏳</div>
            <div style={{ fontSize: '12px', fontWeight: '600' }}>Malayalam</div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Translating...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIInsights