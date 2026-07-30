import OrderListItem from '@/app/components/OrderListItem';
import orders from '@/assets/data/orders';
import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import OrderItemListItem from '@/app/components/OrderItemListItem';

const OrderDetails= () => {
    const {id}=useLocalSearchParams();
    const foundOrder=orders.find((item)=>item.id===Number(id))

    if (!foundOrder) {
      return <Text>Order not found!</Text>;
    }

  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:`Order #${id}`,headerTitleAlign:"center",headerTitleStyle:{
            fontSize:24,
            fontWeight:"bold"
        }}}/>
      <OrderListItem order={foundOrder}/>
      <FlatList
        data={foundOrder.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  )
}

export default OrderDetails

const styles=StyleSheet.create({
    container:{
        padding:10,
        gap:10
    }
})