// Import - Styled Components
import styled from 'styled-components';

// Import - Tailwind
import tw from 'tailwind.macro';

// ----------------------------------------------------------------------------------------- //

export const Wrapper = styled.div`
  ${tw`bg-light tracking-wider`}

  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`;
