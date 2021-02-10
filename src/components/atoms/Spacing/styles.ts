import styled from 'styled-components';


export function getStyledDiv(height: number, width: number) {
    return styled.div`
    height: ${height}px;
    width: ${width}px;
    border-style: solid;
    border-color: black;
    border-width: .5px;
  `
}