import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test ("render without error", () => {
    render (<App />)
})

test ("render all missions when button is clicked", () => {
    //Arrange: Renders App
    render (<App />)

    //Act: Find and push our button within MissionForm
    //Assert: Verify that mission items are on the screen
 

})