import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './popupContent.module.css'; // Make sure the path to the CSS module is correct
import { FaTimes } from 'react-icons/fa';

const NotificationPopup = () => {
  const [latestNotification, setLatestNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const fetchNotifications = async () => {
      try { 
        const response = await axios.get('https://weg.back.strapi.wegagen.com/api/notifications?populate=*');
        const notifications = response.data.data;

        // Find the latest notification based on the updatedAt attribute
        const newestNotification = notifications.reduce((latest, current) => {
          return new Date(latest.attributes.updatedAt) > new Date(current.attributes.updatedAt) ? latest : current;
        }); 

        const notificationId = newestNotification.id;
        const seenNotifications = JSON.parse(localStorage.getItem('seenNotifications') || '[]');
        
        if (!seenNotifications.includes(notificationId)) {
          setLatestNotification(newestNotification);
          setIsVisible(true);
        }
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    const seenNotifications = JSON.parse(localStorage.getItem('seenNotifications') || '[]');
    seenNotifications.push(latestNotification.id);
    localStorage.setItem('seenNotifications', JSON.stringify(seenNotifications));
  };

  if (!isVisible) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupBox}>
        <button className={styles.closePop} onClick={handleClose}><FaTimes /></button>
        <p style={{color:'#ff6b0b', fontSize:'16px'}}>{latestNotification.attributes.name}</p>
        <p>{latestNotification.attributes.description.map(desc => desc.children.map(child => child.text).join('')).join(' ')}</p>
        {latestNotification.attributes.featured_image && (
          <img src={`https://weg.back.strapi.wegagen.com${latestNotification.attributes.featured_image.data.attributes.url}`} alt="Notification" style={{ maxWidth: '100%', marginTop: '20px' }} />
        )}
      </div> 
    </div>
  );
};

export default NotificationPopup;