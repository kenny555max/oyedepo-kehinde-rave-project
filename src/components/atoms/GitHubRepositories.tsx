import { useState, useEffect, type FC } from 'react';
import { Github, ExternalLink, Loader2 } from 'lucide-react';

interface GitHubRepositoriesProps {
    email: string;
    loading: boolean;
}

interface Repository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    owner: {
        login: string;
    };
}

export const GitHubRepositories: FC<GitHubRepositoriesProps> = ({ email, loading }) => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [repoLoading, setRepoLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (!email) {
            setRepos([]);
            return;
        }

        const fetchGitHubRepos = async () => {
            try {
                setRepoLoading(true);
                setError(false);

                // First find the GitHub user by email
                const userResponse = await fetch(`https://api.github.com/search/users?q=${email}`);
                const userData = await userResponse.json();

                if (userData.items && userData.items.length > 0) {
                    // Get the first user's repos
                    const username = userData.items[0].login;
                    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
                    const reposData = await reposResponse.json();

                    if (Array.isArray(reposData)) {
                        setRepos(reposData as Repository[]);
                    }
                } else {
                    setRepos([]);
                }
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                setError(true);
            } finally {
                setRepoLoading(false);
            }
        };

        fetchGitHubRepos();
    }, [email]);

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
                <Github size={32} />
                <p>Enter your email to see your repositories</p>
            </div>
        );
    }

    if (repoLoading) {
        return (
            <div className="flex items-center justify-center w-full h-32">
                <Loader2 className="animate-spin text-accent" size={24} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center gap-2 text-negative h-32">
                <p>Error fetching repositories</p>
                <p className="text-xs text-text-secondary">GitHub API rate limit may be exceeded</p>
            </div>
        );
    }

    if (repos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center gap-2 text-text-secondary h-32">
                <Github size={24} />
                <p>No repositories found</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h3 className="text-text-primary font-medium flex items-center gap-2">
                <Github size={16} /> GitHub Repositories
            </h3>
            <ul className="space-y-2">
                {repos.map(repo => (
                    <li key={repo.id} className="rounded-lg border border-secondary-border p-3 hover:border-accent transition-colors">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between items-center"
                        >
                            <div>
                                <h4 className="text-text-primary font-medium">{repo.name}</h4>
                                <p className="text-text-secondary text-sm truncate max-w-xs">
                                    {repo.description || 'No description'}
                                </p>
                            </div>
                            <ExternalLink size={16} className="text-text-secondary" />
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center">
                <a
                    href={`https://github.com/${repos[0]?.owner?.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm flex items-center gap-1 hover:text-accent-mid"
                >
                    View all repositories <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
};