import styled from "styled-components";

export const StyledNewsCard = styled.li`
    position: relative;
    background: var(--color-white);
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 25px 35px;

    .favoriteButton{
        position: absolute;
        top: 20px;
        right: 20px;
        color: var(--color-red1);
    }

    .contentBox{
        margin-top: 100px;

        button{
            margin-top: 30px;
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            
            color: var(--color-red1);
        }
    }
`