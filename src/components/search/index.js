import React, { Component } from 'react';
import { SearchBar, WhiteSpace } from 'antd-mobile';

class SearchBarComponet extends Component {
    state = {
        value: ''
    }
    onChange = (value) => {
        this.setState({ value });
        console.log(this.state.value);
    };
    render() {
        return (
            <div>
                <SearchBar
                    placeholder="Search"
                    maxLength={10}
                    value={this.state.value}
                    onChange={this.onChange} />
                <WhiteSpace />
            </div>
        )
    }
}

export default SearchBarComponet;