import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
	children: React.ReactNode
	size?: string
	primary?: boolean,
	outline?: boolean
}

const StyledButton = styled.button`
	background-color:#eee;
	border: 0;
	color: #333;
	padding: 10px;
	border-radius: 2px;
	cursor: pointer;
	${(props) => props.outline && css`
		background-color: transparent;
		border: 1px solid #eee;
		color: #eee;
	`}
	${(props) => props.primary && css`
		background-color: #e58531;
		color: white;
	`
	}
	${(props) => props.size === 'l' && css`
	font-size: 1.2rem;
	padding: 10px 20px;
	`}
`

export default function Button({children, ...rest}: Props) {
	return (
		<StyledButton {...rest}>{children}</StyledButton>
	)
}