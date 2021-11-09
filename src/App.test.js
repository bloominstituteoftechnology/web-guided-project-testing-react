import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

import { fetchMissions } from './api/fetchMissions'
jest.mock('./api/fetchMissions');


test ("render without error", () => {
    render (<App />)
})

test ("render all missions when button is clicked", async () => {
    fetchMissions.mockResolvedValueOnce({
        data: [
            {
                mission_id: 1,
                mission_name: "mission 1"
            },
            {
                mission_id: 2,
                mission_name: "mission 2"
            },
            {
                mission_id: 3,
                mission_name: "mission 3"
            }
        ]
    })
    //Arrange: Renders App
    render (<App />)

    //Act: Find and push our button within MissionForm
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert: Verify that mission items are on the screen
    const missions = await screen.findAllByTestId('mission');
    // console.log('missions: ', missions); 
    expect(missions).toHaveLength(3);
})