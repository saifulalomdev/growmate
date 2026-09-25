import {
    Store,
    Settings2,
    User,
    type LucideIcon
} from 'lucide-react-native'

interface TabIcons {
    [key: string]: {
        Icon: LucideIcon
    }
}

export const tabIcons: TabIcons = {
    "clients": { Icon: User },
    "index": { Icon: Store },
    "settings": { Icon: Settings2 }
}