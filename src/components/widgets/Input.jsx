import styled from "styled-components";

export const Input = styled.input`
    outline: none;
    padding: 5px 8px;
    color: #222;
    font-size: 14px;
    border: 1.5px solid transparent;
    transition: .4s ease;
    border-radius: 8px;
    &::placeholder{
        font-size: 12px;
    }
    &:focus{
        border-color:  #e08594
    }
` 