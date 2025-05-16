import {useEffect, useState} from "react";
import {ExternalLink, Loader2, Mail} from "lucide-react";
// import md5 from 'md5';

export const GravatarProfile = ({ email, loading }: { email: string; loading: boolean }) => {
    const hash = ''//md5(email.trim().toLowerCase());
    const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=200&d=404`;
    const [avatarExists, setAvatarExists] = useState(false);
    const [avatarLoading, setAvatarLoading] = useState(true);

    useEffect(() => {
        if (!email) return;

        setAvatarLoading(true);

        const img = new Image();
        img.onload = () => {
            setAvatarExists(true);
            setAvatarLoading(false);
        };
        img.onerror = () => {
            setAvatarExists(false);
            setAvatarLoading(false);
        };
        img.src = gravatarUrl;
    }, [email, gravatarUrl]);

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-32">
                <Loader2 className="animate-spin text-accent" size={32} />
            </div>
        );
    }

    if (!email) {
        return (
            <div className="flex flex-col items-center justify-center gap-2 text-text-secondary h-32">
                <Mail size={32} />
                <p>Enter your email to see your profile</p>
            </div>
        );
    }

    if (!avatarExists && !avatarLoading) {
        return (
            <div className="flex flex-col items-center justify-center gap-2 text-text-secondary h-32">
                <div className="w-16 h-16 rounded-full bg-active-bg flex items-center justify-center">
          <span className="text-2xl font-semibold text-text-primary">
            {email.charAt(0).toUpperCase()}
          </span>
                </div>
                <p>No Gravatar found for this email</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-4">
            {avatarLoading ? (
                <div className="w-20 h-20 rounded-full bg-active-bg flex items-center justify-center">
                    <Loader2 className="animate-spin text-accent" size={24} />
                </div>
            ) : (
                <img
                    src={gravatarUrl}
                    alt="Gravatar"
                    className="w-20 h-20 rounded-full border-2 border-accent shadow-lg"
                />
            )}
            <div className="text-center">
                <p className="text-text-primary font-medium text-sm">{email}</p>
                <a
                    href={`https://gravatar.com/${hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xs flex items-center gap-1 justify-center mt-1 hover:text-accent-mid"
                >
                    View on Gravatar <ExternalLink size={12} />
                </a>
            </div>
        </div>
    );
};