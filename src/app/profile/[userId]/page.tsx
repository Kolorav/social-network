"user client";

import "./style.css";
import ProfilePosts from "@/components/profile/posts";
import ProfileTopSection from "@/components/profile/top-section";

function ProfilePage(props: any) {
  return (
    <div className="profile-main-container">
      <ProfileTopSection />
      <div className="profile-content">
        <ProfilePosts />
      </div>
    </div>
  );
}

export default ProfilePage;
