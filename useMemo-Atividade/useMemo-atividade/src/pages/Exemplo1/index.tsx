import { useEffect, useMemo, useState } from 'react';

import TitleExample from '../../components/TitleExample';

function Title() {
	const [title, setTitle] = useState('Meu título');

	useEffect(() => {
		setTitle('Surica');
	}, []);

	const titleMemorized = useMemo(() => {
		return <TitleExample title={title} />;
	}, [title]);

	return (
		<div>
			<h1>{titleMemorized}</h1>
		</div>
	);
}
export default Title;
