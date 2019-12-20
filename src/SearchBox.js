import React from 'react';
import { ANIMALS } from 'petfinder-client';
import { Consumer } from './SearchContext';

class SearchBox extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <Consumer>
        {context => (
          <form onSubmit={this.handleFormSubmit}>
            <div className="search-params">
              <label htmlFor="location">
                Location
                <input
                  id="location"
                  type="text"
                  value={context.location}
                  placeholder="Location"
                  onChange={context.handleLocationChange}
                />
              </label>

              <label htmlFor="animal">
                Animal
                <select
                  id="animal"
                  value={context.animal}
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                >
                  <option />
                  {ANIMALS.map(animal => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </label>

              <label htmlFor="breed">
                Breed
                <select
                  id="breed"
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  disabled={!context.breeds.length}
                >
                  <option />
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>

              <button>Submit</button>
            </div>
          </form>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
