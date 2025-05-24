import { View, Text, TextInput } from 'react-native'
const Input = ({placeholder, password=false}) => {
  return (
    <TextInput placeholder={placeholder}
    secureTextEntry={password}
    style={{
      padding: 15,
      paddingVertical: 20,
      borderWidth: 1,
      borderRadius: 10,
      width: '100%',
      fontSize: 16,
      marginTop: 15,

    }}
    />
  )
}
export default Input