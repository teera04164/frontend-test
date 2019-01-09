
import React from 'react'
class ModelUpload extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setSs
        this.state = {
            name: 'sorte',
            value: '',
            selectedFile: null
        }
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className="modal fade" id="copyPast" tabIndex={-1} role="dialog" aria-labelledby="copyPastLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="copyPastLabel">COPY & PAST</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <h1>{this.state.value} </h1>
                            <div className="modal-body">
                                <div className="form-group">
                                    <textarea value={this.state.value} onChange={this.handleChange} ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" type="submit" value="submit">upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default ModelUpload