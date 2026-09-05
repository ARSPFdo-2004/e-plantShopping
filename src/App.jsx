import React from 'react';
import ProductList from './ProductList';

function App() {
    const handleHomeClick = () => {
        console.log("Home clicked");
    };

    return (
        <ProductList
            onHomeClick={handleHomeClick}
        />
    );
}

export default App;