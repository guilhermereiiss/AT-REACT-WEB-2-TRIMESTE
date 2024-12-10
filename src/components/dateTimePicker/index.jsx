// import { DateTimePicker } from '@mui/x-date-pickers';

// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import AdapterDayjs from '@date-io/dayjs';
// import { ptBR } from '@mui/x-date-pickers/locales';



// const DateTimePickerComponent = (props) => {
//     return (
//         <LocalizationProvider
//             localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
//             dateAdapter={AdapterDayjs}
//         >
//             <DemoContainer components={['DateTimePicker']}>
//                 <DateTimePicker {...props} />
//             </DemoContainer>
//         </LocalizationProvider>
//     );
// };

// export default DateTimePickerComponent;

import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Corrigido a importação
import { ptBR } from '@mui/x-date-pickers/locales';

const DateTimePickerComponent = (props) => {
    return (
        <LocalizationProvider
            localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
            dateAdapter={AdapterDayjs} // Usando o AdapterDayjs corretamente
        >
            <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker {...props} />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default DateTimePickerComponent;


