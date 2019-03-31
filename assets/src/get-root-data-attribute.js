/**
 * Internal dependencies
 */
import { ROOT_DATASET } from '.';

export function getRootDataAttribute( attribute, dataset = ROOT_DATASET ) {
	if ( attribute in dataset ) {
		return dataset[ attribute ];
	}
}
