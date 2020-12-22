import React from 'react';
import ReactDOM from 'react-dom';
import Square from '../square
import renderer from 'react-test-renderer';
import shallow  from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Square></Square>, div)
})

it("matches snapshot", () => {
    const tree = renderer.create(<Square></Square>).toJSON();
    expect(tree).toMatchSnapshot();
})

describe('clickイベントのテスト', ()=>{
  test('Squareコンポーネントにイベントを渡す', ()=>{
    const testMock = jest.fn();
    const subject = shallow(<Square event={testMock} />);
    subject.find('button').simulate('click');
    expect(testMock).toHaveBeenCalled();
  });
});