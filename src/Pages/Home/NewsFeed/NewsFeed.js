import React from "react";
import profile from "../../../image/profile.jpg";
import profile1 from "../../../image/profile-1.png";
import FirstComment from "../CommentSection/FirstComment";
import NewsFeedTow from "./NewsFeedTow";

const NewsFeed = () => {
  return (
    <div>
      <div className="story-card rounded mt-3">
        <div className="d-flex">
          <h5 className="me-5 text-danger">Public Post</h5>
          <h5>Friend Post</h5>
        </div>
      </div>
      {/* newsfeed */}
      <div className="story-card rounded mt-3">
        <div className="row mb-3">
          <div className="col-lg-2">
            <img src={profile1} alt="" />
          </div>
          <div className="col-lg-4">
            <p className="">Adnan Chowdhury</p>
            <span>
              <span className="">1 year ago</span>
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
                class="feather feather-chrome"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" y1="8" x2="12" y2="8"></line>
                <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
              </svg>
            </span>
          </div>
          <div className="col-lg-6 mt-3 d-flex justify-content-end">
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
              class="feather feather-chevron-down"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        <h5>Your Favourite Game</h5>
        <div className="row">
          <div className="col-lg-9">
            <div className="d-flex">
              <input type="checkbox" name="vehicle1" value="Bike" checked />
              <div className="ms-3 checkbox w-100 ps-2 rounded">
                <p>Added by You</p>
                <h5>Football</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <img src={profile1} alt="" />
            <p>1 vote</p>
          </div>
          <div className="col-lg-1">
            <div className="cross mt-3">
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
                class="feather feather-x-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="d-flex mt-3">
              <input type="checkbox" name="vehicle1" value="Bike" />
              <div className="ms-3 checkbox w-100 ps-2 rounded">
                <p>Added by You</p>
                <h5>Cricket</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-1">
            <div className="cross mt-3">
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
                class="feather feather-x-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="d-flex mt-3">
              <input type="checkbox" name="vehicle1" value="Bike" />
              <div className="ms-3 checkbox w-100 ps-2 rounded">
                <p>Added by You</p>
                <h5>Badminton</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-1">
            <div className="cross mt-3">
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
                class="feather feather-x-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
          </div>
        </div>
        <p className="text-end mt-2">1 Comment</p>
        <div className="d-flex justify-content-between container like p-2">
          <div>
            <h6>
              <spn className="me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-thumbs-up"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </spn>
              like
            </h6>
          </div>
          <div>
            <h6>
              <span className="me-1">
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
                  class="feather feather-message-square"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </span>
              comment
            </h6>
          </div>
          <div>
            <h6>
              <span className="me-1">
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
                  class="feather feather-corner-right-up"
                >
                  <polyline points="10 9 15 4 20 9"></polyline>
                  <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                </svg>
              </span>
              share
            </h6>
          </div>
        </div>
        <FirstComment></FirstComment>
      </div>
      <NewsFeedTow></NewsFeedTow>
    </div>
  );
};

export default NewsFeed;
