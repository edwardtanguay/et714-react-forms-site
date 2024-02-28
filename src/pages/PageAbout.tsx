import * as config from '../config';

export const PageAbout = () => {

	return (
		<p>This is the about page. ENVIRONMENT=[{config.getEnvironment()}]</p>
	)
}
