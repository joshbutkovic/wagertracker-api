import React, { ReactNode } from 'react';

interface PageSectionProps {
    children: ReactNode;
    container?: boolean;
    classes?: string;
}

function PageSection({ container, children, classes }: PageSectionProps) {
    return (
        <div
            className={`page-section${container ? ' container' : ''}${
                classes ? ` ${classes}` : ''
            }`}
        >
            <div className="section">{children}</div>
        </div>
    );
}

export default PageSection;
