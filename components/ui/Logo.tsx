const Logo = () => {
  return (
    <svg 
        className="w-8 h-8 transition-transform duration-300 hover:scale-110" 
        viewBox="0 0 60 60"
        >
        <path d="M15 15 L45 15 L45 20 L20 20 L20 45 L15 45 Z" fill="#4b5563"/>
        <path d="M25 25 L45 25 L45 30 L30 30 L30 45 L25 45 Z" fill="#dc2626"/>
        <path d="M35 35 L45 35 L45 45 L35 45 Z" fill="#4b5563"/>
    </svg>
  )
}

export default Logo
