import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <DescriptionWeb />

                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default Home;    