import React, { useEffect, useState } from 'react';
import CourseCard from '../Components/CourseCard';
import examImage from '../Assets/exam.jpg';
import videoi from '../Assets/video.jpg';
import notes1 from '../Assets/notes1.jpg';
import cases from '../Assets/case.jpg';
import notes2 from '../Assets/notes2.jpg';



  const mockCourses = [
    {
      _id: "1",
      courseId: "201",
      title: "Constitutional Law - I",
      term: "2",
      instructor: { name: "Dr. Ashok Kumar" },
      img: "https://dummyimage.com/300x200/000/fff&text=Constitutional+Law+1",
    },
    {
      _id: "2",
      courseId: "202",
      title: "Contract Law - I",
      term: "2",
      instructor: { name: "Prof. Sanya Verma" },
      img: "https://dummyimage.com/300x200/000/fff&text=Contract+Law+1",
    },
    {
      _id: "3",
      courseId: "401",
      title: "Family Law - II",
      term: "4",
      instructor: { name: "Dr. Neha Sharma" },
      img: "https://dummyimage.com/300x200/000/fff&text=Family+Law+2",
    },
    {
      _id: "4",
      courseId: "402",
      title: "Labour Law",
      term: "4",
      instructor: { name: "Dr. Rajat Singh" },
      img: "https://dummyimage.com/300x200/000/fff&text=Labour+Law",
    },
    {
      _id: "5",
      courseId: "601",
      title: "Property Rights",
      term: "6",
      instructor: { name: "Dr. Priya Mishra" },
      img: "https://dummyimage.com/300x200/000/fff&text=IPR",
    },
    {
      _id: "6",
      courseId: "602",
      title: "Cyber Law",
      term: "6",
      instructor: { name: "Dr. Vivek Chaturvedi" },
      img: "https://dummyimage.com/300x200/000/fff&text=Cyber+Law",
    },
    {
      _id: "7",
      courseId: "201",
      title: "Constitutional Law - I",
      term: "2",
      instructor: { name: "Dr. Ashok Kumar" },
      img: "https://dummyimage.com/300x200/000/fff&text=Constitutional+Law+1",
    },
    {
      _id: "8",
      courseId: "602",
      title: "Cyber Law",
      term: "6",
      instructor: { name: "Dr. Vivek Chaturvedi" },
      img: "https://dummyimage.com/300x200/000/fff&text=Cyber+Law",
    },
    {
      _id: "9",
      courseId: "402",
      title: "Labour Law",
      term: "4",
      instructor: { name: "Dr. Rajat Singh" },
      img: "https://dummyimage.com/300x200/000/fff&text=Labour+Law",
    },
  ];
  
  const Home = () => {
    const [courses, setCourses] = useState(null);
  
    useEffect(() => {
      const getCoursesData = async () => {
        // Simulating API response using mock data
        setTimeout(() => {
          setCourses(mockCourses);
        }, 500); // Simulate a delay
      };
      getCoursesData();
    }, []);

  return (
    <>
      <section className="container">
        <div className="container-content">
          <div className="right-section">
            <h2 className="title">
              Welcome to <span className="comp-name">LUMIN</span>
            </h2>
            <p className="container-text">
              We offer semester exam preparation guides for LL.B. students at
              Delhi University. We simplify the exam preparation journey by
              offering interactive video lectures specifically tailored to
              exams, previous year question papers, concise case summaries, and
              lecture notes.
              <br /> <br />
              We provide top-tier education in an accessible format, ensuring
              that learning is enriching and enjoyable. Our dedicated
              instructors are deeply committed to empowering students to thrive
              academically.
            </p>
            {/* <div className="c-button">
              <a href="#courses">
                <button className="course-btn">Our Courses</button>
              </a>
            </div> */}
          </div>
          <section className="left-section">
            <img src={examImage} alt="exam" />
          </section>
        </div>
      </section>

      <section className="course-desp-box" id="product">
        <h2 className="course-desp-title">In Our Courses, we will provide</h2>
        <p className="course-desp-text">
          We offer exam preparation guides for LLB students at Delhi University
        </p>
        <div className="slabs-container">
          <article className="row-slab" id="row-slab1">
            <section className="left-sec">
              <img src={videoi} alt="video-lecture" />
            </section>
            <section className="right-sec">
              <h3 className="slab-title">Video Lectures</h3>
              <p className="slab-text">
                Video lectures designed for LLB semester exams to
                help students excel academically.
              </p>
            </section>
          </article>
          <article className="row-slab" id="row-slab2">
            <section className="left-sec">
              <img src={notes1} alt="notes" />
            </section>
            <section className="right-sec">
              <h3 className="slab-title">Topic Notes</h3>
              <p className="slab-text">
                Comprehensive and clear topic notes for effortless learning.
              </p>
            </section>
          </article>
          <article className="row-slab" id="row-slab3">
            <section className="left-sec">
              <img src={cases} alt="case-summary" />
            </section>
            <section className="right-sec">
              <h3 className="slab-title">Case Summaries</h3>
              <p className="slab-text">
                Concise summaries of cases essential for final exams.
              </p>
            </section>
          </article>
          <article className="row-slab" id="row-slab4">
            <section className="left-sec">
              <img src={notes2} alt="sample-paper" />
            </section>
            <section className="right-sec">
              <h3 className="slab-title">Sample Answers</h3>
              <p className="slab-text">
                Sample answers guide for the past five years of question papers.
              </p>
            </section>
          </article>
        </div>
      </section>

      <section className="center-section" id="courses">
        <div>
          <h2 className="section-title">Our Courses</h2>
          <div className="course-card-container">
            <h2 className="term-title text-5xl font-bold p-2">Term-2</h2>
            <div className="flex justify-around">
              {courses &&
                courses.map(
                  (course) =>
                    course.term === '2' && (
                      <CourseCard
                        key={course._id}
                        courseName={course.title}
                        courseImage={course.img}
                        courseId={course.courseId}
                        instructorName={course.instructor.name}
                        term={course.term}
                      />
                    )
                )}
            </div>
          </div>
          <div className="course-card-container">
            <h2 className="term-title text-5xl font-bold p-2">Term-4</h2>
            <div className="flex justify-around">
              {courses &&
                courses.map(
                  (course) =>
                    course.term === '4' && (
                      <CourseCard
                        key={course._id}
                        courseName={course.title}
                        courseImage={course.img}
                        courseId={course.courseId}
                        instructorName={course.instructor.name}
                        term={course.term}
                      />
                    )
                )}
            </div>
          </div>
          <div className="course-card-container">
            <h2 className="term-title text-5xl font-bold p-2">Term-6</h2>
            <div className="flex justify-around">
              {courses &&
                courses.map(
                  (course) =>
                    course.term === '6' && (
                      <CourseCard
                        key={course._id}
                        courseName={course.title}
                        courseImage={course.img}
                        courseId={course.courseId}
                        instructorName={course.instructor.name}
                        term={course.term}
                      />
                    )
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
