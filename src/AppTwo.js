import React from 'react';

import styled from 'styled-components';

const appStyle = {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: "100vw",
    height: "100vh"
}

const cardStyle = {
    width: '400px',
    height: '250px',
    backgroundColor: 'teal'
}

function App() {
    return (
        <div style={appStyle} className='App'>
            <div style={cardStyle} className="card">
                <h1>I am a component</h1>
            </div>
        </div>
    )
}

export default App;