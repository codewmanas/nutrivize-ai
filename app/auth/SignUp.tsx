import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { Link } from 'expo-router'
import { View, Text, Image, Pressable } from 'react-native'
const SignUp = () => {

    const onSignUp = () => {

    }

    return (
        <View style={{
            display: "flex",
            alignItems: "center",
            padding: 20,
        }}>
            <Image
                source={require("./../../assets/images/logo.png")}
                style={{
                    width: 150,
                    height: 150,
                    marginTop: 60
                }}
            />
            <Text style={{
                fontSize: 35,
                fontWeight: "bold",

            }}>Create New Account</Text>
            <View style={{
                marginTop: 20,
                width: "100%",

            }}>
                <Input placeholder={"Full Name"} />
                <Input placeholder={"Email"} />
                <Input placeholder={"Password"} password={true} />


            </View>
            <View style={{
                marginTop: 15,
                width: "100%",

            }}>
                <Button title={'Create Account'} onPress={() => onSignUp()} />

                <Text style={{
                    textAlign: "center",
                    fontSize: 16,
                    marginTop: 15,
                }}
                >
                    Already have an account?
                </Text>
                <Link href={'/auth/SignIn'}><Text style={{
                    textAlign: "center",
                    fontSize: 16,
                    color: "#007bff",
                    marginTop: 5,
                    fontWeight: "bold",
                }}>Sign In</Text></Link>
            </View>
        </View>
    )
}
export default SignUp