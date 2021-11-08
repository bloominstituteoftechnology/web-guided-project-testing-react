import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MissionForm from './MissionForm';

test("renders without errors", ()=> {
    render(<MissionForm/>);
});

test ("renders loading message if isFetchingData is true", ()=> {
    //Arrange: Renders our component with isFetchingData === true
    render (<MissionForm isFetchingData = {true} />);

    //Act: Find our loading message
    const loadingMessage = screen.getByText(/we are fetching data/i);
    console.log('loadingMessage: ', loadingMessage);

    //Assert: Verify that loading message exists    
    
})

test ("renders button message if isFetchingData is false", ()=> {

})

test ("renders getData message if button is clicked", ()=> {

})
