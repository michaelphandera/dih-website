"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as dc from 'dc';
import crossfilter from 'crossfilter2';

// Define interfaces for chart data
interface DisasterData {
  date: string | Date;
  type: string;
  severity: string;
  affected: number;
  district: string;
}

// Define interface for dc.js chart data with any to handle unknown structure
interface DcChartData {
  key: string;
  value: any;
}

interface DisasterDashboardProps {
  // Add any props if needed
}

const DisasterDashboard: React.FC<DisasterDashboardProps> = () => {
  const pieChartRef = useRef<HTMLDivElement>(null);
  const barChartRef = useRef<HTMLDivElement>(null);
  const rowChartRef = useRef<HTMLDivElement>(null);
  const numberDisplayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Clear previous charts
    const refs = [pieChartRef, barChartRef, rowChartRef, numberDisplayRef];
    refs.forEach(ref => {
      if (ref.current) ref.current.innerHTML = '';
    });

    // Sample data
    const disasterData: DisasterData[] = [
      { date: '2023-01-15', type: 'Cyclone', severity: 'High', affected: 1200, district: 'Port Louis' },
      { date: '2023-02-20', type: 'Flood', severity: 'Medium', affected: 800, district: 'Black River' },
      { date: '2023-03-10', type: 'Landslide', severity: 'Low', affected: 150, district: 'Moka' },
      { date: '2023-04-05', type: 'Flood', severity: 'High', affected: 1500, district: 'Flacq' },
      { date: '2023-05-12', type: 'Cyclone', severity: 'Medium', affected: 950, district: 'Grand Port' },
      { date: '2023-06-18', type: 'Drought', severity: 'Medium', affected: 2000, district: 'Savanne' },
      { date: '2023-07-22', type: 'Flood', severity: 'Low', affected: 300, district: 'Pamplemousses' },
      { date: '2023-08-30', type: 'Cyclone', severity: 'High', affected: 1800, district: 'Riviere du Rempart' },
      { date: '2023-09-14', type: 'Landslide', severity: 'Medium', affected: 450, district: 'Plaines Wilhems' },
      { date: '2023-10-25', type: 'Flood', severity: 'High', affected: 1100, district: 'Port Louis' },
      { date: '2023-11-08', type: 'Drought', severity: 'Low', affected: 600, district: 'Moka' },
      { date: '2023-12-12', type: 'Cyclone', severity: 'High', affected: 2200, district: 'Black River' }
    ];

    // Parse dates
    const parseDate = d3.timeParse('%Y-%m-%d');
    disasterData.forEach(d => {
      d.date = parseDate(d.date as string) || d.date;
    });

    // Create crossfilter instance
    const ndx = crossfilter(disasterData);

    // Define dimensions
    const typeDim = ndx.dimension((d: DisasterData) => d.type);
    const severityDim = ndx.dimension((d: DisasterData) => d.severity);
    const districtDim = ndx.dimension((d: DisasterData) => d.district);
    // We'll use dateDim in future enhancements
    // const dateDim = ndx.dimension((d: DisasterData) => d.date);

    // Define groups
    const typeGroup = typeDim.group().reduceSum((d: DisasterData) => d.affected);
    const severityGroup = severityDim.group().reduceSum((d: DisasterData) => d.affected);
    const districtGroup = districtDim.group().reduceSum((d: DisasterData) => d.affected);
    const totalGroup = ndx.groupAll().reduceSum((d: DisasterData) => d.affected);

    // Color arrays for charts
    const typeColorArray = ['#F59946', '#338F7A', '#4CAF50', '#F44336'];
    const severityColorArray = ['#F59946', '#338F7A', '#4CAF50'];
    const districtColorArray = ['#F59946', '#338F7A', '#4CAF50', '#F44336', '#2196F3', '#9C27B0', '#FF9800', '#795548', '#607D8B'];

    // Create charts if all refs exist
    if (refs.every(ref => ref.current)) {
      // Generate unique IDs for charts
      const generateId = (prefix: string) => `${prefix}-${Math.random().toString().slice(2, 11)}`;

      // Set IDs for chart containers if they don't have one
      if (!pieChartRef.current!.id) pieChartRef.current!.id = generateId('pie-chart');
      if (!barChartRef.current!.id) barChartRef.current!.id = generateId('bar-chart');
      if (!rowChartRef.current!.id) rowChartRef.current!.id = generateId('row-chart');
      if (!numberDisplayRef.current!.id) numberDisplayRef.current!.id = generateId('number-display');

      // Create charts using the IDs
      const pieChart = dc.pieChart(`#${pieChartRef.current!.id}`);
      pieChart
        .width(300)
        .height(250)
        .radius(100)
        .innerRadius(40)
        .dimension(typeDim)
        .group(typeGroup)
        .legend(dc.legend())
        .label((d: DcChartData) => {
          // Cast totalGroup.value() to number to fix type issue
          const totalValue = totalGroup.value() as number;
          const percentage = Math.floor((d.value / totalValue) * 100);
          return pieChart.hasFilter() && !pieChart.hasFilter(d.key)
            ? `${d.key} (0%)`
            : `${d.key} (${percentage}%)`;
        })
        .title((d: DcChartData) => `${d.key}: ${d.value} affected`)
        .colors(typeColorArray);

      // Bar Chart for Severity
      const barChart = dc.barChart(`#${barChartRef.current!.id}`);
      barChart
        .width(300)
        .height(250)
        .margins({ top: 20, right: 50, bottom: 40, left: 40 })
        .dimension(severityDim)
        .group(severityGroup)
        .x(d3.scaleBand())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .brushOn(true)
        .renderTitle(true)
        .title((d: DcChartData) => `${d.key}: ${d.value} affected`)
        .colors(severityColorArray);

      // Row Chart for Districts
      const rowChart = dc.rowChart(`#${rowChartRef.current!.id}`);
      rowChart
        .width(300)
        .height(250)
        .dimension(districtDim)
        .group(districtGroup)
        .elasticX(true)
        .title((d: DcChartData) => `${d.key}: ${d.value} affected`)
        .colors(districtColorArray);

      // Number Display for Total Affected
      const numberDisplay = dc.numberDisplay(`#${numberDisplayRef.current!.id}`);

      numberDisplay
        .formatNumber(d3.format(',d'))
        .valueAccessor((d: any) => d)
        .group(totalGroup);

      // Render all charts
      dc.renderAll();
    }

    // Cleanup function
    return () => {
      dc.chartRegistry.clear();
    };
  }, []);

  return (
    <div className="disaster-dashboard pt-100 pb-75 bg-sand">
      <div className="container">
        <div className="section-title style3 text-center mb-40">
          <span>Interactive Dashboard</span>
          <h2>Disaster Impact Analysis</h2>
          <p>Explore disaster data across Mauritius with interactive filters. Click on any chart element to filter the data.</p>
        </div>

        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="card bg-white p-3 rounded shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Total People Affected</h5>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => { dc.filterAll(); dc.renderAll(); }}
                >
                  Reset All Filters
                </button>
              </div>
              <div className="total-display text-center">
                <div ref={numberDisplayRef} className="number-display"></div>
                <p className="text-muted mt-2">Click on charts below to filter data</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card bg-white p-4 rounded shadow-sm h-100">
              <h5 className="mb-3">Disaster Types</h5>
              <div ref={pieChartRef} className="chart-container"></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card bg-white p-4 rounded shadow-sm h-100">
              <h5 className="mb-3">Severity Levels</h5>
              <div ref={barChartRef} className="chart-container"></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card bg-white p-4 rounded shadow-sm h-100">
              <h5 className="mb-3">Affected by District</h5>
              <div ref={rowChartRef} className="chart-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterDashboard;

