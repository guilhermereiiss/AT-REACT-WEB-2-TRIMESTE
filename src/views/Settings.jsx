import "../styles/Settings.scss";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import TextComponent from "../components/typography";
import ButtonComponent from "../components/Button";
import CardComponent from "../components/card";
import GridComponent from "../components/grid";
import BoxComponent from "../components/box";
import TextFieldComponent from "../components/textField";

const Settings = ({ setBabyName, setBabyWeight, setBabyLength }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('babyName');
    const savedWeight = localStorage.getItem('babyWeight');
    const savedLength = localStorage.getItem('babyLength');

    if (savedName) setName(savedName);
    if (savedWeight) setWeight(savedWeight);
    if (savedLength) setLength(savedLength);
  }, []);

  const handleSave = () => {
    localStorage.setItem('babyName', name);
    localStorage.setItem('babyWeight', weight);
    localStorage.setItem('babyLength', length);
    setBabyName(name);
    setBabyWeight(weight);
    setBabyLength(length);
    console.log('Settings saved!');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <div className="settings-container">
      <CardComponent className="settings-card">
        <TextComponent variant="h4" className="settings-title">{i18n.t('Settings')}</TextComponent>

        <GridComponent container spacing={3}>

          <GridComponent item xs={12} sm={4}>
            <TextComponent className="label">{i18n.t('Choose Language')}:</TextComponent>
            <BoxComponent className="buttons-lang">
              <ButtonComponent onClick={() => handleChangeLanguage('en')} className="language-button">{i18n.t('English')}</ButtonComponent>
              <ButtonComponent onClick={() => handleChangeLanguage('pt')} className="language-button">{i18n.t('Português')}</ButtonComponent>
              <ButtonComponent onClick={() => handleChangeLanguage('es')} className="language-button">{i18n.t('Español')}</ButtonComponent>
            </BoxComponent>
          </GridComponent>


          <GridComponent item xs={12} sm={4}>
            <TextComponent className="label">{i18n.t('Name')}:</TextComponent>
            <TextFieldComponent
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={i18n.t('Name')}
              fullWidth
              className="input-field"
            />
          </GridComponent>


          <GridComponent item xs={12} sm={4}>
            <TextComponent className="label">{i18n.t('Weight')}:</TextComponent>
            <TextFieldComponent
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={i18n.t('Weight')}
              fullWidth
              className="input-field"
            />
          </GridComponent>


          <GridComponent item xs={12} sm={4}>
            <TextComponent className="label">{i18n.t('Length')}:</TextComponent>
            <TextFieldComponent
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder={i18n.t('Length')}
              fullWidth
              className="input-field"
            />
          </GridComponent>
        </GridComponent>


        <BoxComponent className="buttons">
          <ButtonComponent onClick={handleSave} className="save-button">{i18n.t('Save')}</ButtonComponent>
          <ButtonComponent onClick={handleLogout} className="logout-button">{i18n.t('Logout')}</ButtonComponent>
        </BoxComponent>
      </CardComponent>
    </div>
  );
};

export default Settings;
