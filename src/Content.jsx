import React from 'react';
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import five from './assets/five.png';
import six from './assets/six.png';
import seven from './assets/seven.png';
import recipe1 from './assets/recipe1.png';
import recipe2 from './assets/recipe2.png';
import recipe3 from './assets/recipe3.png';

function Carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active d-flex">
                    <img src={four} className="d-block w-100 carousel-img" alt="First slide" />
                    <div className="carousel-caption-left">
                        <h5>Welcome to NutriBite</h5>
                        <p style={{fontSize: '2em'}}>Your Guide to Healthy Eating</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={two} className="d-block w-100 carousel-img" alt="Second slide" />
                    <div className="carousel-caption-left" style={{ top: '70%', left: '10%', transform: 'translateY(-50%)', color: 'black' }}>
                    
                        <h5>Your go-to source for comprehensive food nutrition information</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={three} className="d-block w-100 carousel-img" alt="Third slide" />
                    <div className="carousel-caption-left" style={{ width: '35em', top: '50%', left: '7%', transform: 'translateY(-50%)', color: 'black' }}>
                        
                        <h5>Discover how the right nutrition can transform your life. At NutriBite, we provide expert advice, recipes, and tips to help you make informed food choices and live a healthier, more vibrant life.</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

function SpecialImages() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12 ">
                    <div className="card">
                        <div className="position-relative">
                            <img
                                src={seven}
                                className="specialImg img-fluid rounded"
                                alt="Special Image"
                                style={{ width: '190vh', height: '45vh' }} // Ensure the image is responsive
                            />
                            <div className="position-absolute top-50 text-center text-white p-3 bg-opacity-60 bg-dark rounded">
                                <h2>What is Food Nutrition?</h2>
                                <p>
                                    Food nutrition is the science of how food affects your health and well-being. It encompasses
                                    the study of nutrients—such as vitamins, minerals, proteins, fats, and carbohydrates—and
                                    how they interact with your body. Good nutrition is essential for maintaining overall health,
                                    boosting energy levels, and preventing chronic diseases.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Card() {
    const descriptions = [
        'Essential for immune function, vision, and bone health. Examples include Vitamin C (for immunity) and Vitamin D (for bone strength).',
        'Important for building strong bones, teeth, and regulating metabolism. Key minerals include calcium and iron.',
        'Crucial for building and repairing tissues, making enzymes and hormones. Found in meat, dairy, beans, and nuts.',
        'Provide energy, support cell growth, and protect organs. Healthy fats include avocados, nuts, and olive oil.',
        'Main source of energy. Includes fiber for digestion. Found in whole grains, fruits, and vegetables.'
    ];
    return (
        <div className="container mt-5">
            <div className="row"></div>
            <h3 style={{textAlign: 'center'}}>Key Nutrients and Their Benefits</h3>
            {/* Ensure all content is inside container */}
            <div className="row mt-4">
                {['Vitamins', 'Minerals', 'Proteins', 'Fats', 'Carbohydrates'].map((title, index) => (
                    <div key={index} className="col-md-3">
                        <div className="card mb-4" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{descriptions[index]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 
function Carousel2() {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h3 className="text-center">Tips for a Balanced Diet</h3>
                    <div id="carouselExample" className="carousel slide" style={{padding: '1em', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset'}}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h5>Incorporate a Rainbow of Fruits and Vegetables</h5>
                                <p>Aim to include a variety of colors in your diet, which ensures you get a range of nutrients.</p>
                            </div>
                            <div className="carousel-item">
                                <h5>Choose Whole Grains</h5>
                                <p>Opt for whole grains over refined grains for more fiber and nutrients.</p>
                            </div>
                            <div className="carousel-item">
                                <h5>Stay Hydrated</h5>
                                <p>Drink plenty of water throughout the day to support digestion and overall health.</p>
                            </div>
                            <div className="carousel-item">
                                <h5>Limit Processed Foods</h5>
                                <p>Reduce your intake of processed and sugary foods that can lead to weight gain and health issues.</p>
                            </div>
                            <div className="carousel-item">
                                <h5>Portion Control</h5>
                                <p>Be mindful of portion sizes to avoid overeating and maintain a healthy weight.</p>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Card2() {
    const images = [
        recipe1,
        recipe2,
        recipe3
    ];
    const descriptions = [
        'A nutrient-packed salad featuring quinoa, bell peppers, cucumbers, and a light lemon vinaigrette.',
        'Rich in omega-3 fatty acids, this dish is perfect for a healthy dinner.',
        'A delicious blend of mixed berries, Greek yogurt, and a sprinkle of chia seeds for a nutritious breakfast or snack.'
    ];
    return (
        <div className="container mt-4">
                <div className="row"></div>
                <h3 style={{textAlign: 'center'}}>Delicious and Nutritious Recipes</h3>
        {/* Ensure all content is inside container */}
        <div className="row mt-4">
            {['Quinoa Salad with Fresh Vegetables', 'Grilled Salmon with Asparagus', 'Berry Smoothie Bowl'].map((title, index) => (
                <div key={index} className="col-md-4">
                    <div className="card mb-4" style={{ width: '18rem' }}>
                        <img src={images[index]} className="card-img-top" alt={title} style={{ height: '18rem' }}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{descriptions[index]}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

function Content() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Carousel />
            </div>
            <div>
                <SpecialImages />
            </div>
            <div>
                <Card />
            </div>
            <div className="row">
                <Carousel2 />
            </div>
            <div>
                <Card2 />
            </div>
        </div>
    );
}

export default Content;
