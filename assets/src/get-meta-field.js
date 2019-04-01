/**
 * For backward-compatability-related reason, the meta fields are only available as arrays with
 * a length of one, so we return the first item in the array. We also return non-array values
 * just in case.
 *
 * @param {Object} meta  Meta data object.
 * @param {string} field  Field name.
 * @return {string} Value
 */
export function getMetaField( meta, field ) {
	if ( field in meta ) {
		if ( Array.isArray( meta[ field ] ) ) {
			return meta[ field ][ 0 ];
		}

		return meta[ field ];
	}

	return '';
}
