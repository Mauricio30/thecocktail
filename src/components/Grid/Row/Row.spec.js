import { shallow } from 'enzyme';
import { setupComponent } from '../../../utils/SpecFnc';

import Row from './Row.component';

describe('Grid [Row]', () => {
  it('should render correctly', () => {
    const wrapper = shallow(setupComponent(Row));
    expect(wrapper.hasClass('row')).toEqual(true);
  });

  it('should render correctly with prop noGutters', () => {
    const wrapper = shallow(setupComponent(Row, { noGutters: true }));
    expect(wrapper.find('.row').hasClass('no-gutters')).toEqual(true);
  });
});
