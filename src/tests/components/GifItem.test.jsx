import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en <GifItem/> ', () => {
    

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshot ',() => {

       const { container } =  render( <GifItem title= { title } url= { url } />)
       expect( container ).toMatchSnapshot();
    
    });

    test('Debe de mostrar el URL y el ALT indicado ',()=> {

        render( <GifItem title= { title } url= { url } />)   
        //screen.debug();
        expect(screen.getByRole('img').src ).toBe(url);
       const {src, alt } =  screen.getByRole('img');
        expect(src).toBe(src);
        expect(url).toBe(url);
    
    
    });

    test('Debe de mostrar el titulo de componente', ()=>{
        render( <GifItem title= { title } url= { url } />)
         expect(screen.getByText(title)).toBeTruthy();


    })
});