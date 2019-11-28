import React, { Component } from 'react';
import './Dashboard.scss'
import OfflineCollection from '../OfflineCollection/OfflineCollection';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <OfflineCollection />
            </div>
        );
    }
}

export default Dashboard;