const AdvisorPhone = ( { phone } ) => {
	if ( ! phone ) {
		return null;
	}

	return (
		<div>
			<dt>Phone</dt>
			<dd>{ phone }</dd>
		</div>
	);
};

export default AdvisorPhone;
