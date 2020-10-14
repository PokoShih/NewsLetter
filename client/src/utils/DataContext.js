import { createContext } from 'react';

const DataContext = createContext({
    adminSales: "",
    adminPromotions: "",
    adminNews: "",
    adminSafety: "",
    adminAchievements: "",
    adminBirthdays: "",
})

export default DataContext;