import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalPop({name, id}) {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = () => setShowFirstModal(true);
  const handleSecondModalClose = () => setShowSecondModal(false);
  const handleSecondModalShow = () => setShowSecondModal(true);

  const handleConfirm = () => {
    // let candidateID = id;

    handleFirstModalClose();
    handleSecondModalShow();
  };

  return (
    <>
      <Button variant="primary" className="rounded-0 px-5" onClick={handleFirstModalShow}>
        Vote
      </Button>

      <Modal
        show={showFirstModal}
        onHide={handleFirstModalClose}
        aria-labelledby="exampleModalToggleLabel"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="exampleModalToggleLabel">Vote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your currently voting for {name}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showSecondModal}
        onHide={handleSecondModalClose}
        aria-labelledby="exampleModalToggleLabel2"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="exampleModalToggleLabel2">Voted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You successfully voted.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPop;




























// import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function ModalPop() {
//   const [showFirstModal, setShowFirstModal] = useState(false);
//   const [showSecondModal, setShowSecondModal] = useState(false);

//   const handleFirstModalClose = () => setShowFirstModal(false);
//   const handleFirstModalShow = () => setShowFirstModal(true);
//   const handleSecondModalClose = () => setShowSecondModal(false);
//   const handleSecondModalShow = () => setShowSecondModal(true);

//   const handleConfirm = () => {
//     handleFirstModalClose();
//     handleSecondModalShow();
//   };

//   return (
//     <div>
//       <Button variant="primary" className="rounded-0" onClick={handleFirstModalShow}>
//         Vote
//       </Button>

//       <Modal
//         show={showFirstModal}
//         onHide={handleFirstModalClose}
//         aria-labelledby="exampleModalToggleLabel"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="exampleModalToggleLabel">Vote</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Your currently voting for ..............
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleConfirm}>
//             Confirm
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <Modal
//         show={showSecondModal}
//         onHide={handleSecondModalClose}
//         aria-labelledby="exampleModalToggleLabel2"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="exampleModalToggleLabel2">Voted</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           You successfully voted.
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }



// export default ModalPop