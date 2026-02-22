import '@atlaskit/css-reset';

import Example from './example';
import AppProvider from '@atlaskit/app-provider';


function App() {

    return (
        <AppProvider>
            <Example/>
        </AppProvider>
    )
}

export default App
