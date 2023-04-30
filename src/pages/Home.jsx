import React from "react";
import Header from "../components/Header";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";
import { NavLink } from "react-router-dom";
import Card from "../components/shared/Card";
import { FeedbackProvider } from "../context/FeedbackContext";

function Home() {


  return (
    <FeedbackProvider>
      <div>
        <FeedbackForm  />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default Home;
