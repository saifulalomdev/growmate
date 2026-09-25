import { StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function ContentsWrapper({children}: {children?: ReactNode}) {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 6,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 40, // for scroll breathing space
  },
})