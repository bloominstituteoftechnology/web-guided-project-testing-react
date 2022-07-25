import React from 'react';
import { render, screen } from '@testing-library/react'
import MissionsList from "./MissionsList";

test('renders without errors', () => {
    render(<MissionsList missions={[]}/>)
})

//rerendering - allows us to test the transitions in components when props change

test("MissionsList shows data when rerendered with new missions data", () => {
//first stage: missions props is an empty array

//Second stage: missions props is an array with missions
})
