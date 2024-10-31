import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        ReactGA.initialize('UA-XXXXXXXXX-X'); // Replace with your Google Analytics tracking ID
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return <>{children}</>;
};

export default AnalyticsWrapper;
