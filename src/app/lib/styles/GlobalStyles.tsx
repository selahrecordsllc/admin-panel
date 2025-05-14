import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth;
}

  ul,h1,h2,h3,h4,h5,h6,li,p {
    list-style:none;
    margin:0;
    padding:0};

  img {
    display:block;
    width:100%;
};

 a {
   text-decoration: none;
   color: inherit
 };

.visually-hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
};

body {
   font-family: 'Inter', sans-serif;
   background-color:${({ theme }) => theme.colors.pageBackground};
   display:flex;

  
};
  *,
 ::before,
 ::after {
   box-sizing: border-box;
 }

 ::-webkit-scrollbar {
  width: 10px; 
  height: 10px; 
}

::-webkit-scrollbar-track {
  background: #E3E3E3;
  
}

::-webkit-scrollbar-thumb {
  background: #919191;
  border-radius: 8px;
    transition: background-color 0.3s;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #818181;
}


/* react-datepicker styles */
  .react-datepicker {
    border: none;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 16px;
    .react-datepicker__header {
    background: ${({ theme }) => theme.colors.white};
    font-weight: 600;
  }

  .react-datepicker__current-month {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 8px;
  }

  .react-datepicker__day,
  .react-datepicker__day-name {
    width: 36px;
    height: 36px;
    line-height: 36px;
    margin: 2px;
    border-radius: 50%;
    text-align: center;
    &:hover {
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    background-color: ${({ theme }) => theme.colors.pageBackground};
    color: ${({ theme }) => theme.colors.colorText};
  }

  .react-datepicker__day--range-start,
  .react-datepicker__day--range-end {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.colorText};
  }

  .react-datepicker__day--today {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  .footer-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }

  .footer-buttons button {
    padding: 8px 16px;
    border-radius: 10px;
    border: none;
    font-weight: 500;
    cursor: pointer;
  }

  .btn-cancel {
    background: ${({ theme }) => theme.colors.disabledGrey};
    color: ${({ theme }) => theme.colors.colorText};
  }

  .btn-apply {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  .btn-apply:hover {
    background: ${({ theme }) => theme.colors.hoverButton};
  }

  .react-datepicker__day--selected:not(.react-datepicker__day--range-start):not(
      .react-datepicker__day--range-end
    ) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  }

    .react-datepicker__triangle {
    display: none;
  }

 `;
