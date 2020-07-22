import React, { useContext, useState, Fragment } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Fade from "react-reveal/Fade";
import GitHubCard from "./GitHubCard";
import "./github.css";
import { Row } from "react-flexbox-grid";
import { ScrollContext } from "../../Context/scroll";
import { FETCH_REPOS } from "../../utils/graphql.js";
import { useQuery } from "react-apollo";
import { openSourceSection, socialNetworks } from "../../techfolio";
import Message from "./Message";
import Heading from "../common/Heading";
import { isMobile } from "react-device-detect";
function Github() {
  const { scrollChange } = useContext(ScrollContext);
  const { githubUserName, numberOfRepos } = openSourceSection;
  const initialValue = numberOfRepos > 4 ? 4 : numberOfRepos;
  const [repos, setRepos] = useState(initialValue);
  const { loading, error, data } = useQuery(FETCH_REPOS, {
    variables: { login: githubUserName, first: repos },
  });
  return (
    <Fragment>
      {isMobile && <Heading heading={"Open Source"} style={{ marginBottom: "70px" }} />}
      <section
        className="section section4"
        id="githubSection"
        name="openSources"
      >
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) {
              scrollChange("github");
            }
          }}
        >
          {loading ? (
            <Message
              message={{
                type: "success",
                title: "Loading...",
              }}
            />
          ) : error ? (
            <Message
              message={{
                type: "error",
                title: "Error",
                desc:
                  "Whoops! Sorry for the inconvenience, something went wrong.",
              }}
            />
          ) : (
            <div className="site-container">
              <Fade bottom>
                <Row around="xs" className="githubRepoCards">
                  {data.user.pinnedItems.edges.map((repo, i) => {
                    return <GitHubCard repo={repo} key={repo.node.id} />;
                  })}
                </Row>
                <Row around="xs">
                  <div className="banner-content">
                    <div className="banner-btns">
                      {numberOfRepos > repos ? (
                        <button
                          className="btn btn-1"
                          onClick={() => {
                            setRepos(numberOfRepos);
                          }}
                        >
                          View more
                        </button>
                      ) : (
                        <a
                          href={socialNetworks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-1"
                        >
                          View more
                        </a>
                      )}{" "}
                    </div>
                  </div>
                </Row>
              </Fade>
            </div>
          )}
        </VisibilitySensor>
      </section>
    </Fragment>
  );
}

export default Github;
