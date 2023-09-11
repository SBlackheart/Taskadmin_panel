import React from 'react';
import "./Control.css";
const control = () => {
    return (
        <div className="control-panel">
            <header className="header">
                <h1>Control Room</h1>
            </header>
            <h2>Control Panel</h2>
            <button>Start</button>
            <button>Stop</button>
            <button>Restart</button>
        </div>
    );
};

export default control;
