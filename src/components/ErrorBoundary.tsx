import React from 'react';
import { Text, View } from 'react-native';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You could log error information here or report to an error tracking service
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View className='flex-1 items-center justify-center p-4'>
          <Text className='text-red-500 font-bold mb-2'>
            Something went wrong.
          </Text>
          {this.state.error && (
            <Text className='text-gray-700'>{this.state.error.message}</Text>
          )}
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
