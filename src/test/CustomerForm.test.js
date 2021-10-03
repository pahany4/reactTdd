import React from 'react';
import {createContainer} from './domManipulators';
import {CustomerForm} from '../CustomerForm';

describe('CustomerForm', () => {
    let render, container;
    const firstNameField = () => form('customer').elements.firstName;

    /** элемент формы */
    const form = id => container.querySelector(`form[id="${id}"]`);

    /** Ожидание, что formElement не null, что тег 'input', тип 'text' */
    const expectToBeInputFieldOfTypeText = formElement => {
        expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text');
    };

    beforeEach(() => {
        ({render, container} = createContainer());
    })

    /** Рендер формы */
    it('renders a form', () => {
        render(<CustomerForm/>);
        expect(form('customer')).not.toBeNull()
    });

    /** отображает первое поле имени как текстовое поле */
    it('renders as a text box', () => {
        render(<CustomerForm/>);
        expectToBeInputFieldOfTypeText(firstNameField());
    });


    /** включает существующее значение для имени */
    it('includes the existing value for the first name', () => {
        render(<CustomerForm
            firstName="Ashley"/>);
        expect(firstNameField().value).toEqual('Ashley');
    });


    const labelFor = formElement =>
        container.querySelector(`label[for="${formElement}"]`);

    /** отображает метку для поля имени */
    it('renders a label for the first name field', () => {
        render(<CustomerForm />);
        expect(labelFor('firstName')).not.toBeNull();
        expect(labelFor('firstName').textContent).toEqual('First name');
    });

    /** назначает идентификатор, который соответствует идентификатору метки, в поле первого имени */
    it('assigns an id that matches the label id to the first name field', () =>
    {
        render(<CustomerForm />);
        expect(firstNameField().id).toEqual('firstName');
    });

})
