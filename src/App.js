import React, {useState, useEffect} from 'react';
import {
    MainContainerDiv,
    TextContainerP,



} from './styles/app_styles';
import zombieText from './assets/zombieText'; 
import Example from './comp/useOnScreen';


function App() {

    let VisualViewport_obj = window.visualViewport
    

    visualViewport.addEventListener('scroll', showVisViewObj);

    // const showVisViewObj = () => {
    function showVisViewObj(event){

        
        console.log('EVENT FIRED')
    
    }



    // useEffect( () => {
    //     // using Listener
    //     visualViewport.addEventListener('scroll', showVisViewObj);

    //     console.log('>>> ', visViewScroll_event);
    


    // }, [])


    return (
            <MainContainerDiv
                onScroll = {showVisViewObj}

            >
                <Example />
                <TextContainerP>
                    {zombieText}
                </TextContainerP>


            </MainContainerDiv>
    );
    }

export default App;
