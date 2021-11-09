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
    const loadingMessage = screen.queryByText(/we are fetching data/i);
    // console.log('loadingMessage: ', loadingMessage);
    const button = screen.queryByRole('button');

    //Assert: Verify that loading message exists   
    expect(loadingMessage).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
    // expect(loadingMessage).toBeTruthy();
    // expect(loadingMessage).not.toBeNull();
    // expect(loadingMessage).toHaveTextContent('we are fetching data');
    
})

test ("renders button message if isFetchingData is false", ()=> {
    render(<MissionForm isFetchingData={false}/>);
    const loadingMessage = screen.queryByText(/we are fetching data/i);
    const button = screen.queryByRole('button');

    expect(loadingMessage).toBeFalsy();
    expect(button).toBeTruthy();
})

test ("renders getData message if button is clicked", ()=> {
    const fakeGetData = jest.fn();

    // Arrange: Render our component with isFetchingData === false
    render(<MissionForm isFetchingData={false} getData={fakeGetData}/>);
    // render(<MissionForm isFetchingData={false} />);
    
    //Act: Find our button. Press our button.
    const button = screen.queryByRole("button");
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    //Assert: See if a function gets called?
    // console.log('fakeGetData: ', fakeGetData);
    console.log('fakeGetData.mock: ', fakeGetData.mock);

})
