import React from 'react';

import './search-results.css';

const SearchResults = () => {
    return (
        <React.Fragment>
            <HeaderSearch />
            <main>
                <div className="search__container">
                    <SearchStays />
                    <SearchMap />
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default SearchResults;