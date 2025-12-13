export interface Feature {
    title: string;
    description: string;
    icon: string;
}

export interface ChangelogItem {
    version: string;
    date: string;
    changes: string[];
    type: 'major' | 'minor' | 'patch';
}

export interface TechItem {
    name: string;
    icon: string;
}