
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolsButtonProps {
  icon: LucideIcon;
  label: string;
  description: string;
  onClick: () => void;
}

const ToolsButton = ({
  icon: Icon,
  label,
  description,
  onClick,
}: ToolsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        relative overflow-hidden rounded-xl p-4
        bg-muted/20 hover:bg-muted/30 active:bg-muted/40
        border border-white/10 transition-all duration-300
        flex flex-col items-center text-center
        group min-h-[120px]
      "
    >
      <div className="mb-2 p-2 bg-sos-green-dark/20 rounded-full">
        <Icon className="w-6 h-6 text-sos-green" />
      </div>
      
      <h3 className="font-medium text-base">{label}</h3>
      <p className="text-xs text-white/70 mt-1">{description}</p>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-sos-green/10 to-transparent transition-opacity duration-300" />
    </button>
  );
};

export default ToolsButton;
