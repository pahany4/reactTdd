import React from 'react';
import ReactDOM from 'react-dom';
import {Appointment, AppointmentsDayView} from "../Appointment";
import ReactTestUtils from 'react-dom/test-utils'

/** Контейнер <div> */
let container;

/** Клиент */
let customer;

/** Перед началом всех тестов создается контейнер <div> */
beforeEach(() => {
    container = document.createElement('div');
});

/** Рендер */
const render = component => ReactDOM.render(component, container);

it('renders the customer first name', () => {
    customer = {firstName: 'Ashley'};

    document.body.appendChild(container);

    render(<Appointment customer={customer}/>);

    expect(document.body.textContent).toMatch('Ashley');
});

it('renders the customer first name', () => {
    customer = {firstName: 'Ashley'};

    render(<Appointment customer={customer}/>);
    expect(container.textContent).toMatch('Ashley');
});

/* Пропуск теста в случае ошибок
it.skip('renders another customer first name', () => {
})*/
it('renders another customer first name', () => {
    customer = {firstName: 'Jordan'};
    ReactDOM.render(<Appointment customer={customer}/>, container);
    expect(container.textContent).toMatch('Jordan');
});

describe('AppointmentsDayView', () => {
    let container;
    const today = new Date();
    const appointments = [
        {
            startsAt: today.setHours(12, 0),
            customer: {firstName: 'Ashley'}
        },
        {
            startsAt: today.setHours(13, 0),
            customer: {firstName: 'Jordan'}
        }
    ];


    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component =>
        ReactDOM.render(component, container);

    /** отображает div с правильным идентификатором */
    it('renders a div with the right id', () => {
        render(<AppointmentsDayView appointments={[]}/>);
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    });

    /** отображает несколько встреч в элементе ol */
    it('renders multiple appointments in an ol element', () => {
        render(<AppointmentsDayView appointments={appointments}/>);
        expect(container.querySelector('ol')).not.toBeNull();
        expect(
            container.querySelector('ol').children
        ).toHaveLength(2);
    });


    /** оформляет каждую встречу в li */
    it('renders each appointment in an li', () => {
        render(<AppointmentsDayView appointments={appointments}/>);
        expect(container.querySelectorAll('li')).toHaveLength(2);
        expect(
            container.querySelectorAll('li')[0].textContent
        ).toEqual('12:00');
        expect(
            container.querySelectorAll('li')[1].textContent
        ).toEqual('13:00');
    });


    /** изначально показывает сообщение о том, что на сегодня нет встреч */
    it('initially shows a message saying there are no appointments today', () => {
        render(<AppointmentsDayView appointments={[]}/>);
        expect(container.textContent).toMatch(
            'There are no appointments scheduled for today.'
        );
    });

    /** по умолчанию выбирает первую встречу */
    it('selects the first appointment by default', () => {
        render(<AppointmentsDayView appointments={appointments}/>);
        expect(container.textContent).toMatch('Ashley');
    });

    /** имеет элемент кнопки в каждом li */
    it('has a button element in each li', () => {
        render(<AppointmentsDayView
            appointments={appointments}/>);
        expect(
            container.querySelectorAll('li > button')
        ).toHaveLength(2);
        expect(
            container.querySelectorAll('li > button')[0].type
        ).toEqual('button');
    });

    /** отображает другую встречу при выборе */
    it('renders another appointment when selected', () => {
        render(<AppointmentsDayView appointments={appointments}/>);
        const button = container.querySelectorAll('button')[1];
        ReactTestUtils.Simulate.click(button);
        expect(container.textContent).toMatch('Jordan');
    });

});
