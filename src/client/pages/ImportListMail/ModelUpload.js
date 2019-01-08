
import React from 'react'

class ModelUpload extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            name: 'sorte',
            value: '',
            selectedFile: null
        }

    }
    onFormSubmit = (e) => {

    }
    handleselectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
        })
        console.warn("data : ", this.state.selectedFile)
    }

    render() {
        return (
            <div className="modal fade" id="uploadFile" tabIndex={-1} role="dialog" aria-labelledby="uploadFileLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="uploadFileLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <form onSubmit={this.onFormSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="usr">Name:</label>
                                    <input type="file" className="form-control" onChange={this.handleselectedFile} name="file" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" type="submit" value="Submit">upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default ModelUpload