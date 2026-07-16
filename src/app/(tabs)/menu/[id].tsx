import { useLocalSearchParams } from 'expo-router'
import {Text} from 'react-native'


const ProductDetails = () => {
    const {id} = useLocalSearchParams();
  return (
    <Text>Product is : {id}</Text>
  )
}

export default ProductDetails