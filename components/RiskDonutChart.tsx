'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as dc from 'dc';
import crossfilter from 'crossfilter2';

interface RiskData {
  category: string;
  value: number;
  color: string;
}

interface RiskDonutChartProps {
  districtName: string;
  lowRisk: number;
  mediumRisk: number;
  highRisk: number;
  lowRiskAreas: string;
  mediumRiskAreas: string;
  highRiskAreas: string;
}

const RiskDonutChart: React.FC<RiskDonutChartProps> = ({
  districtName,
  lowRisk,
  mediumRisk,
  highRisk,
  lowRiskAreas,
  mediumRiskAreas,
  highRiskAreas
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartId = `risk-chart-${districtName.toLowerCase().replace(/\s+/g, '-')}`;

  useEffect(() => {
    if (!chartRef.current) return;

    // Clear any existing chart
    d3.select(chartRef.current).selectAll('*').remove();
    
    // Create the chart div
    const chartDiv = d3.select(chartRef.current)
      .append('div')
      .attr('id', chartId)
      .style('width', '100%')
      .style('height', '100%');

    // Prepare data for the chart
    const data: RiskData[] = [
      { category: 'Low Risk', value: lowRisk, color: '#ffe0b2' },
      { category: 'Medium Risk', value: mediumRisk, color: '#ffab40' },
      { category: 'High Risk', value: highRisk, color: '#ff6e40' }
    ];

    // Create crossfilter and dimension
    const ndx = crossfilter(data);
    const categoryDimension = ndx.dimension((d: RiskData) => d.category);
    const categoryGroup = categoryDimension.group().reduceSum((d: RiskData) => d.value);

    // Create the chart
    const donutChart = dc.pieChart(`#${chartId}`);
    
    donutChart
      .width(300)
      .height(300)
      .innerRadius(75)
      .dimension(categoryDimension)
      .group(categoryGroup)
      .colors(d3.scaleOrdinal().domain(['Low Risk', 'Medium Risk', 'High Risk']).range(['#ffe0b2', '#ffab40', '#ff6e40']))
      .on('pretransition', function(chart) {
        chart.selectAll('text.pie-slice').text(function(d) {
          return d.data.key + ': ' + d.data.value + '%';
        });
      });

    // Add center text
    donutChart.on('pretransition', function(chart) {
      const svg = chart.select('svg');
      const width = chart.width();
      const height = chart.height();
      
      // Remove any existing center text
      svg.selectAll('.center-text').remove();
      
      // Add district name in center
      const centerGroup = svg.append('g')
        .attr('class', 'center-text')
        .attr('transform', `translate(${width/2}, ${height/2})`);
      
      centerGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '-0.5em')
        .attr('class', 'district-name')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .style('fill', '#338F7A')
        .text(districtName);
      
      centerGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '1em')
        .attr('class', 'risk-text')
        .style('font-size', '12px')
        .style('fill', '#666')
        .text('Risk Assessment');
    });

    // Render the chart
    dc.renderAll();

    // Cleanup function
    return () => {
      dc.chartRegistry.clear();
    };
  }, [districtName, lowRisk, mediumRisk, highRisk, chartId]);

  return (
    <div className="risk-chart-container position-relative" style={{ height: '300px' }}>
      <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default RiskDonutChart;
