import { shallow } from 'enzyme';
import { setupComponent } from '../../../utils/SpecFnc';

import Col from './Col.component';

describe('Grid [Col]', () => {
  it('should render correctly', () => {
    const wrapper = shallow(setupComponent(Col));
    expect(wrapper.hasClass('col')).toEqual(true);
  });

  it('should render correctly with props sizes', () => {
    const wrapper = shallow(
      setupComponent(Col, {
        xl: { span: 1, order: 1, offset: 1 },
        lg: 2,
        md: { span: 3, order: 2 },
        xs: { span: 1, offset: 2 }
      })
    );
    expect(wrapper.find('.col-xl-1.order-xl-1.offset-xl-1')).toHaveLength(1); // xl
    expect(wrapper.find('.col-lg-2')).toHaveLength(1); // lg
    expect(wrapper.find('.col-md-3.order-md-2')).toHaveLength(1); // md
    expect(wrapper.find('.col-1.offset-2')).toHaveLength(1); // xs
    expect(wrapper.find('.col-sm-1')).toHaveLength(0); // sm
  });
});
