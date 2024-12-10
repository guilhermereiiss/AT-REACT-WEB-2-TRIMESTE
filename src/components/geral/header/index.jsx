import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTranslation } from "react-i18next";

import TextComponent from "../../typography/index";
import ButtonComponent from "../../Button/index";
import AvatarComponent from "../../avatar/index";
import BoxComponent from "../../box/index";

const BabyHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const name = localStorage.getItem('babyName');
  const weight = localStorage.getItem('babyWeight');
  const length = localStorage.getItem('babyLength');
  const imageUrl = "https://cdn-icons-png.flaticon.com/512/7890/7890168.png";

  const navegaSetting = () => {
    navigate('/settings');
  };

  return (
    <BoxComponent
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      justifyContent="space-around"
      padding={4}
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={3}
      gap={2}
    >
      <BoxComponent display="flex" alignItems="center" flexDirection="row" gap={2}marginBottom={3} marginTop={3}>
        <AvatarComponent
          alt={name}
          src={imageUrl}
          sx={{ width: 100, height: 100 }}
        />
        <BoxComponent>
          <TextComponent variant="h6">{name}</TextComponent>
          <TextComponent variant="body2">{t('Weight')}: {weight} kg</TextComponent>
          <TextComponent variant="body2">{t('Length')}: {length} cm</TextComponent>
        </BoxComponent>
      </BoxComponent>

      <ButtonComponent
        onClick={navegaSetting}
        startIcon={<SettingsIcon />}
        variant="contained"
      >
        {t('Settings')}
      </ButtonComponent>
    </BoxComponent>
  );
};

export default BabyHeader;

