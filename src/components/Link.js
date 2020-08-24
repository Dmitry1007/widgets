import React from 'react';

const Link = ({ href, text, className }) => {
    const onClick = (event) => { 
        // Check to see if user wants to open link in another tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        // Route compnent listens for this event
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
        <a onClick={onClick} href={href} className={className}>{text}</a>
    );
};

export default Link;