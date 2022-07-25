import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import { fetchMissions as mockFetchMissions } from './api/fetchMissions';
jest.mock('./api/fetchMissions');


test('renders without errors', () => {
    render(<App />)
})

test('fetches and renders mission data', async () => {
    render(<App />);

    mockFetchMissions.mockResolvedValueOnce({
       data: [
           {mission_name: 'Thaicom', mission_id: "someId"},
           {mission_name: 'Telstor', mission_id: "someOtherId"},
       ] 
    })

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        expect(screen.getAllByTestId("mission")).toHaveLength(2);
    })

})