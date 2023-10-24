import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import axios from "axios";
import Project from "../Components/Project";

function Home() {
  const [projectDetails, setProjectDetails] = useState([])
  axios.get("/projects.json")
    .then(function (response) {
      setProjectDetails(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })


  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <>
      <main className="container mx-auto max-width section md:flex justify-between items-center">
        <div>
          <h1
            ref={h11}
            className="text-2xl  text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1
            ref={h12}
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {tagline}
          </h2>
        </div>
        <div className="mt-5 md:mt-0">
          <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="Pavan MG" />
        </div>
      </main>

      <div className="topProjects mx-auto container " style={{ marginTop: "10%" }}>

        <h1 className="text-center text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-5"> Top Projects </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10" style={{
          marginBottom: '10%'
        }}>
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }, index) => (

                index <= 6 ?
                  <Project
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                  />

                  :

                  <></>
              )
            )
          )}
        </div>


      </div>


    </>
  );
}

export default Home;
