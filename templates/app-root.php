<?php
/**
 * Template for the app root.
 *
 * @package colbycomms/wp-student-clubs
 */

use function Colby_Comms\Student_Clubs\{the_app_root_content, the_app_data_attributes};

?>

<div
	data-student-clubs-root
	<?php the_app_data_attributes(); ?>
	>
	<?php the_app_root_content(); ?>
</div>

