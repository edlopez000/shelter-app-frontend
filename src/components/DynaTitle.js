import React from "react";
import Helmet from 'react-helmet';

const DynaTitle = ({ title }) => {
    let defaultTitle = 'Shelter App TBD';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );

};

export { DynaTitle };