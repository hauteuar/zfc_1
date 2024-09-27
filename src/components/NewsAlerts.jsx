import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Importing additional modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./NewsAlerts.module.css";
import { db } from "../firebase"; // Firestore initialized here
import { collection, getDocs } from "firebase/firestore"; // Import collection and getDocs

const NewsAlerts = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [ads, setAds] = useState([]);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchNewsAndAds = async () => {
      try {
        const newsCollectionRef = collection(db, "articles");
        const newsSnapshot = await getDocs(newsCollectionRef);
        const fetchedNews = newsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const adsCollectionRef = collection(db, "ads");
        const adsSnapshot = await getDocs(adsCollectionRef);
        const fetchedAds = adsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNewsItems(fetchedNews);
        setAds(fetchedAds);
      } catch (error) {
        console.error("Error fetching news and ads:", error);
      }
    };

    fetchNewsAndAds();
  }, []);

  return (
    <section className={styles.newsAlerts}>
      <h2>News & Alerts</h2>

      {newsItems.length === 0 && ads.length === 0 ? (
        <p>No news or ads available.</p>
      ) : (
        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1, // Show 1 slide on very small screens
            },
            768: {
              slidesPerView: 1, // Show 1 slide on mobile screens
            },
            1024: {
              slidesPerView: 2, // Show 2 slides on tablets
            },
            1280: {
              slidesPerView: 3, // Show 3 slides on large screens
            },
          }}
        >
          {newsItems.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard item={item} />
            </SwiperSlide>
          ))}
          {ads.map((ad) => (
            <SwiperSlide key={ad.id}>
              <AdCard ad={ad} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

const NewsCard = ({ item }) => {
  const { imageUrl, title, synopsis, createdAt } = item;

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className={styles.newsCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} />
        <div className={styles.ribbon}>
          {new Date(createdAt.seconds * 1000).toLocaleDateString()}
        </div>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{truncateText(synopsis, 100)}</p>
        <a href={`/news`} className={styles.readMore}>
          Read Article
        </a>
      </div>
    </div>
  );
};

const AdCard = ({ ad }) => {
  const { imageUrl, uploadedAt } = ad;

  return (
    <div className={styles.adCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Advertisement" />
        <div className={styles.ribbon}>
          {new Date(uploadedAt.seconds * 1000).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default NewsAlerts;
