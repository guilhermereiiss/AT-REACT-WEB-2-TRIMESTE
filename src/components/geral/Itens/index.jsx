import TextComponent from "../../typography/index";
import CardComponent from "../../card/index";
import ButtonComponent from "../../Button/index";
import GridComponent from "../../grid/index";
import BoxComponent from "../../box/index";
import TextFieldComponent from "../../textField/index";
import SnackbarComponent from "../../snackbar/index";
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import "../../../styles/Central.scss";

const ItemHome = () => {
  const { t } = useTranslation();

  const [fraldas, setFraldas] = useState([]);
  const [sonos, setSonos] = useState([]);
  const [amamentacoes, setAmamentacoes] = useState([]);

  const [fralda, setFralda] = useState({ tipo: '', horario: '', observacao: '' });
  const [sono, setSono] = useState({ inicio: '', fim: '', observacao: '' });
  const [amamentacao, setAmamentacao] = useState({ tipo: '', horarioInicio: '', horarioFim: '', quantidade: '', lado: '', observacao: '' });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('todos');

  const openFormModal = (type) => {
    setModalType(type);
    setOpenModal(true);
  };

  const closeFormModal = () => {
    setOpenModal(false);
    setFralda({ tipo: '', horario: '', observacao: '' });
    setSono({ inicio: '', fim: '', observacao: '' });
    setAmamentacao({ tipo: '', horarioInicio: '', horarioFim: '', quantidade: '', lado: '', observacao: '' });
  };

  const addItem = (type, data) => {
    let updatedData = [];

    if (type === 'fralda') {
      updatedData = [data, ...fraldas];
      setFraldas(updatedData);
      localStorage.setItem('fraldas', JSON.stringify(updatedData));
      setSnackbarMessage(t("Diaper added successfully!"));
    } else if (type === 'sono') {
      updatedData = [data, ...sonos];
      setSonos(updatedData);
      localStorage.setItem('sonos', JSON.stringify(updatedData));
      setSnackbarMessage(t( "Sleep registered successfully!"));
    } else if (type === 'amamentacao') {
      updatedData = [data, ...amamentacoes];
      setAmamentacoes(updatedData);
      localStorage.setItem('amamentacoes', JSON.stringify(updatedData));
      setSnackbarMessage(t("Breastfeeding registered successfully!"));
    }
    setOpenSnackbar(true);
    closeFormModal();
  };

  const deleteItem = (type, index) => {
    let updatedData = [];

    if (type === 'fralda') {
      updatedData = fraldas.filter((_, i) => i !== index);
      setFraldas(updatedData);
      localStorage.setItem('fraldas', JSON.stringify(updatedData));
    } else if (type === 'sono') {
      updatedData = sonos.filter((_, i) => i !== index);
      setSonos(updatedData);
      localStorage.setItem('sonos', JSON.stringify(updatedData));
    } else if (type === 'amamentacao') {
      updatedData = amamentacoes.filter((_, i) => i !== index);
      setAmamentacoes(updatedData);
      localStorage.setItem('amamentacoes', JSON.stringify(updatedData));
    }
  };

  useEffect(() => {
    const storedFraldas = localStorage.getItem('fraldas');
    const storedSonos = localStorage.getItem('sonos');
    const storedAmamentacoes = localStorage.getItem('amamentacoes');

    if (storedFraldas) {
      setFraldas(JSON.parse(storedFraldas));
    }
    if (storedSonos) {
      setSonos(JSON.parse(storedSonos));
    }
    if (storedAmamentacoes) {
      setAmamentacoes(JSON.parse(storedAmamentacoes));
    }
  }, []);

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleString();
  };

  return (
    <BoxComponent sx={{ backgroundColor: '#f7f7f7', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ padding: 20, backgroundColor: '#1976D2', textAlign: 'center', width: '100%' }}>
        <div style={{ marginBottom: 50, marginTop: 50, textAlign: 'center', color: '#fff' }}>
          <h1>{t("WELCOME TO THE BABYCENTER")}</h1>
          <h2>{t("Manage your baby's daily life")}</h2>
        </div>

        <BoxComponent sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            sx={{ margin: 1, backgroundColor: '#fff', borderRadius: 1 }}
          >
            <MenuItem value="todos">{t('All')}</MenuItem>
            <MenuItem value="fralda">{t('Diaper')}</MenuItem>
            <MenuItem value="sono">{t('Sleep')}</MenuItem>
            <MenuItem value="amamentacao">{t('Breastfeeding')}</MenuItem>
          </Select>

          <ButtonComponent
            color="primary"
            onClick={() => openFormModal('fralda')}
            sx={{ margin: 1, backgroundColor: '#ffc107', color: '#fff' }}
          >
            {t('Add Diaper')}
          </ButtonComponent>
          <ButtonComponent
            color="primary"
            onClick={() => openFormModal('sono')}
            sx={{ margin: 1, backgroundColor: "#ffff", color: '#1976D2' }}
          >
            {t('Add Sleep')}
          </ButtonComponent>
          <ButtonComponent
            color="primary"
            onClick={() => openFormModal('amamentacao')}
            sx={{ margin: 1, backgroundColor: '#4caf50', color: '#fff' }}
          >
            {t('Add Breastfeeding')}
          </ButtonComponent>
        </BoxComponent>
      </div>

      <Dialog open={openModal} onClose={closeFormModal} sx={{ borderRadius: 2 }}>
        <DialogTitle sx={{ backgroundColor: '#FFEBEE', color: '#D32F2F' }}>
          {modalType === 'fralda' ? t('Add Diaper') : modalType === 'sono' ? t('Add Sleep') : t('Add Breastfeeding')}
        </DialogTitle>
        <DialogContent sx={{ padding: 3, backgroundColor: '#FAFAFA' }}>

          {modalType === 'fralda' && (
            <>
              <Select
                fullWidth
                value={fralda.tipo}
                onChange={(e) => setFralda({ ...fralda, tipo: e.target.value })}
                sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
              >
                <MenuItem value={t('Soiled with Urine')}>{t('Soiled with Urine')}</MenuItem>
                <MenuItem value={t('Soiled with Feces')}>{t('Soiled with Feces')}</MenuItem>
                <MenuItem value={t('Both')}>{t('Both')}</MenuItem>
                <MenuItem value={t('Clean')}>{t('Clean')}</MenuItem>
              </Select>

              <div className="datepicker-container-fralda">
                <DatePicker
                  selected={fralda.horario ? new Date(fralda.horario) : null}
                  onChange={(date) => setFralda({ ...fralda, horario: date })}
                  showTimeSelect
                  dateFormat="Pp"
                  fullWidth
                  className="datepicker-fralda"
                  placeholderText={t("Start")}
                  sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
                />
              </div>

              <TextFieldComponent
                fullWidth
                label={t('Observation')}
                value={fralda.observacao}
                onChange={(e) => setFralda({ ...fralda, observacao: e.target.value })}
                sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
              />
            </>
          )}

          {modalType === 'sono' && (
            <>
              <div className="datepicker-container-sono">
                <DatePicker
                  selected={sono.inicio ? new Date(sono.inicio) : null}
                  onChange={(date) => setSono({ ...sono, inicio: date })}
                  showTimeSelect
                  dateFormat="Pp"
                  fullWidth
                  className="datepicker-sono"
                  placeholderText={t("Start")}
                  sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
                />
              </div>

              <div className="datepicker-container-sono">
                <DatePicker
                  selected={sono.fim ? new Date(sono.fim) : null}
                  onChange={(date) => setSono({ ...sono, fim: date })}
                  showTimeSelect
                  dateFormat="Pp"
                  fullWidth
                  className="datepicker-sono"
                  placeholderText={t("End")}
                  sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
                />
              </div>

              <TextFieldComponent
                fullWidth
                label={t('Observation')}
                value={sono.observacao}
                onChange={(e) => setSono({ ...sono, observacao: e.target.value })}
                sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
              />
            </>
          )}

          {modalType === 'amamentacao' && (
            <>
              <Select
                fullWidth
                value={amamentacao.tipo}
                onChange={(e) => setAmamentacao({ ...amamentacao, tipo: e.target.value })}
                sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
              >
                <MenuItem value={t('Breast')}>{t('Breast')}</MenuItem>
                <MenuItem value={t('Bottle')}>{t('Bottle')}</MenuItem>
              </Select>

              <div className="datepicker-container-amamentacao">
                <DatePicker
                  selected={amamentacao.horarioInicio ? new Date(amamentacao.horarioInicio) : null}
                  onChange={(date) => setAmamentacao({ ...amamentacao, horarioInicio: date })}
                  showTimeSelect
                  dateFormat="Pp"
                  fullWidth
                  className="datepicker-amamentacao"
                  placeholderText={t("Start")}
                  sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
                />
              </div>

              <div className="datepicker-container-amamentacao">
                <DatePicker
                  selected={amamentacao.horarioFim ? new Date(amamentacao.horarioFim) : null}
                  onChange={(date) => setAmamentacao({ ...amamentacao, horarioFim: date })}
                  showTimeSelect
                  dateFormat="Pp"
                  fullWidth
                  className="datepicker-amamentacao"
                  placeholderText={t("End")}
                  sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
                />
              </div>

              <TextFieldComponent
                fullWidth
                label={t('Quantity')}
                value={amamentacao.quantidade}
                onChange={(e) => setAmamentacao({ ...amamentacao, quantidade: e.target.value })}
                sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
              />

              <Select
                fullWidth
                value={amamentacao.lado}
                onChange={(e) => setAmamentacao({ ...amamentacao, lado: e.target.value })}
                sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
              >
                <MenuItem value={t('Right')}>{t('Right')}</MenuItem>
                <MenuItem value={t('Left')}>{t('Left')}</MenuItem>
                <MenuItem value={t('Both')}>{t('Both')}</MenuItem>
              </Select>

              <TextFieldComponent
                fullWidth
                label={t('Observation')}
                value={amamentacao.observacao}
                onChange={(e) => setAmamentacao({ ...amamentacao, observacao: e.target.value })}
                sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
              />
            </>
          )}
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center', padding: 3 }}>
          <ButtonComponent
            color="error"
            onClick={closeFormModal}
            sx={{ margin: 1 }}
          >
            {t('Close')}
          </ButtonComponent>

          <ButtonComponent
            color="primary"
            onClick={() => addItem(modalType, modalType === 'fralda' ? fralda : modalType === 'sono' ? sono : amamentacao)}
            sx={{ margin: 1 }}
          >
            {t('Save')}
          </ButtonComponent>
        </DialogActions>
      </Dialog>

      <GridComponent container spacing={2} sx={{ marginTop: 3 }}>

        {(selectedCategory === 'todos' || selectedCategory === 'fralda') && fraldas.map((item, index) => (
          <GridComponent item xs={12} sm={6} md={4} key={index}>
            <CardComponent sx={{ backgroundColor: '#fff', padding: 3 }}>
              <TextComponent variant="h6" sx={{ fontWeight: 'bold' }}>{t('Diaper')}</TextComponent>
              <TextComponent>{t('Type')}: {item.tipo}</TextComponent>
              <TextComponent>{t('Time')}: {formatDate(item.horario)}</TextComponent>
              <TextComponent>{t('Observation')}: {item.observacao}</TextComponent>
              <ButtonComponent
                color="error"
                onClick={() => deleteItem('fralda', index)}
                sx={{ marginTop: 2, backgroundColor: '#F44336', color: '#fff' }}
              >
                {t('Delete')}
              </ButtonComponent>
            </CardComponent>
          </GridComponent>
        ))}

        {(selectedCategory === 'todos' || selectedCategory === 'sono') && sonos.map((item, index) => (
          <GridComponent item xs={12} sm={6} md={4} key={index}>
            <CardComponent sx={{ backgroundColor: '#fff', padding: 3 }}>
              <TextComponent variant="h6" sx={{ fontWeight: 'bold' }}>{t('Sleep')}</TextComponent>
              <TextComponent>{t('Start')}: {formatDate(item.inicio)}</TextComponent>
              <TextComponent>{t('End')}: {formatDate(item.fim)}</TextComponent>
              <TextComponent>{t('Observation')}: {item.observacao}</TextComponent>
              <ButtonComponent
                color="error"
                onClick={() => deleteItem('sono', index)}
                sx={{ marginTop: 2, backgroundColor: '#F44336', color: '#fff' }}
              >
                {t('Delete')}
              </ButtonComponent>
            </CardComponent>
          </GridComponent>
        ))}

        {(selectedCategory === 'todos' || selectedCategory === 'amamentacao') && amamentacoes.map((item, index) => (
          <GridComponent item xs={12} sm={6} md={4} key={index}>
            <CardComponent sx={{ backgroundColor: '#fff', padding: 3 }}>
              <TextComponent variant="h6" sx={{ fontWeight: 'bold' }}>{t('Breastfeeding')}</TextComponent>
              <TextComponent>{t('Type')}: {item.tipo}</TextComponent>
              <TextComponent>{t('Start')}: {formatDate(item.horarioInicio)}</TextComponent>
              <TextComponent>{t('End')}: {formatDate(item.horarioFim)}</TextComponent>
              <TextComponent>{t('Quantity')}: {item.quantidade}</TextComponent>
              <TextComponent>{t('Side')}: {item.lado}</TextComponent>
              <TextComponent>{t('Observation')}: {item.observacao}</TextComponent>
              <ButtonComponent
                color="error"
                onClick={() => deleteItem('amamentacao', index)}
                sx={{ marginTop: 2, backgroundColor: '#F44336', color: '#fff' }}
              >
                {t('Delete')}
              </ButtonComponent>
            </CardComponent>
          </GridComponent>
        ))}
      </GridComponent>

      <SnackbarComponent
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
        autoHideDuration={3000}
      />
    </BoxComponent>
  );
};

export default ItemHome;