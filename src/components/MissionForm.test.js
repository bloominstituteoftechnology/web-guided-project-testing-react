import React from 'react';

import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import MissionForm from './MissionForm';

//does the component render?
test("MissionForm renders as expected", () => {
    render(<MissionForm />)
});

//does the component render as expected when isFetchingData is true?
test('renders message when isFetchingData is true', () => {
    //Arrange: 
    render(<MissionForm isFetchingData={true} />);

    //Act:
    const displayText = screen.queryByText(/we are fetching data/i);
                                //.getByText

    //Assert:
    expect(displayText).toBeInTheDocument();
    expect(displayText).not.toBeNull();

})

//does the component render as expected when isFetchingData is false?
test('renders button when isFetchingData is false', () => {
    render(<MissionForm isFetchingData={false} />)

    const getDataButton = screen.queryByRole("button");
    const displayText = screen.queryByText(/we are fetching data/i);

    expect(getDataButton).toBeInTheDocument();
    expect(getDataButton).not.toBeNull();
    expect(displayText).toBeNull();
})

//does getData execute when user executes behavior (click button)?
test('calls getData when button is clicked', () => {
    const mockGetData = jest.fn(); //creates a mock function

    render(<MissionForm isFetchingData={false} getData={mockGetData} />);

    const getDataButton = screen.getByRole("button");
    userEvent.click(getDataButton);
    // userEvent.click(getDataButton);

    console.log(mockGetData.mock)

    expect(mockGetData.mock.calls.length).toBe(1);
    expect(mockGetData.mock.calls).toHaveLength(1);
    expect(mockGetData).toHaveBeenCalledTimes(1);

})
//Mocks - fake functions. 

