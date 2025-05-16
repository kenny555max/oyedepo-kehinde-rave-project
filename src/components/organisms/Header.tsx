import React from 'react';
import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import UserProfile from '../molecules/UserProfile';
import {Separator} from "../atoms/Separator.tsx";

const Header: React.FC = () => {
    const navLinks = [
        { label: 'Exchange', isActive: true, href: '/exchange' },
        { label: 'Wallets', isActive: false, href: '/wallets' },
        { label: 'Reqqu Hub', isActive: false, href: '/reqqu-hub' },
    ];

    return (
        <header className="bg-primary-bg  border-b border-primary-border">
            <div className="container">
                <div className="flex items-center bg-primary-bg  border-b border-primary-border justify-between px-4 py-3">
                    <div className="flex items-center gap-8">
                        <Logo />
                        <Separator className={"bg-muted-color"} orientation="vertical" />
                        <Navigation links={navLinks} />
                    </div>
                    <UserProfile username="Olakunle Temmy" avatar="" />
                </div>
            </div>
        </header>
    );
};

export default Header;