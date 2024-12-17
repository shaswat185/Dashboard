import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./report.css";

// Register necessary chart elements
Chart.register(
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Report = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('monthlyRevenue');

  // Chart data
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 13000, 18000, 19000, 17000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  // Tabs content rendering logic
  const renderTabContent = () => {
    switch (activeTab) {
      case 'monthlyRevenue':
        return (
          <div className="chart">
            <h3>Monthly Revenue</h3>
            <Bar data={chartData} />
          </div>
        );
      case 'salesGrowth':
        return (
          <div className="chart">
            <h3>Sales Growth</h3>
            <Line data={chartData} />
          </div>
        );
      case 'revenueBreakdown':
        return (
          <div className="chart revenue">
            <h3>Revenue Breakdown</h3>
            <Pie data={chartData} />
          </div>
        );
      case 'detailedReport':
        return (
          <div className="data-table">
            <h3>Detailed Report</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Revenue</th>
                  <th>Growth Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>January</td>
                  <td>$12,000</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td>February</td>
                  <td>$15,000</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="report-section">
      <h2>Performance Report</h2>

      {/* Tabs Navigation */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'monthlyRevenue' ? 'active' : ''}`}
            onClick={() => setActiveTab('monthlyRevenue')}
          >
            Monthly Revenue
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'salesGrowth' ? 'active' : ''}`}
            onClick={() => setActiveTab('salesGrowth')}
          >
            Sales Growth
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'revenueBreakdown' ? 'active' : ''}`}
            onClick={() => setActiveTab('revenueBreakdown')}
          >
            Revenue Breakdown
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'detailedReport' ? 'active' : ''}`}
            onClick={() => setActiveTab('detailedReport')}
          >
            Detailed Report
          </button>
        </li>
      </ul>

      <hr />

      {/* Content based on active tab */}
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Report;
