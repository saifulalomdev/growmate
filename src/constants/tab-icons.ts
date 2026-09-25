import HomeIcon from "@/assets/icons/home-icon"
import NoteIcon from "@/assets/icons/note-icon"
import SettingsIcon from "@/assets/icons/settings-icon"
import UsersIcon from "@/assets/icons/users-icon"

export const tabIcons: TabIcons = {
    "index": { Icon: HomeIcon },
    "clients": { Icon: UsersIcon },
    "tasks": { Icon: NoteIcon },
    "settings": { Icon: SettingsIcon }

}

interface Tab {
    Icon: typeof HomeIcon
}

interface TabIcons {
    [key: string]: Tab
}