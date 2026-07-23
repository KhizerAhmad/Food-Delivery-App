import { Children, createContext, PropsWithChildren, useContext, useState } from "react";
import Cart from "../cart";
import { CartItem, Product } from "@/types";
import { randomUUID } from "expo-crypto"

type cartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem["size"]) => void
    updateQuantity: (itemId: string, amount: -1 | 1) => void
    total:number
}

const CartContext = createContext<cartType>({
    items: [],
    addItem: () => { },
    updateQuantity: () => { },
    total:0
});

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([])

    const addItem = (product: Product, size: CartItem["size"]) => {
        const existingItem=items.find((item)=>item.product_id===product.id && item.size===size)
        if (existingItem){
            updateQuantity(existingItem.id,1)
            return
        }
        const newObj = {
            id: randomUUID(),
            product: product,
            product_id: product.id,
            size: size,
            quantity: 1
        }
        setItems((prev) => [...prev, newObj])
    }

    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        setItems((prev) =>
            prev
                .map((item) => {
                    if (item.id === itemId) {
                        return {
                            ...item,
                            quantity:item.quantity+amount
                        }
                    }
                    return item
                })
                .filter((item) => item.quantity > 0)
        );
    };

    const total=items.reduce((sum,i)=>sum+=i.product.price*i.quantity,0)

    return (
        <CartContext.Provider value={{ items, addItem, updateQuantity ,total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);