import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

function ProfileTopSection() {
  const user: any = {
    username: "Sourav Koley",
    handle: "Kolorav",
  };

  return (
    <section className="profile-top-section">
      <button className="profile-edit-button">
        <PencilSquareIcon className="w-6 h-6" />
      </button>
      <section className="profile-cover-image">
        <Image src="/background.jpg" alt="Cover Image" fill />
      </section>
      <section className="profile-image-container">
        <div className="profile-image">
          <Image src="/background.jpg" alt="Cover Image" fill />
        </div>
      </section>
      <section className="profile-details">
        <p className="profile-username">{user.username}</p>
        <p className="profile-user-handle">@{user.handle}</p>
      </section>
    </section>
  );
}

export default ProfileTopSection;
