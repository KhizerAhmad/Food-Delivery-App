import products from '@/assets/data/products';
import { Link, useLocalSearchParams } from 'expo-router'
import {View,Pressable, Image, StyleSheet,Text} from 'react-native'
import {Stack, useRouter } from "expo-router";
import { PizzaSize } from '@/types';
import { useState } from 'react';
import Button from '@/app/components/Button';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useCart } from '@/app/providers/CartProvider';

const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'
const sizes:PizzaSize[]=["S","M","L","XL"]

const ProductDetails = () => {
    const {id} = useLocalSearchParams();
    const {addItem}=useCart();
    const product=products.find((p)=>String(p.id)===id)
    const router=useRouter();
    const [selectedSize,setselectedSize]=useState<PizzaSize>("M")
    const addtoCart=()=>{
      if (!product) return;
      addItem(product,selectedSize)
      console.warn(`Item added to cart ${product.name}`,selectedSize)
      router.push("/cart")
    }
    
  return (
    <View style={styles.container}>
    <Stack.Screen
        options={{
          title: product?.name,
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
          },
          headerRight: () => (
                    <Link href={`/(admin)/menu/create?id=${id}`} asChild>
                      <Pressable style={{ paddingHorizontal: 10 }}>
                        {({ pressed }) => (
                          <FontAwesome 
                            name="pencil" 
                            size={22} 
                            color="#3b82f6"
                            style={{opacity: pressed ? 0.5 : 1 }}
                          />
                        )}
                      </Pressable>
                    </Link>
                  ),
        }}
      />
        <Image source={{uri:product?.image ?? defaultImage}} style={styles.img} resizeMode='contain'/>
        <Text style={styles.selectSize}>Select Size: </Text>
        <View style={styles.sizes}>
          {sizes.map((size)=>(
            <Pressable onPress={()=>setselectedSize(size)} key={size} style={[styles.size,{backgroundColor:size===selectedSize? "gainsboro":"#F8F9FA"}]}>
              <Text style={[styles.sizeText,{ color: size === selectedSize ? 'black' : 'gray' },]}>{size}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.price}>Price: ${product?.price}</Text>
        <Button text={"Add to Cart"} onPress={addtoCart}/>
      </View>
  )
}

export default ProductDetails

const styles=StyleSheet.create({
  container: {
        backgroundColor: "#F8F9FA",
        padding: 15,
        overflow: 'hidden',
        flex: 1
    },
    img: {
        width: '100%',
        aspectRatio: 1,
    },
    selectSize:{
      fontWeight:"700",
      fontSize:18,
      paddingVertical:20
    },
    sizes:{
      flexDirection:"row",
      justifyContent:"space-around",
    },
    size:{
      width:50,
      aspectRatio:1,
      backgroundColor:"gainsboro",
      borderRadius:25,
      alignItems:"center",
      justifyContent:"center"
    },
    sizeText:{
      fontSize:16,
      fontWeight: '500',
      color: 'black',
    },
    price:{
      fontWeight:"900",
      fontSize:20,
      marginTop:"auto"
    }
})