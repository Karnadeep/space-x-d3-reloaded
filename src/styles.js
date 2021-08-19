import styled from 'styled-components';


export const AppWrapper = styled.div`
    /* border:10px solid green; */
    position:relative;
    box-sizing:border-box;
    background-image: url(${props => props.img});
    height:100vh;
    display:grid;
    grid-template-columns:repeat(6,1fr);
    grid-template-areas:'header header header header header header'
    'home home home home home home';
    grid-template-rows:70px 1fr;
    overflow-y:auto;

    @media(min-width:1180px){
        grid-template-areas:'header header header header header header'
    'sidebar home home home home home';
    }
`