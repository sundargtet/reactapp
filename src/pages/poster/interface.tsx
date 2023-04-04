export interface IQouteProps {
    message: string | undefined;
    author: string | undefined;
}

export interface IQuoteStateProps {
    author: string;
    authorSlug: string;
    content: string;
    dateAdded: string;
    dateModified: string;
    length: number;
    tags: string[]
    _id: string;
}