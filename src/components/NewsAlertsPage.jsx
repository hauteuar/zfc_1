import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Firestore initialized here
import styles from "../Styles/NewsAlertsPage.module.css";
import Modal from "./Modal";

const NewsAlertsPage = () => {
  const [articles, setArticles] = useState([]);
  const [ads, setAds] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null); // To track the selected ad

  useEffect(() => {
    const fetchData = async () => {
      const articlesCollection = collection(db, "articles");
      const adsCollection = collection(db, "ads");

      const articleSnapshot = await getDocs(articlesCollection);
      const adSnapshot = await getDocs(adsCollection);

      const articlesData = articleSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })).sort((a, b) => b.createdAt.seconds - a.createdAt.seconds); // Sort by latest

      const adsData = adSnapshot.docs.map((doc) => doc.data());

      setArticles(articlesData);
      setAds(adsData);
    };

    fetchData();
  }, []);

  const handleReadMore = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleAdClick = (ad) => {
    setSelectedAd(ad);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    setSelectedAd(null); // Close ad zoom view as well
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>News & Alerts</h1>

      <div className={styles.newsContainer}>
        {articles.map((article) => (
          <div className={styles.articleCard} key={article.id}>
            <img src={article.imageUrl} alt={article.title} className={styles.articleImage} />
            <div className={styles.articleContent}>
              <h2>{article.title}</h2>
              <p>
                {article.synopsis.length > 100 ? article.synopsis.substring(0, 100) + "..." : article.synopsis}
              </p>
              <button className={styles.readMoreBtn} onClick={() => handleReadMore(article)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.adsContainer}>
        <h2>Sponsored Ads</h2>
        <div className={styles.adGrid}>
          {ads.map((ad, index) => (
            <div className={styles.adCard} key={index} onClick={() => handleAdClick(ad)}>
              <img src={ad.imageUrl} alt="Advertisement" className={styles.adImage} />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedArticle && (
        <Modal onClose={handleCloseModal}>
          <h2>{selectedArticle.title}</h2>
          <p>{selectedArticle.synopsis}</p>
          <a href={selectedArticle.detailUrl} target="_blank" rel="noopener noreferrer">
            Read full article
          </a>
        </Modal>
      )}

      {isModalOpen && selectedAd && (
        <Modal onClose={handleCloseModal}>
          <img src={selectedAd.imageUrl} alt="Zoomed Ad" className={styles.zoomedAdImage} />
        </Modal>
      )}
    </div>
  );
};

export default NewsAlertsPage;
