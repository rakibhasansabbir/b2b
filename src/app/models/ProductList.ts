export interface ProductList {
    name: string;
    discount: number;
    discountPrice: number;
    rating: number;
    href: Href;
}

export interface Href {
    link: string;
}