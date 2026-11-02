import React from 'react';
import { useTranslation } from 'react-i18next';
const App = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="ka">Kannada</option>
        <option value="hi">Hindi</option>
      </select>

      <h1>{t('Welcome')}</h1>
      <h1>{t('My name is')} Sudesh</h1>
    </div>
  );
};
export default App;