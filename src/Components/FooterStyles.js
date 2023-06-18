import styled from 'styled-components';

export const Box = styled.div`
padding:10px;
background: white;
position: fixed;
bottom: 0;
width: 100%;
border-radius: 80px 80px 0px 0px;
box-shadow: 2px -5px 25px -13px #242A63;


@media (max-width: 1000px) {
	padding: 10px 10px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #000;
margin-bottom: 20px;
font-size: 12px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 12px;
color: #000;
margin-bottom: 40px;
font-weight: bold;
`;
