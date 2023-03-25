import React from 'react';
import { screen, render} from '@testing-library/react';
import MissionsList from './MissionsList';

test ("renders without errors", () => {
    render (<MissionsList missions={[]}/>)
})

const testMissions = [
    {
        mission_id: 1,
        mission_name: "Mission 1"
    },
    {
        mission_id: 2,
        mission_name: "Mission 3"
    },
    {
        mission_id: 3,
        mission_name: "Mission 3"
    }
]

test ("renders 3 missions after rendering no missions", () => {
    //Arrange 1: render component with no missions
    const { rerender } = render(<MissionsList missions={[]}/>);

    //Act 1: Find all missions
    let missions = screen.queryAllByTestId('mission');
    console.log('missions: ', missions);

    //Asset 1: Check that no missions have been rendered.
    expect(missions).toHaveLength(0);

    // console.log('testStuff: ', testStuff);
    //Arrange 2: render component with 3 missions   
    rerender(<MissionsList missions={testMissions}/>);

    //Act 2: Find all missions
    missions = screen.queryAllByTestId('mission'); 
    
    //Asset 2s: Check that no missions have been rendered.
    expect(missions).toHaveLength(3); 
})