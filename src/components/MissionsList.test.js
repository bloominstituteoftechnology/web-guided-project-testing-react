import React from 'react';
import { render, screen } from '@testing-library/react'
import MissionsList from "./MissionsList";

const missions = [
    {mission_name: 'Thaicom', mission_id: "someId"},
    {mission_name: 'Telstor', mission_id: "someOtherId"},
] 
test('renders without errors', () => {
    render(<MissionsList missions={[]}/>)
})

//rerendering - allows us to test the transitions in components when props change

test("MissionsList shows data when rerendered with new missions data", () => {
//first stage: missions props is an empty array
const { rerender } = render(<MissionsList missions={[]}/>)
//rerender() - allows us to render the component every time there are new props.


let missionDivs = screen.queryAllByTestId("mission");
expect(missionDivs).toEqual([]);

//Second stage: missions props is an array with missions
rerender(<MissionsList missions={missions} />)
missionDivs = screen.queryAllByTestId("mission");
expect(missionDivs).toHaveLength(2);

})
