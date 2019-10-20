import React from 'react';
import ReactDOM from 'react-dom';

import ListItem from '../ListItem';
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
  return <ListItem data={listDataItem} idx={'1'} itemClick={()=>{}} />
}

it("render List without crash",()=>{
    const div = document.createElement('div');
    const listDataItem ={name:"red",address:"#f00",'e-mail':"qwasdeqwe",
       phone:"123123123",location:'india','payment method':'Master',
       curreny:'$',Locale:'123123','net payment':'amex'};
      render( <Component />,div);
})

it("renders table correctly",()=>{

  const checkbox = shallow(<Component></Component>);
  expect(checkbox.find('.col')).toBeTruthy();
})

