import { useState, useEffect } from "react";
import JobsDetail from "./JobsDetail";
import Spinner from "./Spinner";

const JobsList = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs"
    setTimeout(async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        setJobs(data);
      } catch (e) {
        console.log(`Erro${e}`);
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <JobsDetail key={index} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobsList;
