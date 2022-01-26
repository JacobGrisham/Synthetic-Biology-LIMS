import React, { Component } from 'react';
import ServerError from './placeholders/Error';
import ServerErrorImage from '../../assets/images/500.svg';

// Typescript was throwing errors when I separated the props and the state
interface IPropsState {
  error?: any;
  errorInfo?: any;
  children?: JSX.Element;
}

// Should remove `{},any` and replace it with `IPropsState` or ideally `IErrorBoundaryState, IErrorBoundaryProps`
// `{},any` solution here:
export default class ErrorBoundary extends Component<{},any> {
  constructor(props: IPropsState){
    super(props);
    this.state = {
      error: '',
      errorInfo: ''
    }
  }

  componentDidCatch(error:any, errorInfo:any) {
    this.setState({ error: error, errorInfo: errorInfo })
  }

  render() {
    return this.state.error ? <ServerError error={this.state.error} errorInfo={this.state.errorInfo} image={ServerErrorImage}/> : this.props.children
  }
}