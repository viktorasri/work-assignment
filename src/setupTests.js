import Enzyme from 'enzyme';
//  App is using React < 17 version and at them moment there is no oficial enzyme adapter.
//  Replace it then oficial becomes available.
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
