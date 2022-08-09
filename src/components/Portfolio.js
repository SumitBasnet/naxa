import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { array } from "yup";
import { getProjectsFetch, getUsersFetch } from "../actions";

const Portfolio = () => {
  const [data, setData] = useState({
    description: null,
    reqProjects: null,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getProjectsFetch());
  }, [dispatch]);
  const users = useSelector((state) => state.myFirstReducer.users);
  const projects = useSelector((state) => state.myFirstReducer.projects);
  const category = [];
  users.forEach((element) => {
    if (element.category_of === "Portfolio" || element.category_of === null) {
      category.push(element.title);
    }
  });
  const passtoTabs = (category) => {
    users.forEach((element) => {
      if (element.title === category) {
        setData((data) => ({
          ...data,
          description: element.description,
        }));
      }
    });
    console.log(projects);
    projects.forEach((element) => {
      if (element.category_title.includes(category)) {
        setData((data) => ({
          ...data,
          reqProjects: element,
        }));
      }
    });
  };

  return (
    <section className="portfolio">
      <div className="container">
        <div className="tab-contents">
          <div className="lists-content">
            {category.map((currElm, indx) => {
              return (
                <div role="presentation" className="content-show" key={indx}>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      passtoTabs(category[indx]);
                    }}
                  >
                    {category[indx]}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="article-contents">
            <div className="article-block">
              <div className="article-info">
                <p></p>
              </div>
              <a
                href=""
                style={{ textDecoration: "none", color: "#333" }}
                className="article-items highlight"
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <figure className="img-fig">
                      <img
                        src="assets/geoportal_update_1.png"
                        alt="article-Photos"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8">
                    <div className="boxes-overall">
                      <div className="article-header">
                        <h3>Heyyyyyy</h3>
                        <p>
                          Lorem ipsum dolor sit amet,{" "}
                          <strong>consectetur adipiscing elit</strong>. Aliquam
                        </p>
                      </div>
                      <div className="article-body">
                        <div className="row">
                          <div className="col-md-8 paddinglft">
                            <div className="articlebody-content">
                              <h5>Client</h5>
                              <h6>Survey Default</h6>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="articlebody-content">
                              <h5>Project Period</h5>
                              <h6>2021-04-20 - 021-06-24</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
