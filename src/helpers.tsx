import { container } from './DI';
import { observer } from 'mobx-react';
import * as React from 'react';

interface IInjectProps {
  [typeName: string]: symbol;
}

interface ICallbackResult {
  [objName: string]: any;
}

export function InjectProps(
  props: IInjectProps,
  callback?: (s: any) => ICallbackResult,
) {
  return function(Component: React.ComponentClass<any>): any {
    let newProps = Object.keys(props)
      .map(k => ({ [k]: container.get(props[k]) }))
      .reduce((c, a) => ({ ...a, ...c }));

    if (callback) newProps = callback({ ...newProps });

    const DecoratedComponent = observer(Component);
    class Wrapper extends React.Component {
      render() {
        return <DecoratedComponent {...props} {...newProps} />;
      }
    }

    return Wrapper;
  };
}
