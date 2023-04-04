export interface IProps {
    totalPages: number | undefined;
    page: number | undefined;
    handlePagination: (item: number) => void;
}

export interface IStyleProps {
    active: any;
}