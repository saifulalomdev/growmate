import TabBar from '@/src/components/tab-bar'
import { Tabs } from 'expo-router'

export default function Layout() {
    return (
        <Tabs tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen
                name='index'
                options={tabOptions}
            />
            <Tabs.Screen
                name='products'
                options={tabOptions}
            />
            <Tabs.Screen
                name='settings'
                options={tabOptions}
            />
        </Tabs>
    )
}

const tabOptions = {
    headerShown: false,
}
