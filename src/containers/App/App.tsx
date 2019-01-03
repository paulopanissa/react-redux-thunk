import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkFetchData } from '../../actions/app';
import { ListGroup, ListGroupItem } from 'reactstrap';

class App extends Component<any, any> {

    constructor(props: any) {
        super(props)
    }

    componentDidMount(): void {
        this.props.fetchData();
    }

    render() {
    const { data } = this.props;
    return (
        <ListGroup>
          {data.map((item: any) => (
              <ListGroupItem key={item.id}>{ item.joke }</ListGroupItem>
          ))}
        </ListGroup>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    data: state.fetched,
    isFetching: state.isFetching,
    fetchedError: state.fetchedError

  }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchData: () => dispatch(thunkFetchData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
