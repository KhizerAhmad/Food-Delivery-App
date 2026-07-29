import { View, Text, StyleSheet, Image, TextInput,Alert } from 'react-native';
import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import Button from '@/app/components/Button';
import products from '@/assets/data/products';

const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'
type InitialCreate = {
    image: string | null;
    name: string;
    price: string;
};

const productSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    price: Yup.number()
        .typeError('Price must be a valid number')
        .positive('Price must be greater than 0')
        .required('Price is required'),
});

const Create = () => {
    const router = useRouter();

    const initialValue: InitialCreate = {
        image: null,
        name: '',
        price: '',
    };

    const pickImage = async (setFieldValue: (field: string, value: any) => void) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setFieldValue('image', result.assets[0].uri);
        }
    };

    const onSubmit = (
        values: InitialCreate,
        { resetForm }: FormikHelpers<InitialCreate>
    ) => {
        if (isUpdating) {
            console.warn('Updating product ID:', id, values);
            // TODO: Call update API / state function here
        } else {
            console.warn('Creating product:', values);
            // TODO: Call create API / state function here
        }

        resetForm();
        router.back();
    };

    const { id } = useLocalSearchParams();
    const isUpdating = !!id;

    const onDelete=()=>{
        console.warn("Delete!!!")
    }
    const confirmDelete=()=>{
        Alert.alert("Confirm","Are you sure you wanna delete this product",[
            {
                text:"Delete",
                style:"destructive",
                onPress:()=>onDelete(),
            },
            {
                text:"Cancel"
            }
        ])
    }
    const product=products.find((p)=>p.id===Number(id))

    return (
        <Formik
            initialValues={initialValue}
            enableReinitialize
            validationSchema={productSchema}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
                <View style={styles.container}>
                    <Stack.Screen options={{ title: isUpdating ? "Update Product" : "Create Product" }} />
                    <Image
                        source={{ uri: values.image || (isUpdating ? product?.image : defaultImage) }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text
                        onPress={() => pickImage(setFieldValue)}
                        style={styles.textButton}
                    >
                        Select Image
                    </Text>

                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        placeholder={isUpdating?product?.name:"Margarita..."}
                        style={styles.input}
                        value={values.name}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                    />
                    {touched.name && errors.name && (
                        <Text style={styles.errorText}>{errors.name}</Text>
                    )}

                    <Text style={styles.label}>Price ($)</Text>
                    <TextInput
                        placeholder={isUpdating?String(product?.price):"9.99"}
                        style={styles.input}
                        keyboardType="decimal-pad"
                        value={values.price}
                        onChangeText={handleChange('price')}
                        onBlur={handleBlur('price')}
                    />
                    {touched.price && errors.price && (
                        <Text style={styles.errorText}>{errors.price}</Text>
                    )}

                    <Button text={isUpdating ? "Update" : "Create"} onPress={handleSubmit as any} />
                    {isUpdating && <Text style={styles.textButton} onPress={confirmDelete}>Delete</Text>}
                </View>
            )}
        </Formik>
    );
};

export default Create;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '50%',
        aspectRatio: 1,
        alignSelf: 'center',
    },
    textButton: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: "#3b82f6",
        marginVertical: 10,
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