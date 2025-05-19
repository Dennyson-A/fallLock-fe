import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/common/UserNavbar";
import Sidebar from "../components/common/UserSidebar";
import "../sensor_kit/userkittracker.css";

function Userkittracker() {
  const [kitData, setKitData] = useState(null);
  const [issueText, setIssueText] = useState("");
  const [queryText, setQueryText] = useState("");
  const [loading, setLoading] = useState(true);
  const [submittingIssue, setSubmittingIssue] = useState(false);
  const [submittingQuery, setSubmittingQuery] = useState(false);

  useEffect(() => {
    // Fetch kit details from backend
    const fetchKitData = async () => {
      try {
        const response = await axios.get("/api/kit-details"); // replace with actual endpoint
        setKitData(response.data);
      } catch (error) {
        console.error("Error fetching kit details:", error);
        alert("Failed to load kit details.");
      } finally {
        setLoading(false);
      }
    };

    fetchKitData();
  }, []);

  const handleIssueSubmit = async () => {
    try {
      setSubmittingIssue(true);
      await axios.post("/api/issues", {
        kitId: kitData.kitId,
        issue: issueText,
      });
      alert("Issue submitted successfully!");
      setIssueText("");
    } catch (error) {
      console.error("Error submitting issue:", error);
      alert("Failed to submit issue.");
    } finally {
      setSubmittingIssue(false);
    }
  };

  const handleQuerySubmit = async () => {
    try {
      setSubmittingQuery(true);
      await axios.post("/api/queries", {
        kitId: kitData.kitId,
        query: queryText,
      });
      alert("Query submitted successfully!");
      setQueryText("");
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("Failed to submit query.");
    } finally {
      setSubmittingQuery(false);
    }
  };

  if (loading) {
    return <div className="kit-status-container">Loading...</div>;
  }

  if (!kitData) {
    return <div className="kit-status-container">No kit data found.</div>;
  }

  return (
    <div className="kit-status-container">
      <Navbar />
      <div className="kit-status-content">
        <Sidebar />
        <div className="kit-status-main">
          <h2 className="section-title">Kit Status</h2>

          <div className="kit-card">
            <div><strong>Kit Name:</strong> {kitData.kitName}</div>
            <div><strong>Kit ID:</strong> {kitData.kitId}</div>
            <div><strong>Status:</strong> {kitData.status}</div>
            <div><strong>Start Date:</strong> {kitData.startDate}</div>
            <div><strong>End Date:</strong> {kitData.endDate}</div>
            <div><strong>Active Location:</strong> {kitData.location}</div>
          </div>

          {/* Issues Section */}
          <h3 className="section-title">Issues</h3>
          <textarea
            className="issue-textarea"
            placeholder="Describe the issue..."
            value={issueText}
            onChange={(e) => setIssueText(e.target.value)}
          />
          {issueText.trim() !== "" && (
            <button
              className="submit-btn"
              onClick={handleIssueSubmit}
              disabled={submittingIssue}
            >
              {submittingIssue ? "Submitting..." : "Submit"}
            </button>
          )}

          {/* Queries Section */}
          <h3 className="section-title">Queries</h3>
          <textarea
            className="issue-textarea"
            placeholder="Write your query..."
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
          />
          {queryText.trim() !== "" && (
            <button
              className="submit-btn"
              onClick={handleQuerySubmit}
              disabled={submittingQuery}
            >
              {submittingQuery ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Userkittracker;
