import {FlatList, StyleSheet,View} from 'react-native'
import orders from '@/assets/data/orders';
import OrderListItem from '@/app/components/OrderListItem';

const OrdersScreen = () => {
  return (
    <View>
      <FlatList data={orders} 
      renderItem={({item})=><OrderListItem order={item}/>}
      contentContainerStyle={{gap:10, padding:10}}/>
    </View>
  )
}

export default OrdersScreen;

