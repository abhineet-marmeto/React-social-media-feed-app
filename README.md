# Social Media Post Feed

A **React-based** social media post feed with hashtag filtering, pagination, post creation with image uploads, comment system, like feature, and settings for username, profile picture, and dark mode.

## 📌 Features
✔ **Post Feed** – Displays posts with images, hashtags, likes, and comments.  
✔ **Post Creation** – Users can create new posts with text, hashtags, and image uploads.  
✔ **Hashtag Filtering** – Clickable hashtags filter posts based on selected tags.  
✔ **Pagination** – Displays **10 posts per page** with navigation.  
✔ **Comment System** – Users can add and view comments on posts.  
✔ **Like Feature** – Users can like posts (persists in session storage).  
✔ **Settings Page** – Allows changing **username, profile picture, and theme (light/dark mode)**.  
✔ **Dark Mode** – Toggle between **light & dark themes** (persists across sessions).  
✔ **Session Storage Persistence** – All data (posts, likes, comments, username, theme) is stored in **session storage**.

---

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS  
- **State Management**: Context API  
- **Routing**: React Router  
- **Storage**: Session Storage  

---

## 💂️ Folder Structure
```
social-media-feed
 ├ public
 ├ src
 │ ├ components
 │ │ ├ 📄 CommentSection.jsx
 │ │ ├ 📄 Header.jsx
 │ │ ├ 📄 PostCard.jsx
 │ │ ├ 📄 PostCreator.jsx
 │ │ ├ 📄 HashtagFilter.jsx
 │ │ └ 📄 Pagination.jsx
 │ ├ context
 │ │ └ 📄 PostContext.jsx
 │ ├ pages
 │ │ ├ 📄 Home.jsx
 │ │ └ 📄 Settings.jsx
 │ ├ utils
 │ │ └ 📄 dummyData.js
 │ ├ 📄 App.jsx
 │ ├ 📄 index.js
 │ └ 📄 styles.css
 ├ 📄 package.json
 └ 📄 README.md
```

---

## 🔗 Routing Structure
| **Route**              | **Functionality**                                      |
|------------------------|-------------------------------------------------------|
| `/home/page/1`        | Loads the home page with paginated posts.             |
| `/settings`           | Opens the settings page.                              |
| `/tag/react/page/1`   | Filters posts by the `#react` hashtag.                |
| `/tag/react&shopify/page/1` | Filters posts by `#react` and `#shopify`. |

---

## 📜 Session Storage Handling
| **Data Stored**       | **Key**            |
|----------------------|------------------|
| Posts               | `posts`          |
| Liked Posts         | `likedPosts`     |
| Comments           | `comments`       |
| Username           | `username`       |
| Profile Image      | `profileImage`   |
| Theme (Dark/Light) | `theme`          |
