import Stack from "@/utils/stack";

export interface ProductProps {
  title: string;
  thumbnail: string;
  id: number;
  price: number;
  category: string;
  brand: string;
  rating: number;
}

export interface CartItemProps {
  product: ProductProps;
  quantity: number;
}

export interface CartState {
  items: CartItemProps[];
}

export interface WishlistState {
  items: ProductProps[];
}

export interface AuthState {
  user: any;
  loading: boolean;
}

export interface SearchState {
  items: ProductProps[];
  loading: boolean;
  queries: string[];
  show: boolean;
}

export interface NavState {
  items: string[];
}

export interface NavLinkProps {
  name: string;
  href?: string;
  subLinks?: NavLinkProps;
}