import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../Loader';


it("render without crash",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Loader></Loader>,div);
})