import React from "react";
import story from "../../image/story2.png";
import story1 from "../../image/story3.png";
import profile from "../../image/profile.jpg";
import googlePlay from "../../image/googlePlaye.png";
import appStore from "../../image/appstore.png";
import sugestedProfile from "../../image/suggested.png";
import friend from "../../image/friend.png";
import profile1 from "../../image/profile-1.png";
import NewsFeed from "./NewsFeed/NewsFeed";
import sadek from "../../image/sadekpro.png";

const Story = () => {
  return (
    <div className="row">
      <div className="col-lg-3 ">
        <div className="story-card rounded">
          <h3 className="mb-3">Explore</h3>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-save"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            <span className="ms-3">Saved Post</span>
          </span>
          <br />
          <br />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="ms-3">People</span>
          </span>
          <br />
          <br />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="ms-3">Group</span>
          </span>
          <br />
          <br />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-layout"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <span className="ms-3">Pages</span>
          </span>
          <br />
          <br />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-printer"
            >
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            <span className="ms-3">Events</span>
          </span>
        </div>
        {/* app store playestore */}
        <div className="story-card rounded pb-3 mt-3">
          <h6>Download app</h6>
          <div className="d-flex mt-3">
            <img src={appStore} className="img-fluid" alt="" />
            <img src={googlePlay} className=" ms-3 img-fluid" alt="" />
          </div>
        </div>
        {/* suggested People */}
        <div className="story-card rounded pb-3 mt-3">
          <h5 className="mb-3">suggested People</h5>
          <div className="row">
            <div className="col-lg-3">
              <img src={sadek} alt="" className="" />
            </div>
            <div className="col-lg-9">
              <div className="d-flex">
                <p className="ms-2 mt-2">Sadek Hussain</p>
                <button className=" ms-2 rounded btn">add +</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex">
              <img src={story} alt="" />
              <img src={story1} alt="" />
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
        <div className="story-card rounded mt-3">
          <img src={profile} alt="" />
          <input className="ms-4 w-75 ps-2" placeholder="Create a new post" />
        </div>
        {/* newsfeed */}
        <NewsFeed></NewsFeed>
      </div>
      <div className="col-lg-3">
        <div className="story-card rounded pb-5">
          <h5>You Might Like</h5>
          <div className="row">
            <div className="col-lg-3">
              <img src={profile} alt="" />
            </div>
            <div className="col-lg-3 ms-3">
              <h6 className="ms-3 mt-4">sadfa</h6>
              <p className="ms-3">sfdsd</p>
            </div>
          </div>

          <br />
          <br />
          <button className="ps-4 pe-4 pt-1 pb-1 btn">Ignore</button>
          <button className=" ms-2 ps-4 pe-4 pt-1 pb-1 follow-btn">
            Follow
          </button>
        </div>
        {/* your friend */}
        <div className="story-card rounded pb-3 mt-3">
          <h5 className="mb-3">Your Friends</h5>
          <span>
            <div class="input-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>

              <input type="text" />
            </div>
          </span>

          <div className="row">
            <div className="col-lg-2">
              <img src={profile1} alt="" className="" />
            </div>
            <div className="col-lg-10">
              <p className="mt-1 ms-3">Admin</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <img src={friend} alt="" className="ms-1" />
            </div>
            <div className="col-lg-2">
              <p className="ms-2 mt-1">Kazi Mussarraf Shisir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
