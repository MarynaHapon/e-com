// Core
import React from 'react';

// Other
import { Overlay, Image, Text } from './index.styles';
import ErrorImage from '../../assets/images/error.png'

export class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
   // process the error

   return {
     hasError: true
   }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Overlay>
          <Image src={ErrorImage} />
          <Text>Something went wrong</Text>
        </Overlay>
      )
    } else {
      return this.props.children;
    }
  }
}
