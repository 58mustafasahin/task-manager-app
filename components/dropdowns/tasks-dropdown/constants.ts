import { Copy, Edit2, Star } from "lucide-react";
import { MenuItem } from "./types";

export const MENU_ITEMS: MenuItem[] = [
    {
        icon: Edit2,
        label: 'Edit',
        shortcut: '⇧⌘E',
    },
    {
        icon: Copy,
        label: 'Make a Copy',
        shortcut: '⌘C',
    },
    {
        icon: Star,
        label: 'Favorite',
        shortcut: '⌘S',
    },
];

export const LABEL_OPTIONS = ["Bug", "Feature", "Documentation"];