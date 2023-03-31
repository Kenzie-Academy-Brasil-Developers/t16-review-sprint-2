import styled, { css } from "styled-components";

export const StyledDesktopCategoryList = styled.ul`
   display: flex;
   gap: 40px;
`;

export const StyledDesktopCategoryListItem = styled.li`
   button {
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      font-size: 1rem;
      padding: 10px 0;
      border-bottom: 4px solid transparent;

      ${({ active }) => {
         if (active) {
            return css`
               border-color: var(--color-red1);
            `;
         }
      }}
   }
`;
