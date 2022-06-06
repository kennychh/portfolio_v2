import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

export const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    ...props
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={styles.ctaButton}
    >
    {children}
    </button>
  );
}

const styles = {
  ctaButton: () => (
    {
      backgroundColor: 'var(--container-tertiary)',
    color: 'var(--on-container-tertiary)',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Poppins',
    padding: '12.5px 26px',
    borderRadius: '16px',
    borderWidth: '0px',
    position: 'absolute',
    marginRight: '16px',
    cursor: 'pointer',
    }
  )
}