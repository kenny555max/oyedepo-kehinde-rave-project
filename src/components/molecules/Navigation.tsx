import React from 'react';
import NavLink from '../atoms/NavLink';

type NavigationProps = {
    links: Array<{
        label: string;
        isActive?: boolean;
        href?: string;
    }>;
};

const Navigation: React.FC<NavigationProps> = ({ links }) => {
    return (
        <nav className="md:flex hidden">
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    label={link.label}
                    isActive={link.isActive}
                    href={link.href}
                />
            ))}
        </nav>
    );
};

export default Navigation;