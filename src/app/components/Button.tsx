import { Pressable, Text,StyleSheet } from "react-native";

export type ButtonProps={
    text:String
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button=({text,...pressableProps}:ButtonProps)=>{
    return (
    <Pressable {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
)}

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3b82f6",
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});