import React from 'react';
import { screen, render} from '@testing-library/react';
import MissionsList from './MissionsList';

test ("renders without errors", () => {
    render (<MissionsList />)
})