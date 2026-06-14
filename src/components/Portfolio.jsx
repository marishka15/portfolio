import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends Component {
  state = {
    selected: 'All',
  };

  handleSelectFilter = (filter) => {
    this.setState({
      selected: filter,
    });
  };

  render() {
    const { projects } = this.props;
    const { selected } = this.state;

    const filters = [
      'All',
      ...new Set(projects.map(project => project.category)),
    ];

    const filteredProjects =
      selected === 'All'
        ? projects
        : projects.filter(
            project => project.category === selected
          );

    return (
      <>
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.handleSelectFilter}
        />

        <ProjectList projects={filteredProjects} />
      </>
    );
  }
}
