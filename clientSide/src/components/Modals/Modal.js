
import React from 'react';


const Modal = ({ handleClose, show, modalInfo}) => {

    return (
        <div className={show ? "modal d-block" : "modal d-none"}>
            <div className="modal-dialog shadow z-depth-1" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="modalTitle" className="modal-title text-danger">{modalInfo.title}</h5>
                        <button type="button" className="close" onClick={handleClose} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="modalBody" className="modal-body">
                        <p>{modalInfo.body}</p>
                    </div>
                    <div className="modal-footer text-center">
                        <button type="button" className="btn btn-success m-auto" onClick={handleClose}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  export default Modal;
