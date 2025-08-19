export const GlassCard = ({ children, className = "", hover = false }) => (
  <div className={`glass-card rounded-2xl ${hover ? 'hover-lift' : ''} ${className}`}>
    {children}
  </div>
);
