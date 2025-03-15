
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SOSButtonProps {
  icon: LucideIcon;
  secondaryIcon?: LucideIcon;
  label: string;
  onClick: () => void;
  size?: 'lg' | 'md';
  type?: 'primary' | 'secondary';
}

const SOSButton = ({
  icon: Icon,
  secondaryIcon: SecondaryIcon,
  label,
  onClick,
  size = 'lg',
  type = 'primary',
}: SOSButtonProps) => {
  const sizeClasses = {
    lg: 'w-28 h-28 text-lg',
    md: 'w-20 h-20 text-sm'
  };
  
  const typeClasses = {
    primary: 'bg-red-gradient',
    secondary: 'bg-green-gradient'
  };
  
  return (
    <button
      onClick={onClick}
      className={`
        sos-button flex flex-col items-center justify-center 
        ${sizeClasses[size]} ${typeClasses[type]}
        relative overflow-hidden group
      `}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 group-active:bg-black/20 transition-colors duration-200" />
      
      <div className="flex items-center justify-center">
        <Icon className="w-8 h-8" />
        {SecondaryIcon && <SecondaryIcon className="w-8 h-8 ml-1" />}
      </div>
      
      <span className="mt-2 font-medium text-shadow">{label}</span>
      
      <div className="absolute -bottom-10 left-0 right-0 h-14 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:-bottom-7 transition-all duration-300" />
    </button>
  );
};

export default SOSButton;
