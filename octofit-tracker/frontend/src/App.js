
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Octofit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        {/* Bootstrap Heading */}
        <h1 className="display-4 mb-4 text-center">Welcome to Octofit Tracker</h1>

        {/* Bootstrap Card */}
        <div className="card mb-4 shadow">
          <div className="card-body">
            <h5 className="card-title">Your Activity Summary</h5>
            {/* Bootstrap Table */}
            <table className="table table-striped table-bordered mt-3">
              <thead className="table-dark">
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Duration (min)</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2026-01-15</td>
                  <td>Running</td>
                  <td>30</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>2026-01-14</td>
                  <td>Cycling</td>
                  <td>45</td>
                  <td>400</td>
                </tr>
              </tbody>
            </table>
            {/* Bootstrap Button */}
            <button className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>
              Add Activity
            </button>
          </div>
        </div>

        {/* Bootstrap Modal */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Activity</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  {/* Bootstrap Form */}
                  <form>
                    <div className="mb-3">
                      <label htmlFor="activityType" className="form-label">Activity Type</label>
                      <input type="text" className="form-control" id="activityType" placeholder="e.g. Running" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="duration" className="form-label">Duration (min)</label>
                      <input type="number" className="form-control" id="duration" placeholder="e.g. 30" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="calories" className="form-label">Calories</label>
                      <input type="number" className="form-control" id="calories" placeholder="e.g. 300" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                  <button type="button" className="btn btn-primary">Save Activity</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
