import '@atlaskit/css-reset';

import Example from './example';
import AppProvider from '@atlaskit/app-provider';


function App() {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <AppProvider>
                <Example/>
            </AppProvider>


        </div>
    )
}

export default App
