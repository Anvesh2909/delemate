export interface BlogTextBlock {
    heading?: string;
    paragraph?: string;
}

export interface Blog {
    _id?: string;
    title: string;
    subtitle: string;
    link: string;
    date: string;
    min: number;
    text: BlogTextBlock[];
    createdAt?: string;
    updatedAt?: string;
}