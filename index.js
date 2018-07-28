import { AppRegistry } from 'react-native';
import {name as AppGugg} from './app.json';
import App from './App';

const ProjectEnd = () => <App />;

export default ProjectEnd;

AppRegistry.registerComponent(AppGugg, () => ProjectEnd);
