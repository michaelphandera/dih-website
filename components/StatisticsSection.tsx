"use client"

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import CounterCard from './CounterCard';

interface StatisticsSectionProps {
  // Add any props if needed
}

const StatisticsSection: React.FC<StatisticsSectionProps> = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const cycloneChartRef = useRef<HTMLDivElement>(null);
  const floodChartRef = useRef<HTMLDivElement>(null);
  const radarChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Clear previous charts before creating new ones
    if (mapRef.current) mapRef.current.innerHTML = '';
    if (cycloneChartRef.current) cycloneChartRef.current.innerHTML = '';
    if (floodChartRef.current) floodChartRef.current.innerHTML = '';
    if (radarChartRef.current) radarChartRef.current.innerHTML = '';

    if (mapRef.current && cycloneChartRef.current && floodChartRef.current && radarChartRef.current) {
      createMauritiusMap();
      createCycloneChart();
      createFloodChart();
      createRadarChart();
    }

    const handleResize = () => {
      // Only run on client-side
      if (typeof window === 'undefined') return;

      // Clear previous charts before creating new ones
      if (mapRef.current) mapRef.current.innerHTML = '';
      if (cycloneChartRef.current) cycloneChartRef.current.innerHTML = '';
      if (floodChartRef.current) floodChartRef.current.innerHTML = '';
      if (radarChartRef.current) radarChartRef.current.innerHTML = '';

      if (mapRef.current && cycloneChartRef.current && floodChartRef.current && radarChartRef.current) {
        createMauritiusMap();
        createCycloneChart();
        createFloodChart();
        createRadarChart();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const createMauritiusMap = () => {
    if (!mapRef.current) return;

    // D3.js map creation code
    const width = mapRef.current.clientWidth;
    const height = 450;

    const svg = d3.select(mapRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Simple placeholder map with risk zones
    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#e8f5e9");

    // Draw Mauritius island shape (simplified)
    const islandPath = "M" + (width/2) + "," + (height/4) +
                      " c50,10 100,50 120,100" +
                      " s-20,100 -70,120" +
                      " s-100,0 -150,-30" +
                      " s-50,-100 -20,-150" +
                      " s70,-50 120,-40z";

    svg.append("path")
      .attr("d", islandPath)
      .attr("fill", "#81c784")
      .attr("stroke", "#2e7d32")
      .attr("stroke-width", 2);

    // Add risk zones
    const riskZones = [
      { x: width/2 - 40, y: height/4 + 50, r: 30, risk: "high" },
      { x: width/2 + 60, y: height/4 + 80, r: 25, risk: "medium" },
      { x: width/2 - 20, y: height/4 + 120, r: 35, risk: "high" },
      { x: width/2 + 30, y: height/4 + 150, r: 20, risk: "low" }
    ];

    const riskColors: {[key: string]: string} = {
      high: "rgba(244, 67, 54, 0.7)",
      medium: "rgba(255, 152, 0, 0.7)",
      low: "rgba(255, 235, 59, 0.7)"
    };

    riskZones.forEach(zone => {
      svg.append("circle")
        .attr("cx", zone.x)
        .attr("cy", zone.y)
        .attr("r", zone.r)
        .attr("fill", riskColors[zone.risk])
        .attr("stroke", "#fff")
        .attr("stroke-width", 1)
        .attr("opacity", 0.7);
    });

    // Add legend
    const legend = svg.append("g")
      .attr("transform", `translate(${width - 120}, 20)`);

    const legendItems = [
      { risk: "high", label: "High Risk" },
      { risk: "medium", label: "Medium Risk" },
      { risk: "low", label: "Low Risk" }
    ];

    legendItems.forEach((item, i) => {
      legend.append("rect")
        .attr("x", 0)
        .attr("y", i * 25)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", riskColors[item.risk]);

      legend.append("text")
        .attr("x", 25)
        .attr("y", i * 25 + 12)
        .text(item.label)
        .attr("font-size", "12px");
    });
  };

  const createCycloneChart = () => {
    if (!cycloneChartRef.current) return;

    const width = cycloneChartRef.current.clientWidth;
    const height = 250;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const svg = d3.select(cycloneChartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const chart = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Sample data
    const data = [
      { year: "2020", count: 3 },
      { year: "2021", count: 2 },
      { year: "2022", count: 4 },
      { year: "2023", count: 1 },
      { year: "2024", count: 3 }
    ];

    // Scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.year))
      .range([0, chartWidth])
      .padding(0.3);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count) || 0])
      .range([chartHeight, 0])
      .nice();

    // Axes
    chart.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(xScale));

    chart.append("g")
      .call(d3.axisLeft(yScale).ticks(5));

    // Bars
    chart.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.year) || 0)
      .attr("y", d => yScale(d.count))
      .attr("width", xScale.bandwidth())
      .attr("height", d => chartHeight - yScale(d.count))
      .attr("fill", "#F59946");

    // Labels
    chart.append("text")
      .attr("text-anchor", "middle")
      .attr("x", chartWidth / 2)
      .attr("y", chartHeight + margin.bottom - 5)
      .text("Year")
      .attr("font-size", "12px");

    chart.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", `translate(${-margin.left + 15}, ${chartHeight / 2}) rotate(-90)`)
      .text("Number of Cyclones")
      .attr("font-size", "12px");
  };

  const createFloodChart = () => {
    if (!floodChartRef.current) return;

    const width = floodChartRef.current.clientWidth;
    const height = 250;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const svg = d3.select(floodChartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const chart = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Sample data
    const data = [
      { month: "Jan", level: 2.5 },
      { month: "Feb", level: 3.8 },
      { month: "Mar", level: 3.2 },
      { month: "Apr", level: 2.1 },
      { month: "May", level: 1.5 },
      { month: "Jun", level: 1.2 },
      { month: "Jul", level: 1.0 },
      { month: "Aug", level: 0.8 },
      { month: "Sep", level: 1.1 },
      { month: "Oct", level: 1.7 },
      { month: "Nov", level: 2.3 },
      { month: "Dec", level: 2.8 }
    ];

    // Scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, chartWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.level) || 0])
      .range([chartHeight, 0])
      .nice();

    // Axes
    chart.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(xScale));

    chart.append("g")
      .call(d3.axisLeft(yScale).ticks(5));

    // Line
    const line = d3.line<{month: string, level: number}>()
      .x(d => (xScale(d.month) || 0) + xScale.bandwidth() / 2)
      .y(d => yScale(d.level))
      .curve(d3.curveMonotoneX);

    chart.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#338F7A")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Points
    chart.selectAll(".point")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "point")
      .attr("cx", d => (xScale(d.month) || 0) + xScale.bandwidth() / 2)
      .attr("cy", d => yScale(d.level))
      .attr("r", 4)
      .attr("fill", "#338F7A");

    // Labels
    chart.append("text")
      .attr("text-anchor", "middle")
      .attr("x", chartWidth / 2)
      .attr("y", chartHeight + margin.bottom - 5)
      .text("Month")
      .attr("font-size", "12px");

    chart.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", `translate(${-margin.left + 15}, ${chartHeight / 2}) rotate(-90)`)
      .text("Flood Risk Level")
      .attr("font-size", "12px");
  };

  const createRadarChart = () => {
    if (!radarChartRef.current) return;

    const width = radarChartRef.current.clientWidth;
    const height = 250;
    const margin = 50;

    const svg = d3.select(radarChartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const chartWidth = width - 2 * margin;
    const chartHeight = height - 2 * margin;
    const radius = Math.min(chartWidth, chartHeight) / 2;

    const chart = svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Sample data
    const data = [
      { axis: "Preparedness", value: 0.8 },
      { axis: "Response", value: 0.65 },
      { axis: "Recovery", value: 0.7 },
      { axis: "Mitigation", value: 0.9 },
      { axis: "Awareness", value: 0.75 }
    ];

    const angleSlice = (Math.PI * 2) / data.length;

    // Scales
    const rScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, radius]);

    // Draw background circles
    const levels = 5;
    chart.selectAll(".level")
      .data(d3.range(1, levels + 1).reverse())
      .enter()
      .append("circle")
      .attr("class", "level")
      .attr("r", (d: number) => radius * d / levels)
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 0.5);

    // Draw axis lines
    chart.selectAll(".axis")
      .data(data)
      .enter()
      .append("line")
      .attr("class", "axis")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", (_: any, i: number) => rScale(1.1) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y2", (_: any, i: number) => rScale(1.1) * Math.sin(angleSlice * i - Math.PI / 2))
      .attr("stroke", "#999")
      .attr("stroke-width", 1);

    // Draw axis labels
    chart.selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (_: any, i: number) => rScale(1.2) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y", (_: any, i: number) => rScale(1.2) * Math.sin(angleSlice * i - Math.PI / 2))
      .attr("text-anchor", (_: any, i: number) => {
        if (i === 0 || i === data.length / 2) return "middle";
        return (i < data.length / 2) ? "start" : "end";
      })
      .attr("dy", "0.35em")
      .attr("font-size", "10px")
      .text((d: any) => d.axis);

    // Draw radar chart
    const radarLine = d3.lineRadial<{axis: string, value: number}>()
      .radius((d: any) => rScale(d.value))
      .angle((_: any, i: number) => i * angleSlice);

    chart.append("path")
      .datum(data)
      .attr("class", "radar")
      .attr("d", radarLine)
      .attr("fill", "rgba(245, 153, 70, 0.5)")
      .attr("stroke", "#F59946")
      .attr("stroke-width", 2);

    // Draw points
    chart.selectAll(".point")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "point")
      .attr("cx", (d: any, i: number) => rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("cy", (d: any, i: number) => rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2))
      .attr("r", 4)
      .attr("fill", "#F59946");
  };

  return (
    <div className="counter-wrap style2 bg-lochi pt-100 pb-75" id="profile">
      <div className="container">
        <div className="section-title style4 text-center mb-40">
          <span>Profile Statistics</span>
          <h2>Mauritius Disaster Status Dashboard</h2>
          <p className="text-white">Current statistics on emergency preparedness resources...</p>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="card bg-white p-4 rounded shadow-sm">
              <h4 className="text-center mb-4">Mauritius Disaster Risk Map</h4>
              <div id="mauritius-map" ref={mapRef} className="map-container position-relative"></div>
            </div>
          </div>
        </div>

        <div className="counter-card-wrap style2">
          <CounterCard icon="bi bi-people-fill" count={1285} text="Trained Response Personnel" />
          <CounterCard icon="bi bi-building-fill" count={67} text="Evacuation Centers" style="style2" />
          <CounterCard icon="bi bi-broadcast-pin" count={32} text="Early Warning Stations" style="style3" />
          <CounterCard icon="bi bi-exclamation-triangle-fill" count={3} text="Active Alerts" style="style4" />
        </div>

        <div className="row mb-4 mt-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card bg-white p-4 rounded shadow-sm h-100">
              <h5 className="mb-3 text-center">Cyclone Activity (Last 5 Years)</h5>
              <div ref={cycloneChartRef} className="chart-container"></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card bg-white p-4 rounded shadow-sm h-100">
              <h5 className="mb-3 text-center">Monthly Flood Risk</h5>
              <div ref={floodChartRef} className="chart-container"></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card bg-white p-4 rounded shadow-sm h-100">
              <h5 className="mb-3 text-center">Disaster Readiness Assessment</h5>
              <div ref={radarChartRef} className="chart-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;