import React from 'react';

function logProps(Component) {
     class LogProps extends React.Component {
        componentWillReceiveProps(nextProps){
            console.log(this.props);
            console.log(nextProps);
        }

        render(){
            return <Component {...this.props}/>
        }

    }
    LogProps.displayName = `LogProps(${Component.displayName || Component.name || 'Component'})`;

     return LogProps;
}

export default logProps;