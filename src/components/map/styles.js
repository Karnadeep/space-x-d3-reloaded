import styled from 'styled-components'

export const MapWrapper = styled.div`
    /* border:1px solid brown; */
    display:flex;
    flex-direction:column;
    /* grid-area:map; */
    box-sizing:border-box;
    justify-content:center;
    align-items:center;

    svg{
        /* padding:0px;
        margin-top:0px; */
        /* display: inherit;
        vertical-align: top; */
        width:360px;
        height:400px;
    }
`

export const MapTitle = styled.label`
    margin:8px;
    font-size:12px;
    font-weight:bold;
`