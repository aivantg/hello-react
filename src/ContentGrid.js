import GridLayout from 'react-grid-layout';
import React, { Component } from 'react';
import './ContentGrid.css'
import ArticleCard from './components/ArticleCard'

class ContentGrid extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 1},
      {i: 'b', x: 1, y: 0, w: 1, h: 1},
      {i: 'c', x: 2, y: 0, w: 1, h: 1}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={4} rowHeight={400} width={800}>
        <div key="a"><ArticleCard title="Title A" description="Description A"/></div>
        <div key="b"><ArticleCard title="Title B" description="Description B"/></div>
        <div key="c"><ArticleCard title="Title C" description="Description C"/></div>
      </GridLayout>
    )
  }
}

export default ContentGrid;
