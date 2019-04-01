/**
 * Internal dependencies
 */
import { ROOT_DATASET } from '.';

/**
 * Returns data attribute values from the app root element.
 *
 * @param {string} attribute Attribute name.
 * @param {Object} dataset The dataset.
 * @return {mixed} The value, or null if the value doesn't exist.
 */
export function getRootDataAttribute( attribute, dataset = ROOT_DATASET ) {
	if ( attribute in dataset ) {
		return dataset[ attribute ];
	}
}
