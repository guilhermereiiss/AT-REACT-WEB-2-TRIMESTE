// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import AdapterDayjs from '@date-io/dayjs';



// import { ptBR, enUS, esES } from '@mui/x-date-pickers/locales';

// const DatePickerComponent = (props) => {
//     return (
//         <LocalizationProvider
//             localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
//             dateAdapter={AdapterDayjs}
//         >
//             <DemoContainer components={['DatePicker']}>
//                 <DatePicker {...props} />
//             </DemoContainer>
//         </LocalizationProvider>
//     );
// };

// export default DatePickerComponent;

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Corrigido a importação
import { ptBR, enUS, esES } from '@mui/x-date-pickers/locales';

const DatePickerComponent = (props) => {
    return (
        <LocalizationProvider
            localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
            dateAdapter={AdapterDayjs} // Usando o AdapterDayjs corretamente
        >
            <DemoContainer components={['DatePicker']}>
                <DatePicker {...props} />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default DatePickerComponent;


