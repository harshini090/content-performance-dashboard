# Content Performance Dashboard

This project came from a simple question I had while using Netflix.

I recently spent a lot of time watching documentaries, including the *Evil Influencer* documentary. After finishing it, Netflix started recommending similar documentaries - which made sense - but it also suggested shows from completely different genres, including a sci-fi series (*The Rain*). I ended up liking some of those recommendations, which made me curious about how this actually works behind the scenes.

I know recommendation systems are powered by complex machine learning models, but what caught my interest was the **analysis side** of things - how engagement, watch time, completion, and trends might be analyzed and visualized to understand why certain content performs well and leads to these kinds of recommendations.

This project is my attempt to explore that curiosity through **data visualization**. It’s not about building a recommender system, but about understanding how engagement data can be aggregated, explored, and communicated.

---

## What This Project Does

This dashboard visualizes content engagement using a **synthetic dataset** designed to resemble streaming analytics data. It focuses on:

- Watch time across genres  
- Views over time (week-by-week trends)  
- Views across regions  
- Completion rate comparisons across titles and regions  

A region filter allows basic interaction so I could practice building **explorable dashboards** instead of static charts.

---

## How I Approached Building It

This project was built as part of my learning process. I used a combination of:
- documentation,
- online tutorials,
- community resources,
- and tools like ChatGPT

to understand unfamiliar concepts, debug issues, and iterate on my implementation.

Rather than copying solutions blindly, I focused on understanding *why* certain metrics, aggregations, and visualizations made sense. As I learned more, I adjusted the dataset, changed aggregations (sum vs average), and modified visualizations that didn’t clearly communicate insights. Over time, this helped me become more comfortable reasoning about the data and making changes independently.

---

## Why I Built It This Way

While working on this project, I realized that the hardest part isn’t drawing charts - it’s deciding **what to measure and how to interpret it**.

Some choices I made while learning:
- Prioritizing **watch time** over just views to better represent sustained engagement.
- Using **average completion rate** to reflect engagement quality rather than raw popularity.
- Choosing different visualization types (bar charts, line charts, and a heat-style table) based on what kind of comparison made the most sense.
- Keeping the UI simple so the focus stays on understanding the data rather than visual polish.

A lot of this work was iterative - some charts looked correct technically but didn’t tell a meaningful story until I refined them.

---

## What I Learned

This project helped me:
- Understand the difference between **dimensions and metrics** when analyzing data.
- Decide when to use **sum vs average** based on the question being asked.
- Debug and improve visualizations that were misleading or unclear.
- Structure a React project by separating components, data logic, and styling.
- Think more critically about how engagement data could inform content-related decisions.

Most importantly, it helped me move from simply following tutorials to **actually reasoning about analytics problems**.

---

## Tech Stack

- React  
- Recharts
- JavaScript  
- Vite  

---

## About the Data

All data used in this project is **synthetic** and created purely for learning and experimentation. It does not represent real Netflix data.

---

## What I’d Like to Improve Next

If I continue working on this project, I’d like to:
- Add derived engagement metrics.
- Improve accessibility and responsiveness.
- Connect the dashboard to a real or mock API.
- Explore how different engagement metrics might correlate with cross-genre recommendations.

## 
