import React from 'react';
interface TitleExampleProps {
	title: string;
}

const TitleExample: React.FC<TitleExampleProps> = ({ title }) => {
	console.log('Renderizou!');
	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
};

export default TitleExample;
