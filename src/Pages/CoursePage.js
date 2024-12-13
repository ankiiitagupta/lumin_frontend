import React from "react";
import { Link } from "react-router-dom";
import { IoMdTime, IoIosGlobe, IoMdAlarm } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { MdOndemandVideo, MdNotes, MdCases, MdCheckCircleOutline } from "react-icons/md";
import "../index.css";

// Sample course data
const courseData = {
  title: "Labour Law (LB-403)",
  term: "2",
  courseId: "lb403",
  instructorName: {
    name: "John Doe",
    bio: "John is an experienced software engineer specializing in React and web development technologies. With over 10 years of experience, he has taught hundreds of students to become proficient React developers."
  },
  contents: [
    {
      topicName: "Topic 1",
      subTopics: [
        {
          name: "Sub Topic 1",
          videoLink: "#",
          textLink: "#",
          pyqs: [
            { year: "2023", marks: 10 },
            { year: "2021", marks: 20 }
          ],
          lastUpdated: "15th June 2024"
        }
      ]
    },
    {
      topicName: "Topic 2",
      subTopics: [
        {
          name: "Sub Topic 1",
          videoLink: "#",
          textLink: "#",
          pyqs: [
            { year: "2023", marks: 10 },
            { year: "2021", marks: 20 }
          ],
          lastUpdated: "15th June 2024"
        }
      ]
    },
    {
      topicName: "Topic 3",
      subTopics: [
        {
          name: "Sub Topic 1",
          videoLink: "#",
          textLink: "#",
          pyqs: [
            { year: "2023", marks: 10 },
            { year: "2021", marks: 20 }
          ],
          lastUpdated: "15th June 2024"
        }
      ]
    }
  ],
  price: {
    newPrice: 299,
    oldPrice: 499,
    discount: 40
  }
};

const CoursePage = () => {
  const course = courseData;
  const instructor = course.instructorName;

  return (
    <section className="course-page center-section">
      <div className="col-left course-page-col">
        <div className="course-intro">
          <div className="course-page-nav">
            <Link to="/#courses" className="course-page-nav-link">
              Courses
            </Link>
            <span className="link-separator">{' > '}</span>
            <Link to={`/#term-${course.term}`} className="course-page-nav-link">
              Term {course.term}
            </Link>
            <span className="link-separator">{' > '}</span>
            <Link to={`/courses/${course.term}/${course.courseId}`} className="course-page-nav-link">
              {course.title}
            </Link>
          </div>
          <h1 className="course-page-course-title">{course.title}</h1>
          <p className="course-desc">
            Welcome to this course
          </p>
          <p className="instructor">
            Created By <span className="course-page-instructor-name">{instructor.name}</span>
          </p>
          <div className="intro-bottom">
            <p className="text-with-icon">
              <IoMdTime /> Last Updated 15th June 2024
            </p>
            <p className="text-with-icon">
              <IoIosGlobe /> English with conversational Hindi
            </p>
          </div>
          <div className="course-page-sub-container">
            <h3 className="bio">About the author</h3>
            <p className="about-author-text">{instructor.bio}</p>
          </div>
        </div>
        <div className="course-structure-container">
          <div className="course-page-sub-container">
            <h3 className="bio">This course includes:</h3>
            <div className="inclusions-container">
              <div className="text-with-icon">
                <MdOndemandVideo /> 11 hours of video lectures
              </div>
              <div className="text-with-icon">
                <MdNotes /> Lecture Notes
              </div>
              <div className="text-with-icon">
                <MdCases /> Case Summaries
              </div>
              <div className="text-with-icon">
                <MdCheckCircleOutline /> Solved PYQs
              </div>
            </div>
          </div>
          <div className="course-page-sub-container course-contents">
            <h3 className="bio">Course Contents</h3>
            <div className="course-contents-container">
              {course.contents.map((topic, index) => (
                <div key={index}>
                  <h4>{topic.topicName}</h4>
                  {topic.subTopics.map((subTopic, subIndex) => (
                    <div key={subIndex}>
                      <h5>{subTopic.name}</h5>
                      <p>Video: <a href={subTopic.videoLink}>Watch here</a></p>
                      <p>Text: <a href={subTopic.textLink}>Read here</a></p>
                      <h6>Previous Year Questions (PYQs):</h6>
                      <ul>
                        {subTopic.pyqs.map((pyq, pyqIndex) => (
                          <li key={pyqIndex}>
                            {pyq.year} - {pyq.marks} marks
                          </li>
                        ))}
                      </ul>
                      <p>Last Updated: {subTopic.lastUpdated}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-right course-page-col">
        <div className="video-card">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/jNQXAC9IVRw?si=QwePvLpAO25GS3wb"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <div className="course-page-price-container">
              <span className="new-price">
                <FaRupeeSign /> {course.price.newPrice}
              </span>
              <span className="old-price">
                <FaRupeeSign /> {course.price.oldPrice}
              </span>
              <span className="discount">{course.price.discount}% off</span>
            </div>
            <div className="exclusive-msg">
              <IoMdAlarm /> Exclusive for first 300 students!
            </div>
          </div>
          <Link
            to={`/payment?courseId=${course.courseId}&title=${encodeURIComponent(course.title)}`}
            className="cta-btn"
          >
            Buy Now
          </Link>
          <div className="card-footer">
            <p className="accessible">Accessible till 31st July, 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePage;
