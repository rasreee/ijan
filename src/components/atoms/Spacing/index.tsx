import React from 'react';

import { getStyledDiv } from './styles';

type Props = {
  height?: number
  width?: number
}

const Spacing: React.FC<Props> = ({ height = 0, width = 0 }) => {
  const Div = getStyledDiv(height, width)
  return (
    <Div>
    </Div>
  );
};

export default Spacing;
