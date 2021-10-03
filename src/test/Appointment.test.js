import React from 'react';
import ReactDOM from 'react-dom';
import {Appointment} from "../Appointment";

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

    render(<Appointment customer={customer} />);

    expect(document.body.textContent).toMatch('Ashley');
});

it('renders the customer first name', () => {
    customer = {firstName: 'Ashley'};

    render(<Appointment customer={customer} />);
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

