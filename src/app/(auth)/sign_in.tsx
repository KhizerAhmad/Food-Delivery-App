import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup';
import Button from '../components/Button';

type initialCreate = {
  email: string,
  password: string
}

const sign_in = () => {
  const { role } = useLocalSearchParams();
  console.log(role)
  const router = useRouter();
  
  const initialValue: initialCreate = {
    email: "",
    password: ""
  }
  
  const productSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be atleast 6 letters").required("Password is required")
  })

  const onSubmit = (values: initialCreate, { resetForm }: FormikHelpers<initialCreate>) => {
    console.log("Logging in as role:", role);
    resetForm();
    
    router.push(`../(${role})`)
  }

  return (
    <Formik initialValues={initialValue} validationSchema={productSchema} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
        return (
          <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input} 
              value={values.email} 
              placeholder='jon@gmail.com' 
              onChangeText={handleChange("email")} 
              onBlur={handleBlur("email")} 
              autoCapitalize="none"
              keyboardType="email-address"
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <Text style={styles.label}>Password</Text>
            <TextInput 
              style={styles.input} 
              value={values.password} 
              placeholder='••••••••' 
              secureTextEntry
              onChangeText={handleChange("password")} 
              onBlur={handleBlur("password")} 
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <Button text={"Sign in"} onPress={handleSubmit as any}/>
            <Text onPress={()=>router.push("/sign_up")} style={styles.textButton}>Create an Account</Text>
          </View>
        );
      }}
    </Formik>
  )
}

export default sign_in

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: "#3b82f6",
    marginVertical: 15,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  label: {
    paddingVertical: 10,
    color: 'grey',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});