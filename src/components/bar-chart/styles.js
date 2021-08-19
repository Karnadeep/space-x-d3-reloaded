import styled from 'styled-components'

export const BarChartWrapper = styled.div`
    /* grid-area:barChart; */
    /* border:1px solid brown; */
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    align-items:center;
   
`


export const ChartTitle = styled.label`
    font-size:12px;
    font-weight:bold;
    margin:24px;

    @media(min-width:968px){
        margin:8px;
    }
    /* overflow-y:auto; */
`
