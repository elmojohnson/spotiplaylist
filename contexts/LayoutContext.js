import { createContext } from "react";

const LayoutContext = createContext({
    navItems: [],
    isOpen: false,
    toggleOpen: () => {}
})

export default LayoutContext;