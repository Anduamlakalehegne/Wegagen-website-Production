import React, { useEffect, useState } from 'react';
import Mega_Menu from '../Common/Mega_Menu';
import StikyNav from '../Common/StikyNav';
import Footer from '../Common/Footer';
import About_us from "../../../assets/Images/common.jpg";
import styles from './gallery.module.css';
import { API_BASE_URL } from '../Common/Config/Config';  // Import the base URL

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/gallery-1s?populate=*`);
                const data = await response.json();
                const imagesSorted = data.data
                    .flatMap(group => group.attributes.images.data)
                    .sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt));
                setImages(imagesSorted);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleClose = () => {
        setSelectedImageIndex(null);
    };

    const handleNext = () => {
        if (selectedImageIndex < images.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const handleBack = () => {
        if (selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

    return (
        <>
           
            <StikyNav />
            <Mega_Menu path="news" />
            <div>
                <img src={About_us} alt="About Us" />
            </div>
            <p style={{ fontSize: '30px', padding: '30px', fontWeight: '600', color: '#004360' }}>Gallery</p>
            <div className={styles.galleryContainer}>
                {images.map((image, index) => (
                    <div key={image.id} className={styles.imageContainer} onClick={() => handleImageClick(index)}>
                        <img src={`${API_BASE_URL}${image.attributes.url}`} alt={image.attributes.name} />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className={styles.modalOverlay} onClick={handleClose}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={handleClose}>&times;</button>
                        <img className={styles.modalImage} src={`${API_BASE_URL}${selectedImage.attributes.url}`} alt={selectedImage.attributes.name} />
                        <button className={styles.prevButton} onClick={handleBack}>&lt;</button>
                        <button className={styles.nextButton} onClick={handleNext}>&gt;</button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Gallery;
