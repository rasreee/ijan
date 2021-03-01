import React from 'react';

const Heading: React.FC = ({ children, ...props }) => {
	return <h1 {...props}>{children}</h1>;
};

export default Heading;
