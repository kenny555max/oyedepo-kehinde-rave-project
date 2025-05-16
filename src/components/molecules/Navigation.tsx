import React from 'react';
import NavLink from '../atoms/NavLink';

type NavigationProps = {
    links: Array<{
        label: string;
        isActive?: boolean;
        href?: string;
    }>;
    showMenu: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ links, showMenu }) => {
    return (
        <>
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

            {/* mobile nav   */}
            {showMenu && (
                <nav className="flex flex-col z-10 md:hidden gap-2 bg-primary-border absolute left-0 w-full top-[75px]">
                    {[...links, { label: 'Logout', isActive: false, href: '/logout' }].map((link, index) => (
                        <NavLink
                            key={index}
                            label={link.label}
                            isActive={link.isActive}
                            href={link.href}
                        />
                    ))}
                </nav>
            )}
        </>
    );
};

export default Navigation;