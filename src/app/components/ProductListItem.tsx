import { Text, Image, View, StyleSheet,Pressable } from 'react-native'
import { Product } from '@/types'
import { Link } from 'expo-router';

type ProductListItemProps = {
    product: Product;
}
const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <Link href={`../(tabs)/menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image source={{ uri: product.image ?? defaultImage }} style={styles.img} resizeMode='contain' />
                <Text style={styles.name}>{product.name} </Text>
                <Text style={styles.price}>{product.price}</Text>
            </Pressable>
        </Link>
    )
}

export default ProductListItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        overflow: 'hidden',
        flex: 1,
        maxWidth: "50%"
    },
    img: {
        width: '100%',
        aspectRatio: 1,
    },
    name: {
        fontWeight: '600',
        fontSize: 18,
        marginVertical: 10
    },
    price: {
        color: "grey",
        fontWeight: 'bold',
        marginTop: 'auto',
    },
});