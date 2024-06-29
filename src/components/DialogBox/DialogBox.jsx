import React from 'react';
import './DialogBox.css';

const DialogBox = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h2>Dialog Title</h2>
        <p>Are you sure you want to proceed?</p>
        <div className="dialog-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};


()=> {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleConfirmDialog = () => {
    alert('Confirmed!');
    setIsDialogOpen(false);
  };

  return (
    <div className="App">
      <button onClick={handleOpenDialog}>Open Dialog</button>
      <DialogBox 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog} 
        onConfirm={handleConfirmDialog} 
      />
    </div>
  );
}

export default DialogBox;
