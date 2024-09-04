import { NavLink } from 'react-router-dom';

interface NavTabProps {
    to: string;
    isActive: boolean;
    label: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
  
  const NavTab: React.FC<NavTabProps> = ({ to, isActive, label, Icon }) => {
  return (
    <NavLink
      to={to}
      className={`relative flex gap-x-1 items-center ${
        isActive ? "text-blue-500 font-bold" : "text-gray-500"
      }`}
    >
      <Icon fill={isActive ? "#366EFF" : "black"} color={isActive ? "#5A9DFF" : "gray"} />
      {label}
      {isActive && (
        <span
          className="absolute bottom-[-10px] left-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform -translate-x-1/2"
        ></span>
      )}
    </NavLink>
  );
};

export default NavTab;
