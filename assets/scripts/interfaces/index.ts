export interface Book {
    id: number,
    created: Date,
    title: string,
    price: number,
    authors: Author[],
    tags: Tag[]
}

export interface WorkResponse {
    count: number,
    next: string,
    previous: string,
    results: Book[]
}

export interface Author {
    id: number,
    created: Date,
    name: string,
    surname: string
}

export interface Tag {
    id: number,
    name: string,
    color: string
}