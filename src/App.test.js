import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test ("render without error", () => {
    render (<App />)
})

test ("render all missions when button is clicked", async () => {
    //Arrange: Renders App
    render (<App />)

    //Act: Find and push our button within MissionForm
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert: Verify that mission items are on the screen
    const missions = await screen.findAllByTestId('mission');
    // console.log('missions: ', missions); 
    expect(missions).toHaveLength(10);
})