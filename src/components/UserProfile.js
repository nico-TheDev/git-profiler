import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GhPolyglot from "gh-polyglot";

import UserDetails from "./UserDetails";
import Loader from "./Loader";

export default function UserProfile() {
  const params = useParams();
  const [profileData, setProfileData] = useState(null);
  const [profileStats, setProfileStats] = useState(null);
  const [profileRepos, setProfileRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = async () => {
    getProfileRepos();
    try {
      const response = await fetch(
        `https://api.github.com/users/${params.username}`
      );
      const data = await response.json();
      setProfileData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getProfileRepos = () => {
    const targetUser = new GhPolyglot(`${params.username}/git-stats`);

    targetUser.getAllRepos((err, stats) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(stats);
        const repos = stats
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((repo) => ({
            id: repo.id,
            url: repo.html_url,
            description: repo.description,
            forks: repo.forks_count,
            watchers: repo.watchers_count,
            size: repo.size,
            language: repo.language,
            name: repo.name,
            stars: repo.stargazers_count,
          }));

        const topRepos = repos.length > 9 ? repos.slice(0, 9) : repos;

        console.log(topRepos);
        setProfileRepos(topRepos);
      }
    });
  };

  useEffect(() => {
    getProfileData();
  }, [params.username]);

  return (
    <div className="bg-gray-900">
      {isLoading ? <Loader /> : null}
      {profileData && <UserDetails profile={profileData} />}
    </div>
  );
}
