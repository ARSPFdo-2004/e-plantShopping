import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});

    const dispatch = useDispatch();

    // Get cart items from Redux store
    const CartItems = useSelector((state) => state.cart.items);

    // Calculate total quantity of all items in the cart
    const calculateTotalQuantity = () => {
        return CartItems
            ? CartItems.reduce((total, item) => total + item.quantity, 0)
            : 0;
    };

    // Add product to Redux cart
    const handleAddToCart = (product) => {
        dispatch(addItem(product));

        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
        setShowPlants(false);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = () => {
        setShowCart(false);
        setShowPlants(true);
    };

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "images/snakeplant.jpg",
                    description: "Produces oxygen at night and improves indoor air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "images/spiderplant.jpg",
                    description: "Easy to grow and helps remove indoor pollutants.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "images/peacelily.jpg",
                    description: "A beautiful plant that helps purify indoor air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "images/bostonfern.jpg",
                    description: "Adds humidity and helps clean indoor air.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "images/rubberplant.jpg",
                    description: "A low-maintenance plant that improves air quality.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "images/aloevera.jpg",
                    description: "A useful succulent known for its medicinal properties.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "images/lavender.jpg",
                    description: "Known for its relaxing fragrance.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "images/jasmine.jpg",
                    description: "Produces beautiful flowers with a sweet fragrance.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "images/rosemary.jpg",
                    description: "A fragrant herb commonly used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "images/mint.jpg",
                    description: "A refreshing aromatic herb.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "images/lemonbalm.jpg",
                    description: "A fragrant herb with a pleasant lemon scent.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: "images/hyacinth.jpg",
                    description: "A flowering plant with a strong sweet fragrance.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image: "images/oregano.jpg",
                    description: "An aromatic herb that can help repel insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image: "images/marigold.jpg",
                    description: "A colorful flowering plant known to repel some pests.",
                    cost: "$8"
                },
                {
                    name: "Geraniums",
                    image: "images/geranium.jpg",
                    description: "A flowering plant with an aromatic scent.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "images/basil.jpg",
                    description: "A popular herb that can help repel mosquitoes.",
                    cost: "$9"
                },
                {
                    name: "Lavender",
                    image: "images/lavender.jpg",
                    description: "Its fragrance can help repel insects.",
                    cost: "$20"
                },
                {
                    name: "Catnip",
                    image: "images/catnip.jpg",
                    description: "Known for helping repel mosquitoes.",
                    cost: "$13"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "images/aloevera.jpg",
                    description: "Widely used for skin and medicinal purposes.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "images/echinacea.jpg",
                    description: "Traditionally used for medicinal purposes.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "images/peppermint.jpg",
                    description: "A refreshing herb commonly used for health purposes.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: "images/lemonbalm.jpg",
                    description: "Traditionally used as a calming medicinal herb.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "images/chamomile.jpg",
                    description: "Commonly used to make calming herbal tea.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "images/calendula.jpg",
                    description: "A flowering plant commonly used in herbal preparations.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "images/zzplant.jpg",
                    description: "A hardy plant that requires very little maintenance.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "images/pothos.jpg",
                    description: "An easy-to-grow indoor plant.",
                    cost: "$10"
                },
                {
                    name: "Snake Plant",
                    image: "images/snakeplant.jpg",
                    description: "A hardy plant that requires little water.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "images/castironplant.jpg",
                    description: "A very durable indoor plant.",
                    cost: "$20"
                },
                {
                    name: "Succulents",
                    image: "images/succulents.jpg",
                    description: "Small plants that require minimal watering.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "images/aglaonema.jpg",
                    description: "An attractive and easy-to-care-for indoor plant.",
                    cost: "$22"
                }
            ]
        }
    ];

    return (
        <div>
            <nav style={styleObj}>
                <div>
                    <h1>Paradise Nursery</h1>
                    <p>Where Green Meets Serenity</p>
                </div>

                <ul style={styleObjUl}>
                    <li>
                        <a href="#home" onClick={handleHomeClick} style={styleA}>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#plants" onClick={handlePlantsClick} style={styleA}>
                            Plants
                        </a>
                    </li>

                    <li>
                        <a href="#cart" onClick={handleCartClick} style={styleA}>
                            🛒 Cart ({calculateTotalQuantity()})
                        </a>
                    </li>
                </ul>
            </nav>

            {showCart ? (
                <CartItem
                    onContinueShopping={handleContinueShopping}
                />
            ) : (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1>
                                <div>{category.category}</div>
                            </h1>

                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div
                                        className="product-card"
                                        key={plantIndex}
                                    >
                                        <img
                                            className="product-image"
                                            src={plant.image}
                                            alt={plant.name}
                                        />

                                        <div className="product-title">
                                            {plant.name}
                                        </div>

                                        <div className="product-description">
                                            {plant.description}
                                        </div>

                                        <div className="product-cost">
                                            {plant.cost}
                                        </div>

                                        <button
                                            className="product-button"
                                            onClick={() =>
                                                handleAddToCart(plant)
                                            }
                                            disabled={
                                                addedToCart[plant.name]
                                            }
                                        >
                                            {addedToCart[plant.name]
                                                ? "Added to Cart"
                                                : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const styleObj = {
    background: '#4CAF50',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px'
};

const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px'
};

const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none'
};

export default ProductList;