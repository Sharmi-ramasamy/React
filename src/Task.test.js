import {render,screen,fireEvent} from '@testing-library/react'
import Task from './Task'

test("Name checking",() =>{
    render(<Task/>)


    // const n1= screen.getByTestId("Name");
    const b1= screen.getByTestId("click");

    fireEvent.click(b1);

    // expect(n1).toHaveTextContent("0")
})