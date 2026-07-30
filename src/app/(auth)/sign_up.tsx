import { useLocalSearchParams, useRouter } from 'expo-router'
import { Formik, FormikHelpers } from 'formik'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import * as Yup from 'yup'
import Button from '../components/Button'

type initialCreate = {
    fullname: string,
    email: string,
    password: string
    confirmPassword: string
}

const sign_up = () => {
    const { role } = useLocalSearchParams();
    const router = useRouter();
    const initialValue: initialCreate = {
        email: "",
        password: "",
        fullname: "",
        confirmPassword: ""
    }
    const productSchema = Yup.object({
        fullname: Yup.string().required("Full name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be atleast 6 letters").required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Please confirm your password'),
    });

const onSubmit = (values: initialCreate, { resetForm }: FormikHelpers<initialCreate>) => {
    console.log("Logging in as role:", role);
    resetForm();

    router.push(`/sign_in?role=${role}`)
}
return (
    <Formik initialValues={initialValue} validationSchema={productSchema} onSubmit={onSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
            return (
                <View style={styles.container}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        value={values.fullname}
                        placeholder='Jon smith'
                        onChangeText={handleChange("fullname")}
                        onBlur={handleBlur("fullname")}
                    />
                    {touched.fullname && errors.fullname && (
                        <Text style={styles.errorText}>{errors.fullname}</Text>
                    )}

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

                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        value={values.confirmPassword}
                        placeholder='••••••••'
                        secureTextEntry
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                    )}

                    <Button text={"Create Account"} onPress={handleSubmit as any} />
                    <Text onPress={() => router.push(`/sign_in?role=${role}`)} style={styles.textButton}>Sign in</Text>
                </View>
            );
        }}
    </Formik>
)
}

export default sign_up

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