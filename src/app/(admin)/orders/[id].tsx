import OrderListItem from '@/app/components/OrderListItem';
import orders from '@/assets/data/orders';
import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import OrderItemListItem from '@/app/components/OrderItemListItem';
import { OrderStatusList } from '@/types';

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
      <Text style={{fontWeight:"bold", fontSize:20}}>Status</Text>
      <View style={{ flexDirection: 'row', gap: 5 }}>
    {OrderStatusList.map((status) => (
      <Pressable
        key={status}
        onPress={() => console.warn('Update status')}
        style={{
          borderColor: "#498dfa",
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          marginVertical: 10,
          backgroundColor:
            foundOrder.status === status
              ? "#3b82f6"
              : 'transparent',
        }}
      >
        <Text
          style={{
            color:
              foundOrder.status === status ? 'white' : "#3b82f6",
          }}
        >
          {status}
        </Text>
      </Pressable>
    ))}
  </View>
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