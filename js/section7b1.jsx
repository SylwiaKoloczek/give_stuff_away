import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";

const info=['Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć, komu najlepiej je przekazać.',
    'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję, jak dokładnie spakować rzeczy znajdziesz TUTAJ.',
    'Jeśli wiesz, komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
    'Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania wybraliśmy organizacje, którym możesz pomóc. Wybierz jedną, do której trafi Twoja przesyłka.'];

export class Section7b1 extends React.Component{

    render() {
        return(
            <div className={'s7b1_display_style'}>
                <h1>Ważne!</h1>
                <p>{info[0]}</p>
            </div>
        )
    }
}