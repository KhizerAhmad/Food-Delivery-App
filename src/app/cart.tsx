import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useCart } from './providers/CartProvider'
import CartListItem from './components/CartListItem'
import Button from './components/Button'

const Cart = () => {
  const { items, total } = useCart()
  return (
    <View style={{ padding: 15 }}>
      <FlatList data={items} renderItem={({ item }) => <CartListItem cartItem={item} />} contentContainerStyle={{ gap: 10 }} />
      {items.length > 0 ? (
        <View >
          <Text style={{marginTop:20,fontSize:20,fontWeight:"500"}}>Total: ${total}</Text>
          <Button text="Checkout" />
        </View>
      ) : null}
    </View>
  )
}

export default Cart
