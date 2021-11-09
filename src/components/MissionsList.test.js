import React from 'react';
import { screen, render} from '@testing-library/react';
import MissionsList from './MissionsList';

test ("renders without errors", () => {
    render (<MissionsList missions={[]}/>)
})

test ("renders 3 missions after rendering no missions", () => {
    //Arrange: render component with no missions
    //Act: Find all missions
    //Asset: Check that no missions have been rendered.
    
})