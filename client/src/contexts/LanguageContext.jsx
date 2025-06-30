import React, { createContext, useState, useEffect } from 'react';

// Create the Language Context
export const LanguageContext = createContext();

// Create a Language Provider component
export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage or default to 'English'
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('appLanguage') || 'English';
  });

  // Effect to save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('appLanguage', currentLanguage);
  }, [currentLanguage]);

  // The value provided to consumers of this context
  const contextValue = {
    currentLanguage,
    setCurrentLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
