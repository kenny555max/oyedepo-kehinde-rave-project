import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import {IconButton} from "../atoms/ButtonAtoms/IconButton.tsx";
import {Button} from "../atoms/ButtonAtoms/Button.tsx";

type UserProfileProps = {
    username: string;
    avatar?: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ username, avatar }) => {
    return (
        <div className="flex items-center sm:gap-2">
            <Button className="sm:flex hidden justify-center bg-click-bg h-[48px] w-[181px] rounded-[8px] items-center gap-2 ml-2 text-text-primary">
                <div className="w-8 h-8 rounded-full bg-accent-pink flex items-center justify-center text-sm font-bold">
                    {avatar ? <img src={avatar} alt={username} className="w-full h-full rounded-full" /> : username[0]}
                </div>
                <div className="text-body-sm">{username.length > 11 ? username.slice(0, 11) + '...' : username}</div>
                <IoIosArrowForward />
            </Button>
            <IconButton
                icon={
                    <div className="w-8 h-8 rounded-full bg-accent-pink flex items-center justify-center text-sm font-bold">
                        {avatar ? <img src={avatar} alt={username} className="w-full h-full rounded-full" /> : username[0]}
                    </div>
                }
                className={"block sm:hidden"}
                onClick={() => console.log('called')}
                variant="default"
            />
            <IconButton
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#A7B1BC"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7467 18.1766C14.4854 16.6992 15 14.5183 15 12C15 9.48174 14.4854 7.30077 13.7467 5.82336C12.9482 4.22632 12.2151 4 12 4C11.7849 4 11.0518 4.22632 10.2533 5.82336C9.51462 7.30077 9 9.48174 9 12C9 14.5183 9.51462 16.6992 10.2533 18.1766C11.0518 19.7737 11.7849 20 12 20C12.2151 20 12.9482 19.7737 13.7467 18.1766ZM12 22C14.7614 22 17 17.5228 17 12C17 6.47715 14.7614 2 12 2C9.23858 2 7 6.47715 7 12C7 17.5228 9.23858 22 12 22Z" fill="#A7B1BC"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9506 13C21.9833 12.6711 22 12.3375 22 12C22 11.6625 21.9833 11.3289 21.9506 11H2.04938C2.01672 11.3289 2 11.6625 2 12C2 12.3375 2.01672 12.6711 2.04938 13H21.9506Z" fill="#A7B1BC"/>
                    </svg>
                }
                onClick={() => console.log('called')}
                variant="default"
            />
            <IconButton
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0292 15.0007C11.5811 14.9799 12.0454 15.4104 12.0662 15.9623C12.1132 17.2065 12.1791 18.1145 12.244 18.7656C12.3079 19.4068 12.695 19.7926 13.2345 19.8586C13.8708 19.9363 14.7683 20 16 20C17.2317 20 18.1292 19.9363 18.7655 19.8586C19.3048 19.7926 19.6921 19.4067 19.7559 18.7653C19.8763 17.5568 20 15.4688 20 12C20 8.53118 19.8763 6.44321 19.7559 5.23468C19.6921 4.59333 19.3048 4.20736 18.7655 4.14144C18.1292 4.06366 17.2317 4 16 4C14.7683 4 13.8708 4.06365 13.2345 4.14143C12.695 4.20739 12.3079 4.59318 12.244 5.23437C12.1791 5.88545 12.1132 6.79354 12.0662 8.03772C12.0454 8.58961 11.5811 9.02012 11.0292 8.99929C10.4773 8.97845 10.0468 8.51417 10.0676 7.96228C10.1158 6.68524 10.1842 5.73543 10.2538 5.03611C10.4003 3.56595 11.4253 2.3477 12.9919 2.15621C13.7211 2.06707 14.7008 2 16 2C17.2992 2 18.2789 2.06707 19.0082 2.15622C20.5748 2.34774 21.5997 3.56655 21.7461 5.03643C21.875 6.33068 22 8.48847 22 12C22 15.5115 21.875 17.6693 21.7461 18.9636C21.5997 20.4334 20.5748 21.6523 19.0082 21.8438C18.2789 21.9329 17.2992 22 16 22C14.7008 22 13.7211 21.9329 12.9919 21.8438C11.4253 21.6523 10.4003 20.4341 10.2538 18.9639C10.1842 18.2646 10.1158 17.3148 10.0676 16.0377C10.0468 15.4858 10.4773 15.0215 11.0292 15.0007Z" fill="#A7B1BC"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20711 14.7929C7.59763 15.1834 7.59763 15.8166 7.20711 16.2071C6.81658 16.5976 6.18342 16.5976 5.79289 16.2071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L5.79289 7.79289C6.18342 7.40237 6.81658 7.40237 7.20711 7.79289C7.59763 8.18342 7.59763 8.81658 7.20711 9.20711L5.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13L5.41421 13L7.20711 14.7929Z" fill="#A7B1BC"/>
                    </svg>
                }
                className={"sm:block hidden"}
                onClick={() => console.log('called')}
                variant="default"
            />
            <IconButton
                icon={
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80005 7.9999C4.80005 7.11625 5.51639 6.3999 6.40005 6.3999H25.6C26.4837 6.3999 27.2001 7.11625 27.2001 7.9999C27.2001 8.88356 26.4837 9.5999 25.6 9.5999H6.40005C5.51639 9.5999 4.80005 8.88356 4.80005 7.9999Z" fill="#8D98AF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80005 15.9999C4.80005 15.1162 5.51639 14.3999 6.40005 14.3999H16C16.8837 14.3999 17.6 15.1162 17.6 15.9999C17.6 16.8836 16.8837 17.5999 16 17.5999H6.40005C5.51639 17.5999 4.80005 16.8836 4.80005 15.9999Z" fill="#8D98AF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80005 23.9999C4.80005 23.1162 5.51639 22.3999 6.40005 22.3999H25.6C26.4837 22.3999 27.2001 23.1162 27.2001 23.9999C27.2001 24.8836 26.4837 25.5999 25.6 25.5999H6.40005C5.51639 25.5999 4.80005 24.8836 4.80005 23.9999Z" fill="#8D98AF"/>
                    </svg>
                }
                className={"block sm:hidden"}
                onClick={() => console.log('called')}
                variant="default"
            />
        </div>
    );
};

export default UserProfile;