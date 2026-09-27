import { SearchIcon } from 'lucide-react-native'
import { StyleSheet, TextInput, View } from 'react-native'

export default function SearchBar() {
  return (
    <View style={[styles.container]}>
      <SearchIcon/>
      <TextInput style={styles.field} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    flexDirection : "row",
    alignItems: "center",
    
  },
  field: {
    paddingHorizontal: 20,
    height: 50
  }
})


