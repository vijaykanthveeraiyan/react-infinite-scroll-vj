import React from 'react';
import ReactDOM from 'react-dom';

import ListItemContainer from '../ListItemContainer';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import {cleanup, fireEvent, render} from '@testing-library/react';
import { configure,mount,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
afterEach(cleanup);

function Component(){
    const listDataItem ={name:"red",address:"#f00",'e-mail':"qwasdeqwe",
    phone:"123123123",location:'india','payment method':'Master',
    curreny:'$',Locale:'123123','net payment':'amex'};
  return  <ListItemContainer listData={listDataItem}></ListItemContainer>
           
}

it("renders row correctly",()=>{

  const checkbox = shallow(<Component></Component>);
  expect(checkbox.find('.row')).toBeTruthy();
})
