import { Home, Camera, Search, User } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const BottomNavigation = () => {
  const location = useLocation()
  
  const navItems = [
    { 
      path: '/', 
      icon: Home, 
      label: 'Dashboard',
      isActive: location.pathname === '/'
    },
    { 
      path: '/capture', 
      icon: Camera, 
      label: 'Capture',
      isActive: location.pathname === '/capture'
    },
    { 
      path: '/search', 
      icon: Search, 
      label: 'Search',
      isActive: location.pathname === '/search'
    },
    { 
      path: '/profile', 
      icon: User, 
      label: 'Profile',
      isActive: location.pathname === '/profile'
    }
  ]

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '414px',
        backgroundColor: 'var(--white)',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '12px 0',
        boxShadow: '0 -2px 10px var(--shadow)',
        zIndex: 1000
      }}
    >
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none',
            color: item.isActive ? 'var(--primary-blue)' : 'var(--text-secondary)',
            transition: 'color 0.2s',
            padding: '8px 16px',
            borderRadius: '8px',
            backgroundColor: item.isActive ? 'var(--light-blue)' : 'transparent'
          }}
        >
          <item.icon 
            size={20} 
            style={{ 
              color: item.isActive ? 'var(--primary-blue)' : 'var(--text-secondary)'
            }} 
          />
          <span 
            style={{ 
              fontSize: '11px', 
              fontWeight: item.isActive ? '600' : '500',
              color: item.isActive ? 'var(--primary-blue)' : 'var(--text-secondary)'
            }}
          >
            {item.label}
          </span>
          {item.isActive && (
            <div 
              style={{
                position: 'absolute',
                bottom: '-12px',
                width: '32px',
                height: '3px',
                backgroundColor: 'var(--primary-blue)',
                borderRadius: '2px'
              }}
            />
          )}
        </Link>
      ))}
    </div>
  )
}

export default BottomNavigation