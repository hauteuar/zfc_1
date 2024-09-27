// src/components/AdminPage.jsx

import React, { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc, deleteDoc, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase"; // Firebase initialized
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase storage functions
import Calendar from 'react-calendar'; // React Calendar component
import 'react-calendar/dist/Calendar.css'; // Optional CSS for the calendar
import './AdminPage.css'; // Import custom CSS file
import { format } from "date-fns"; // Ensure date-fns is installed

const AdminPage = () => {
  const [meetings, setMeetings] = useState([]);
  const [articles, setArticles] = useState([]);
  const [ads, setAds] = useState([]);
  const [activeTab, setActiveTab] = useState('meetings'); // To track which tab is active
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [newAdImage, setNewAdImage] = useState(null);
  const [newArticle, setNewArticle] = useState({ title: '', detail: '', image: null });
  const [socialMediaSelections, setSocialMediaSelections] = useState({
    facebook: false,
    linkedin: false,
    instagram: false,
    whatsapp: false,
  });

  const validPassword = 'Zfc_2024@Sep';

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const meetingSnapshot = await getDocs(collection(db, "meetingRequests"));
        const meetingData = meetingSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMeetings(meetingData);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };

    const fetchData = async () => {
      try {
        const articlesCollection = collection(db, "articles");
        const adsCollection = collection(db, "ads");

        const articleSnapshot = await getDocs(articlesCollection);
        const adSnapshot = await getDocs(adsCollection);

        const articlesData = articleSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })).sort((a, b) => b.createdAt.seconds - a.createdAt.seconds); // Sort by latest

        const adsData = adSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setArticles(articlesData);
        setAds(adsData);
      } catch (error) {
        console.error("Error fetching articles and ads:", error);
      }
    };

    fetchMeetings();
    fetchData();
  }, []);

  const confirmMeeting = async (id) => {
    try {
      const meetingDoc = doc(db, "meetingRequests", id);
      await updateDoc(meetingDoc, {
        status: "confirmed",
      });
      setMeetings((prev) =>
        prev.map((meeting) =>
          meeting.id === id ? { ...meeting, status: "confirmed" } : meeting
        )
      );
      alert("Meeting confirmed successfully!");
    } catch (error) {
      console.error("Error confirming meeting:", error);
      alert("There was an error confirming the meeting.");
    }
  };

  const handleDeleteAds = async (id) => {
    try {
      await deleteDoc(doc(db, "ads", id));
      setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
      alert("Ad deleted successfully!");
    } catch (error) {
      console.error("Error deleting ad:", error);
      alert("There was an error deleting the ad.");
    }
  };

  const handleDeleteArticles = async (id) => {
    try {
      await deleteDoc(doc(db, "articles", id));
      setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
      alert("Article deleted successfully!");
    } catch (error) {
      console.error("Error deleting article:", error);
      alert("There was an error deleting the article.");
    }
  };

  const handleLogin = () => {
    if (password === validPassword) {
      setIsLoggedIn(true);
      setPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const storageRef = ref(storage, `images/${file.name}_${Date.now()}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      return url; // Get the image URL after upload
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleAdUploaddb = async () => {
    if (newAdImage) {
      try {
        const imageUrl = await handleImageUpload(newAdImage);
        await addDoc(collection(db, "ads"), {
          imageUrl,
          uploadedAt: new Date(),
        });
        alert("Ad uploaded successfully to Firestore!");
        setNewAdImage(null);
      } catch (error) {
        alert("There was an error uploading the ad.");
      }
    } else {
      alert("Please select an image for the ad.");
    }
  };

  const handleArticleUpload = async () => {
    if (newArticle.title && newArticle.detail && newArticle.image) {
      try {
        const imageUrl = await handleImageUpload(newArticle.image);
        const synopsis = newArticle.detail.substring(0, 150) + "..."; // Generate synopsis
        await addDoc(collection(db, "articles"), {
          title: newArticle.title,
          imageUrl,
          detailUrl: newArticle.detail,
          synopsis,
          createdAt: new Date(),
        });
        alert("Article uploaded successfully!");
        setNewArticle({ title: '', detail: '', image: null });
      } catch (error) {
        alert("There was an error uploading the article.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  const postToFacebook = async (imageUrl, message) => {
    const pageAccessToken = "YOUR_FACEBOOK_PAGE_ACCESS_TOKEN"; // You need to get this token
    const pageId = "YOUR_PAGE_ID";
    
    try {
      const response = await fetch(`https://graph.facebook.com/${pageId}/photos`, {
        method: "POST",
        body: JSON.stringify({
          url: imageUrl,
          caption: message,
          access_token: pageAccessToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error posting to Facebook:", error);
    }
  };

  const postToLinkedIn = async (imageUrl, message) => {
    const linkedInAccessToken = "YOUR_LINKEDIN_ACCESS_TOKEN";
    const linkedInApiUrl = "https://api.linkedin.com/v2/shares";

    const body = {
      owner: "urn:li:organization:YOUR_ORG_ID",
      subject: "New Ad",
      text: {
        text: message,
      },
      distribution: {
        linkedInDistributionTarget: {},
      },
      content: {
        contentEntities: [
          {
            entityLocation: imageUrl,
            thumbnails: [
              {
                resolvedUrl: imageUrl,
              },
            ],
          },
        ],
        title: "Ad Title",
      },
    };

    try {
      const response = await fetch(linkedInApiUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${linkedInAccessToken}`,
          "Content-Type": "application/json",
          "X-Restli-Protocol-Version": "2.0.0",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error posting to LinkedIn:", error);
    }
  };

  const handleAdUploadSocialMedia = async () => {
    if (newAdImage) {
      try {
        const imageUrl = await handleImageUpload(newAdImage);
        await addDoc(collection(db, "ads"), {
          imageUrl,
          uploadedAt: new Date(),
        });

        const message = "Check out our new ad!";
        
        // Post based on selections
        if (socialMediaSelections.facebook) {
          await postToFacebook(imageUrl, message);
        }
        if (socialMediaSelections.linkedin) {
          await postToLinkedIn(imageUrl, message);
        }

        alert("Ad uploaded and posted to selected social media platforms!");
        setNewAdImage(null);
      } catch (error) {
        alert("There was an error uploading the ad and posting to social media.");
      }
    } else {
      alert("Please select an image for the ad.");
    }
  };

  const handleSocialMediaChange = (platform) => {
    setSocialMediaSelections(prevState => ({
      ...prevState,
      [platform]: !prevState[platform],
    }));
  };

  const renderMeetingsTab = () => {
    // Filter meetings based on selectedDate
    const filteredMeetings = meetings.filter(meeting => {
      if (!meeting.date || !meeting.date.seconds) return false; // Ensure date exists
      const meetingDate = new Date(meeting.date.seconds * 1000);
      return (
        meetingDate.toDateString() === selectedDate.toDateString()
      );
    });

    return (
      <div className="tab-content meetings-tab">
        <div className="calendar-section">
          <h1>Manage Meetings</h1>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>
        <div className="meetings-section">
          <h2>Meetings on {selectedDate.toDateString()}</h2>
          {filteredMeetings.length === 0 ? (
            <p>No meetings scheduled for this date.</p>
          ) : (
            <ul>
              {filteredMeetings.map((meeting) => {
                // Check if 'slot' exists
                const hasSlot = meeting.slot && meeting.slot.seconds;
                const meetingTime = hasSlot
                  ? format(new Date(meeting.slot.seconds * 1000), "hh:mm a")
                  : "Direct Consultation";

                return (
                  <li key={meeting.id} className="meeting-item">
                    <strong>{meeting.firstName} {meeting.lastName}</strong> - {meetingTime} - {meeting.status}
                    {meeting.status === "pending" && (
                      <button onClick={() => confirmMeeting(meeting.id)}>Confirm</button>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  };

  const renderAdsTab = () => (
    <div className="tab-content">
      <h1>Manage Ads and News</h1>
      <div className="articles-section">
        <h2>Articles</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id} className="article-item">
              <strong>{article.title}</strong> - {new Date(article.createdAt.seconds * 1000).toLocaleDateString()}
              <p>{article.synopsis}</p>
              <button onClick={() => handleDeleteArticles(article.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="ads-section">
        <h2>Ads</h2>
        <ul>
          {ads.map((ad) => (
            <li key={ad.id} className="ad-item">
              <img src={ad.imageUrl} alt="ad" width="100" />
              <button onClick={() => handleDeleteAds(ad.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderUploadTab = () => (
    <div className="tab-content">
      <h1>Upload New Article</h1>
      <input
        type="text"
        placeholder="Title"
        value={newArticle.title}
        onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
      />
      <textarea
        placeholder="Detail"
        value={newArticle.detail}
        onChange={(e) => setNewArticle({ ...newArticle, detail: e.target.value })}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setNewArticle({ ...newArticle, image: e.target.files[0] })}
      />
      <button onClick={handleArticleUpload} className="primary-btn">Upload Article to Firestore</button>

      <h1>Upload New Ad</h1>
      <input type="file" accept="image/*" onChange={(e) => setNewAdImage(e.target.files[0])} />
      <button onClick={handleAdUploaddb} className="primary-btn">Upload Ad to Firestore</button>
    </div>
  );

  const renderSocialMediaTab = () => (
    <div className="tab-content">
      <h1>Upload New Ad and Post to Social Media</h1>
      <input type="file" accept="image/*" onChange={(e) => setNewAdImage(e.target.files[0])} />
      
      <h3>Select Social Media Platforms:</h3>
      <div className="social-media-options">
        <label>
          <input
            type="checkbox"
            checked={socialMediaSelections.facebook}
            onChange={() => handleSocialMediaChange('facebook')}
          />
          Facebook
        </label>
        <label>
          <input
            type="checkbox"
            checked={socialMediaSelections.linkedin}
            onChange={() => handleSocialMediaChange('linkedin')}
          />
          LinkedIn
        </label>
        <label>
          <input
            type="checkbox"
            checked={socialMediaSelections.instagram}
            onChange={() => handleSocialMediaChange('instagram')}
          />
          Instagram (Coming Soon)
        </label>
        <label>
          <input
            type="checkbox"
            checked={socialMediaSelections.whatsapp}
            onChange={() => handleSocialMediaChange('whatsapp')}
          />
          WhatsApp (Coming Soon)
        </label>
      </div>

      <button onClick={handleAdUploadSocialMedia} className="primary-btn">Upload Ad and Post to Selected Platforms</button>
    </div>
  );

  return (
    <div className="admin-page">
      {!isLoggedIn ? (
        <div className="login-container">
          <h1>Admin Login</h1>
          <input
            type="password"
            className="login-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="primary-btn">Login</button>
        </div>
      ) : (
        <div>
          <nav className="tab-navigation">
            <button className={`tab-btn ${activeTab === 'meetings' ? 'active' : ''}`} onClick={() => setActiveTab('meetings')}>Meetings</button>
            <button className={`tab-btn ${activeTab === 'ads' ? 'active' : ''}`} onClick={() => setActiveTab('ads')}>Ads and News</button>
            <button className={`tab-btn ${activeTab === 'upload' ? 'active' : ''}`} onClick={() => setActiveTab('upload')}>Upload</button>
            <button className={`tab-btn ${activeTab === 'social' ? 'active' : ''}`} onClick={() => setActiveTab('social')}>Social Media</button>
          </nav>

          {activeTab === 'meetings' && renderMeetingsTab()}
          {activeTab === 'ads' && renderAdsTab()}
          {activeTab === 'upload' && renderUploadTab()}
          {activeTab === 'social' && renderSocialMediaTab()}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
