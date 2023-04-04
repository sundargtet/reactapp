export interface ICardProps {
    quote: IQouteProps
}

export interface IQouteProps {
    author: string;
    authorSlug: string;
    content: string;
    dateAdded: string;
    dateModified: string;
    length: number;
    tags: string[]
    _id: string;
}

export interface IQuoteListProps {
    count?: number;
    lastItemIndex?: number;
    page?: number;
    results?: IQouteProps[];
    totalCount?: number;
    totalPages?: number;
}