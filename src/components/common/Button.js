import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import palette from '../../lib/styles/Palette';

const StyledButton = styled.button`
    border: none;
    border-radious: 4px;
    font-size: 1rem;
    fornt-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: ${palette.gray[8]};
    & hover {
        background: ${palette.gray[6]};
    }
    ${props =>
        props.fullwidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `}
    ${props =>
        props.cyan &&
        css`
            background: ${palette.cyan[5]};
            & hover {
                background: ${palette.cyan[4]};
            }
        `}
`;

const Button = ({ to, ...rest }) => {
    const navigate = useNavigate();
    const onClick = e => {
        //to가 있다면 to 페이지로 이동
        if (to) {
            navigate(to);
        }
        if (rest.onClick) {
            rest.onClick(e);
        }
    };
    return <StyledButton {...rest} onClick={onClick} />;
};

export default Button;
