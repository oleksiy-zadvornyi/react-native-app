import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DeleteSvg() {
  return (
    <Svg height="28px" width="28px" viewBox="0 0 48 48" fill="red">
      <Path d="M41 48H7V7h34v41zM9 46h30V9H9v37z" />
      <Path d="M35 9H13V1h22v8zM15 7h18V3H15v4zM16 41a1 1 0 01-1-1V15a1 1 0 112 0v25a1 1 0 01-1 1zM24 41a1 1 0 01-1-1V15a1 1 0 112 0v25a1 1 0 01-1 1zM32 41a1 1 0 01-1-1V15a1 1 0 112 0v25a1 1 0 01-1 1z" />
      <Path d="M0 7H48V9H0z" />
    </Svg>
  );
}

export default DeleteSvg;
