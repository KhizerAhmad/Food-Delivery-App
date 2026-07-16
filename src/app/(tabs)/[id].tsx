import { useLocalSearchParams } from 'expo-router'
import {Text} from 'react-native'

const {id} = useLocalSearchParams();
const ProductDetails = () => {
  return (
    <Text>Product is : {id}</Text>
  )
}

export default ProductDetails