export interface IFetchProps {
    isLoading: boolean; 
    error: string;
    data: IDataProps | {};
}

export interface IDataProps {
    author: string;
    authorSlug: string;
    content: string;
    dateAdded: string;
    dateModified: string;
    length: number;
    tags: string[];
    _id: string;

}