import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDetails from "./UserDetails";

export default function UserProfile() {
  const params = useParams();
  const [profileData, setProfileData] = useState(null);
  const [profileStats, setProfileStats] = useState(null);
  const [profileRepos, setProfileRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProfileData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${params.username}`
      );
      const data = await response.json();
      setProfileData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, [params.username]);

  return (
    <div className="bg-gray-900">
      {profileData && <UserDetails profile={profileData} />}
    </div>
  );
}
