import {useState} from "react";
import {Card} from "../atoms/CardAtoms/Card.tsx";
import {Button} from "../atoms/ButtonAtoms/Button.tsx";
import { Input } from '../atoms/FormAtoms/Input.tsx';
import {Github, Loader2, Mail} from "lucide-react";
import {GravatarProfile} from "../atoms/GravatarProfile.tsx";
import {GitHubRepositories} from "../atoms/GitHubRepositories.tsx";

export function AuthScreen() {
    const [email, setEmail] = useState('ssss');
    const [submittedEmail, setSubmittedEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = () => {
        if (!validateEmail(email)) {
            setEmailError(true);
            return;
        }

        setEmailError(false);
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setSubmittedEmail(email);
            setLoading(false);
        }, 1000);
    };

    const handleKeyDown = (e: never) => {
        // @ts-ignore
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-bg to-hover-bg flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-2 text-text-primary text-center md:text-4xl">
                    Developer <span className="bg-clip-text text-transparent bg-accent-gradient">Profile</span> Finder
                </h1>
                <p className="text-text-secondary text-center mb-8">
                    Enter your email to retrieve your Gravatar and GitHub repositories
                </p>

                <div className="flex flex-col gap-6">
                    <Card className="flex flex-col md:flex-row p-4 gap-4 items-center">
                        <div className="w-full md:w-3/4">
                            <div className="flex flex-col gap-2">
                                <label className="text-text-primary font-medium">Email Address</label>
                                <div className="flex gap-2">
                                    <Input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        // error={emailError}
                                        onKeyDown={handleKeyDown}
                                    />
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={loading || !email}
                                        className="whitespace-nowrap"
                                    >
                                        {loading ? (
                                            <span className="flex items-center gap-2">
                                                <Loader2 size={18} className="animate-spin" /> Loading
                                              </span>
                                        ) : 'Find Profile'}
                                    </Button>
                                </div>
                                {emailError && <p className="text-negative text-sm">Please enter a valid email address</p>}
                            </div>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <h2 className="text-lg p-4 font-semibold mb-4 text-text-primary flex items-center gap-2">
                                <Mail size={18} /> Gravatar Profile
                            </h2>
                            <GravatarProfile email={submittedEmail} loading={loading} />
                        </Card>

                        <Card>
                            <h2 className="text-lg p-4 font-semibold mb-4 text-text-primary flex items-center gap-2">
                                <Github size={18} /> GitHub Repositories
                            </h2>
                            <GitHubRepositories email={submittedEmail} loading={loading} />
                        </Card>
                    </div>
                </div>

                <p className="text-text-secondary text-center text-sm mt-8">
                    This app uses public APIs to retrieve user data from Gravatar and GitHub. No data is stored.
                </p>
            </div>
        </div>
    );
}