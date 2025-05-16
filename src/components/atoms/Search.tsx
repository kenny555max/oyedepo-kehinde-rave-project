import {Search, X} from "lucide-react";
import type {SearchProps} from "../../types.ts";

export const SearchComp = ({ searchQuery, setSearchQuery }: SearchProps) => {
    return(
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                className="w-full bg-hover-bg border border-primary-border rounded-md px-8 py-2 text-text-primary text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-text-secondary" />
            {searchQuery && (
                <button
                    className="absolute right-2 top-2.5"
                    onClick={() => setSearchQuery('')}
                >
                    <X className="w-4 h-4 text-text-secondary" />
                </button>
            )}
        </div>
    );
}