import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import '../app.scss';
import '../components/Button.scss';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = () => (
    <Button classes="is-primary" onClick={action('clicked')}>
        Button
    </Button>
);
