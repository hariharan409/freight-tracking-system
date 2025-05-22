import React from 'react';
import { Link } from 'react-router-dom';

interface EpicHyperlinkProps {
    route: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    rel?: string;
}

const isExternal = (route: string): boolean => {
    return /^(http|https|mailto|tel):/.test(route);
};

const EpicHyperlink: React.FC<EpicHyperlinkProps> = ({
    route,
    children,
    className = '',
    target = '_blank',
    rel = 'noopener noreferrer',
}) => {
        return (
            <a href={route} target={target} rel={rel} className={`text-blue-600 underline font-medium uppercase ${className}`}>
                {children}
            </a>
        );
};

export default EpicHyperlink;
