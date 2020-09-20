import React, { PureComponent } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class NewTask extends PureComponent {
    state = {
        inputValue: ''
    };

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.sendValue();
        }
    };


    sendValue = () => {
        const { inputValue } = this.state;
        if (!inputValue) {
            return;
        }
        this.props.onAdd(inputValue);
        this.setState({
            inputValue: ''
        });
    };

    render() {
        return (
            <InputGroup
                className="my-3"
            >
                <FormControl
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    placeholder="Input task"
                    aria-label="Input task"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button
                        style={{
                            backgroundColor: "rgb(114, 114, 121)"
                        }}

                        onClick={this.sendValue}
                        variant="outline-primary"
                    >
                        Add task
                 </Button>
                </InputGroup.Append>
            </InputGroup>

        );
    }
}

NewTask.propTypes={
    onAdd:PropTypes.func.isRequired,
};