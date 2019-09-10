import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null
        }
    }

    setupQuestion = (category) => {
        //console.log(category);
        return (
            <Col md={3} key={category.id}>
                <div className="question category-row">
                    {category.title}
                </div>
            </Col>
        );
    }

    formatQuestionList = () => {
        if (this.state.categories) {
            let cats = this.state.categories;
            return (
                <Container>
                    <Row>
                        {cats.map(n => {return this.setupQuestion(n)})}
                    </Row>
                </Container>
            )
        } else {
            return "No data to display!";
        }
    }

    fetchCategories = () => {
        fetch("http://jservice.io/api/categories?count=8")
            .then(response => response.json())
            .then(data => this.setState({categories: data}))
    }

    componentDidMount() {
        this.fetchCategories();
    }

    render() {
        if (this.state.categories) {
            return (
                <div>
                    {this.formatQuestionList()}
                </div>
            );
        } else {
            return "Nothing to see here!";
        }
    };
};