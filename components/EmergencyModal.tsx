"use client";
import React from 'react';

interface EmergencyAlertModalProps {
  show?: boolean;
  onClose?: () => void;
}

const EmergencyModal: React.FC<EmergencyAlertModalProps> = ({ show = false, onClose }) => {
  const [isOpen, setIsOpen] = React.useState(show);
  
  React.useEffect(() => {
    // Check if this is the first visit in this session
    if (!sessionStorage.getItem('alertShown') && !isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('alertShown', 'true');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }} id="emergencyAlertModal" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header" style={{ backgroundColor: "#F59946", color: "white" }}>
            <h5 className="modal-title" id="emergencyAlertModalLabel">
              <i className="ri-alarm-warning-line me-2"></i>Emergency Alert
            </h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={handleClose}
              aria-label="Close"
              style={{ backgroundColor: "white" }}
            ></button>
          </div>
          <div className="modal-body">
            <h5>Cyclone Warning in Effect</h5>
            <p>A cyclone warning is currently in effect for the following areas:</p>
            <ul>
              <li>Eastern Coastal Regions</li>
              <li>Southern Districts</li>
              <li>Port Louis</li>
            </ul>
            <p className="alert alert-warning">
              Residents in affected areas should follow evacuation instructions if issued by local authorities.
            </p>
            <div className="d-flex align-items-center mt-3 p-2 rounded" style={{ backgroundColor: "rgba(51, 143, 122, 0.1)" }}>
              <i className="ri-time-line me-2" style={{ color: "#338F7A" }}></i>
              <small>Last updated: April 3, 2025 - 08:30 AM</small>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
            <a href="alerts/current.html" className="btn style1">View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;