const Advisor = ( { email, name, title } ) => {
	if ( [ email, name, title ].indexOf( null ) !== -1 ) {
		return null;
	}

	return (
		<div>
			<dt>{ title }</dt>
			<dd>
				<a href={ `mailto:${ email }` }>
					{ name
						.split( ',' )
						.map( ( item ) => item.trim() )
						.join( ', ' ) }
				</a>
			</dd>
		</div>
	);
};

export default Advisor;
