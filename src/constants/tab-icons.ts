import {
    Store,
    Settings2,
    User,
    ShoppingBag,
    HomeIcon,
    Package,
    type LucideIcon
} from 'lucide-react-native'

interface TabIconConfig {
    Icon: LucideIcon;
    label: string; // Added custom label property
}

interface TabIcons {
    [key: string]: TabIconConfig;
}

export const tabIcons: TabIcons = {
    "index": { Icon: HomeIcon, label: "Home" },
    "products": { Icon: Package, label: "Products" },
    "orders": { Icon: ShoppingBag, label: "Orders" },
    "shops": { Icon: Store, label: "Shops" },
    "settings": { Icon: Settings2, label: "Settings" },
}
