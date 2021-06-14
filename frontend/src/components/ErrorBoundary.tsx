import React, { Component } from 'react';

// Typescript was throwing errors when I separated the props and the state
interface IPropsState {
  hasError: boolean;
  children?: JSX.Element;
}

// Should remove `{},any` and replace it with `IPropsState` or ideally `IErrorBoundaryState, IErrorBoundaryProps`
// `{},any` solution here:
export default class ErrorBoundary extends Component<{},any> {
  constructor(props: IPropsState){
    super(props);
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    return this.state.hasError ? <h1>Oooops. Something went wrong with React</h1> : this.props.children
  }
}