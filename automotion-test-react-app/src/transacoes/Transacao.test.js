import React from 'react'
import { render } from "@testing-library/react"
import Transacao from "./Transacao"

describe('Veirfy Transaction extract component', ()=> {
    //This test is usefull when you need to verify if something is changed
    //and you not add or verify the tests again to add the new features or values.
    it('Component snapshot should ever be the same', ()=> {
        const {container} = render(<Transacao
            data="08/09/2020"
            tipo="saque"
            valor="20.00"
        />)

        expect(container.firstChild).toMatchSnapshot();
    })
})