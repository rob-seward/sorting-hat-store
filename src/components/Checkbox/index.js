import React from 'react';
import {FaCheck} from 'react-icons/fa';
import {CheckboxWrapper} from './styles';

export function Checkbox({id, checked}) {
    return (
        <CheckboxWrapper checked={checked}>
            <div>
                <FaCheck color="white"/>
            </div>
        </CheckboxWrapper>
    );
}