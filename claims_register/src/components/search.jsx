import React, { Component, Fragment } from 'react';

const Search = function (props) {

    return (
        <Fragment>            
                <div className="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Активни рекламации
                        </label>
                    </div>
                </div>
            
                <div className="form-group">
                <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Активни огледи
                        </label>
                    </div>
                </div>
                
        </Fragment>

    )
};

export default Search;