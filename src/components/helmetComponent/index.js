import React from 'react';
import { Helmet } from 'react-helmet';

export default function HelmetComponent({ title }) {
    return (
        <Helmet>
            <title>{title} - Ressignificar</title>
        </Helmet>
    );
}