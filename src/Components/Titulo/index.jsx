import styled from "styled-components";

export const Titulo = styled.h1`
  color: ${({theme}) => theme.text};
  padding: 25px;
`;

// --> Não precisamos mais utilizar esse componente, pois o título será um componente APENAS estilizado  <--
// --> Já fica entendido que a tag h1 receberá um conteúdo vindo de um children de um componente pai  <--
// --> A tag está sendo chamada lá no Container <--

// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };
// export default Titulo;
