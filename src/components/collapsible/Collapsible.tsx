import { useState, type ReactNode } from 'react';
import IconExpandMore from '../../assets/images/icons/expand_more.svg';
import './Collapsible.scss';

export type CollapsibleProps = {
  title?: string;
  children: ReactNode;
};

function Collapsible({ title, children }: CollapsibleProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`Collapsible ${isCollapsed ? 'collapsed' : ''}`.trim()}>
      <div className="head" onClick={handleToggle}>
        <div className="title">{title}</div>
        <img src={IconExpandMore} alt="toggle" className="toggle" />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Collapsible;
