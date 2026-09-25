import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import SearchIcon from '@/assets/icons/search-icon'
import { useTheme } from '@/src/features/theme/theme-hooks'

export default function SearchBar() {
  const theme = useTheme(state => state.theme)
  return (
    <View style={[styles.container , {backgroundColor: theme.background}]}>
      <SearchIcon color={theme.muted}/>
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


