import { Search, Filter, ArrowLeft, FileText, Calendar, Building, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SearchInterface = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    documentType: 'all',
    department: 'all',
    dateRange: 'all'
  })

  const searchResults = [
    {
      id: 1,
      title: 'CMRS Audit Compliance Report - Q3 2024',
      department: 'Safety & Compliance',
      type: 'CMRS Report',
      date: '2024-09-28',
      status: 'Translation Required',
      snippet: 'Commissioner review findings for Aluva-Maharajas corridor operations. Critical non-conformities in emergency protocols requiring immediate Malayalam implementation...'
    },
    {
      id: 2,
      title: 'Rolling Stock Maintenance - Train 301 Bogie Inspection',
      department: 'Rolling Stock',
      type: 'Maximo Job Card',
      date: '2024-09-27',
      status: 'Parts Procurement',
      snippet: 'Scheduled maintenance reveals bearing wear beyond tolerance. Siemens spare parts order initiated. Service availability impact: 2-3 days...'
    },
    {
      id: 3,
      title: 'MOHUA Environmental Clearance - Kakkanad Extension',
      department: 'Engineering',
      type: 'Regulatory Document',
      date: '2024-09-26',
      status: 'Board Review',
      snippet: 'Ministry approval for Phase 2 extension with environmental conditions. Impact on construction timeline and contractor agreements...'
    }
  ]

  const quickSuggestions = [
    'CMRS compliance',
    'maximo job cards',
    'vendor payments',
    'safety bulletins',
    'malayalam translation',
    'MOHUA directives'
  ]

  const documentTypes = ['All Types', 'CMRS Circulars', 'Maximo Job Cards', 'Vendor Invoices', 'MOHUA Directives', 'Safety Bulletins', 'Engineering Drawings']
  const departments = ['All Departments', 'Operations', 'Rolling Stock', 'Engineering', 'Safety & Compliance', 'Procurement', 'Finance', 'HR']
  const dateRanges = ['All Time', 'Today', 'This Week', 'This Month', 'Last 3 Months', 'This Year']

  return (
    <div className="screen">
      <div className="header">
        <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
          <ArrowLeft size={24} />
        </Link>
        <h1>Search Documents</h1>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className={`notification-icon ${showFilters ? 'active' : ''}`}
        >
          <Filter size={20} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-16" style={{ position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <Search 
            size={20} 
            style={{ 
              position: 'absolute', 
              left: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: 'var(--text-secondary)' 
            }} 
          />
          <input
            type="text"
            placeholder="Search documents, keywords, or content..."
            className="input"
            style={{ paddingLeft: '44px' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="card mb-16">
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
            Filters
          </h3>
          
          <div className="mb-16">
            <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
              <Tag size={14} style={{ display: 'inline', marginRight: '4px' }} />
              Document Type
            </label>
            <select 
              className="input"
              value={filters.documentType}
              onChange={(e) => setFilters({...filters, documentType: e.target.value})}
            >
              {documentTypes.map((type, index) => (
                <option key={index} value={type.toLowerCase().replace(' ', '_')}>{type}</option>
              ))}
            </select>
          </div>

          <div className="mb-16">
            <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
              <Building size={14} style={{ display: 'inline', marginRight: '4px' }} />
              Department
            </label>
            <select 
              className="input"
              value={filters.department}
              onChange={(e) => setFilters({...filters, department: e.target.value})}
            >
              {departments.map((dept, index) => (
                <option key={index} value={dept.toLowerCase().replace(' ', '_')}>{dept}</option>
              ))}
            </select>
          </div>

          <div className="mb-16">
            <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
              <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
              Date Range
            </label>
            <select 
              className="input"
              value={filters.dateRange}
              onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
            >
              {dateRanges.map((range, index) => (
                <option key={index} value={range.toLowerCase().replace(' ', '_')}>{range}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-2">
            <button className="btn btn-outline">Clear Filters</button>
            <button className="btn btn-primary">Apply</button>
          </div>
        </div>
      )}

      {/* Quick Suggestions */}
      {!searchQuery && (
        <div className="mb-24">
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-secondary)' }}>
            Quick Suggestions
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(suggestion)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  background: 'var(--white)',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--light-blue)'
                  e.target.style.borderColor = 'var(--primary-blue)'
                  e.target.style.color = 'var(--primary-blue)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'var(--white)'
                  e.target.style.borderColor = 'var(--border)'
                  e.target.style.color = 'var(--text-secondary)'
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchQuery && (
        <div>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Found {searchResults.length} results for "{searchQuery}"
          </div>
          
          {searchResults.map((result) => (
            <Link 
              key={result.id} 
              to={`/document/${result.id}`} 
              className="card" 
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: 'var(--light-blue)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '4px'
                  }}
                >
                  <FileText size={20} style={{ color: 'var(--primary-blue)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>
                    {result.title}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    {result.department} • {result.type} • {result.date}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {result.snippet}
                  </p>
                  <div 
                    style={{ 
                      marginTop: '8px',
                      padding: '2px 8px', 
                      borderRadius: '4px', 
                      fontSize: '11px', 
                      fontWeight: '600',
                      backgroundColor: result.status === 'Approved' ? 'var(--light-green)' : 'var(--light-blue)',
                      color: result.status === 'Approved' ? 'var(--primary-green)' : 'var(--primary-blue)',
                      display: 'inline-block'
                    }}
                  >
                    {result.status}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchInterface