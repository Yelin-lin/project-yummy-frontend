// 전체적용 스타일 컴포넌트

import { styled } from 'styled-components';

// flex 및 가운데 정렬 div
export const SCenterLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
// input 관련 styled-component
export const SInputLabelContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ $gapSize }) => $gapSize};

    padding-bottom: 20px;
`;

export const SLabelBox = styled.div`
    ${({ $fontSort }) => {
        switch ($fontSort) {
            case 'big':
                return 'font-size: 30px; font-weight: 700; width: 80px; padding: 10px; border-radius: 10px;';
            case 'medium':
                return 'font-size: 20px; font-weight: 700; height: 50px; width: 150px; padding: 5px; border-radius: 10px;';
            default :
                return null;
        }
    }}

    color: rgb(0, 0, 0);
`;

export const SInputBox = styled.input`
    --main-color: ${({ $inputMainColor }) => $inputMainColor};

    height: ${({ $inputHeight }) => $inputHeight}px;
    width: ${({ $inputWidth }) => $inputWidth}px;

    box-sizing: border-box;
    border: none;
    border-bottom: 3px solid rgba(var(--main-color), 0.3);

    padding-left: 10px;

    font-size: ${({ $inputFontSize }) => $inputFontSize}px;

    &:focus {
        outline: none;
        border-bottom-color: rgba(var(--main-color), 1);
    }
`

export const SButtonBox = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ $color }) => $color};
    background-color: ${({ $backgroundColor }) => $backgroundColor};

    border: none;

    cursor: pointer;

    ${({ $buttonSort }) => {
        switch ($buttonSort) {
            case 'big':
                return 'font-size: 30px; font-weight: 700; width: 300px; padding: 10px; border-radius: 10px; margin: 30px';
            case 'medium' : 
                return 'font-size: 15px; font-weight: 700; height:50px; width: 150px; padding: 2px; border-radius: 10px;';
            default :
                return null;
        }
    }};
`