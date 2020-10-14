import { createContext } from 'react';

const DeveloperContext = createContext({
    isAuthenticated: false,
    isAdmin: false
})

export default DeveloperContext;