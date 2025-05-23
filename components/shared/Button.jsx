import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '@/shared/Colors'
const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={
        {
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            width: '100%',
            borderRadius: 10,
        }
    }>
      <Text style={
        {
            fontSize: 20,
            color: Colors.WHITE,
            textAlign: 'center',
        }
      }>{title}</Text>
    </TouchableOpacity>
  )
}
export default Button