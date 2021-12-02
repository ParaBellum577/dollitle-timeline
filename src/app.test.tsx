
import { shallow } from 'enzyme';
import TimeLineComponent from './pages/timeline/index'

it("renders without crashing", () => {
  shallow(<TimeLineComponent />);
});

export {}