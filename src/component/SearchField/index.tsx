import axios from "axios";
import { useEffect, useState } from "react";

interface GitHubUser {
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  company: string | null;
  created_at: string; // Consider using Date type if you parse the string to a Date object
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean | null;
  html_url: string;
  id: number;
  location: string | null;
  login: string;
  name: string | null;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
}

const Index = () => {
  const [text, setText] = useState("");
  const [userSearch, setUserSearch] = useState<GitHubUser | {}>({});
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${text}`, {
          headers: {
            Authorization:
              "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",
          },
        });
        setUserSearch(res?.data);
        console.log(res?.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }, 1000);

    return () => {
      clearTimeout(delayDebounceFn);
      ;
    };
  }, [text]);

  const searchHandle = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div className="my-10 flex flex-col items-center">
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={searchHandle}
          className="w-[300px] h-[60px] border-[#000] border-solid border-2 rounded-md bg-slate-300 pl-2"
        />
      </div>
      {text === "" ? null : (
        <div className="bg-[#000] py-10 px-10 my-10">
          <div>
            <img
              src={userSearch?.avatar_url}
              alt=""
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="text-[#fff]">
            <p>
              Name : <span>{userSearch?.login}</span>
            </p>
            <p>
              follower : <span>{userSearch?.followers}</span>
            </p>
            <p>
              following : <span>{userSearch?.following}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
