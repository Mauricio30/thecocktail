import { shallow } from 'enzyme';
import { setupComponent } from '../../../utils/SpecFnc';

import Container from './Container.component';

describe('Grid [Container]', () => {
  it('should render correctly', () => {
    const wrapper = shallow(setupComponent(Container));
    expect(wrapper.hasClass('container')).toEqual(true);
  });

  it('should render correctly with prop fluid', () => {
    const wrapper = shallow(setupComponent(Container, { fluid: true }));
    expect(wrapper.hasClass('container-fluid')).toEqual(true);
  });
});
