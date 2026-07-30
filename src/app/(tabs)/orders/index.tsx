import {FlatList, StyleSheet,View} from 'react-native'
import orders from '@/assets/data/orders';
import OrderListItem from '@/app/components/OrderListItem';

const OrdersScreen = () => {
  return (
    <View>
      <FlatList data={orders} 
      renderItem={({item})=><OrderListItem order={item}/>}
      />
    </View>
  )
}

export default OrdersScreen;

const styles=StyleSheet.create({
  container:{
    margin:10
  }
})
