import React from 'react';

type NavLinkProps = {
    label: string;
    isActive?: boolean;
    href?: string;
};

const NavLink: React.FC<NavLinkProps> = ({ label, isActive = false, href = '#' }) => {
    return (
        <a
            href={href}
            className={`lg:px-4 px-3 py-2 text-[14px] font-[500] leading-[16px] text-sm ${isActive
                ? 'text-text-primary border-b-2 border-accent'
                : 'text-text-secondary hover:text-text-primary'}`}
        >
            {label}
        </a>
    );
};

export default NavLink;