import {React, useState} from 'react'
import './Modal.css'
import DetailOne from './DetailOne'
import DetailTwo from './DetailTwo'
import DetailThree from './DetailThree'
import DetailFour from './DetailFour'

const MenuSectionTwo = () => {
    const [modal, setModal] = useState(false);
    const [modalTwo, setModalTwo] = useState(false);
    const [modalThree, setModalThree] = useState(false);
    const [modalFour, setModalFour] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };

    const toggleModalTwo = () => {
        setModalTwo(!modalTwo);
    };

    const toggleModalThree = () => {
        setModalThree(!modalThree);
    };

    const toggleModalFour = () => {
        setModalFour(!modalFour);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    if(modalTwo) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
    }

    if(modalThree) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
    }

    if(modalFour) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
    }


  return (
    <div className='flex flex-col m-[4rem] sm:m-[2rem] gap-[3rem]'>
    <div className='flex flex-wrap justify-between sm:gap-[3rem] md:gap-[3rem] lg:gap-[3rem]'>
        <div className='flex flex-col'>
            <div className='flex gap-1 flex-wrap'>
                {modal && (
                <div className="modal">
                  <div onClick={toggleModal} className="overlay"></div>
                  <div className="modal-content">
                    <DetailOne />
                    <button className="close-modal cursor-pointer" onClick={toggleModal}>
                      X
                    </button>
                  </div>
                </div>
                )}
                <button className='text-white font-bold cursor-pointer md:text-[1.3rem] sm:text-[1.2rem] lg:text-[1.5rem] nx:text-[1.1rem] nxx:text-[1.1rem] nxxx:text-[1rem]' onClick={toggleModal}>Classic Zobo</button>
                <p className='text-gray-400'>.......................</p>
                <p className='text-yellow-500 spice-text md:text-[1.3rem] lg:text-[1.5rem] nx:text-[1.1rem] nxx:text-[1.1rem] nxxx:text-[1.1rem]'>₦500</p>
            </div>
            <div className='text-gray-400 md:text-[1.3rem] lg:text-[1.4rem] sm:text-[1.1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]'>Pure hibiscus steeped in species - no frills, all thrill.</div>
        </div>
        <div className='flex flex-col'>
            <div className='flex gap-1 flex-wrap'>
               {modalTwo && (
                <div className="modal">
                  <div onClick={toggleModalTwo} className="overlay"></div>
                  <div className="modal-content">
                    <DetailTwo />
                    <button className="close-modal cursor-pointer" onClick={toggleModalTwo}>
                      X
                    </button>
                  </div>
                </div>
                )}
                <button className='text-white font-bold cursor-pointer md:text-[1.3rem] lg:text-[1.5rem] sm:text-[1.2rem] nx:text-[1.1rem] nxx:text-[1.1rem] nxxx:text-[1rem]' onClick={toggleModalTwo}>Spiced Zobo</button>
                <p className='text-gray-400'>.............................................</p>
                <p className='text-yellow-500 spice-text md:text-[1.3rem] lg:text-[1.5rem] nx:text-[1.1rem] nxx:text-[1.1rem] nxxx:text-[1.1rem]'>₦1500</p>
            </div>
            <div className='text-gray-400 md:text-[1.3rem] lg:text-[1.4rem] sm:text-[1.1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]'>Ginger, cloves, and cinnamon dancing in your cup.</div>
        </div>
    </div>
    <div className='flex flex-wrap justify-between sm:gap-[3rem] md:gap-[3rem] lg:gap-[3rem]'>
        <div className='flex flex-col'>
            <div className='flex gap-1 flex-wrap'>
               {modalThree && (
                <div className="modal">
                  <div onClick={toggleModalThree} className="overlay"></div>
                  <div className="modal-content">
                    <DetailThree />
                    <button className="close-modal cursor-pointer" onClick={toggleModalThree}>
                      X
                    </button>
                  </div>
                </div>
                )}
                <h3 className='text-white font-bold cursor-pointer md:text-[1.3rem] lg:text-[1.5rem] sm:text-[1.2rem] nx:text-[1.1rem] nxx:text-[1.1rem] nxxx:text-[1rem]' onClick={toggleModalThree}>Fruity Zobo</h3>
                <p className='text-gray-400'>...............................................</p>
                <p className='text-yellow-500 spice-text md:text-[1.3rem] lg:text-[1.5rem] nx:text-[1.1rem] nxx:text-[1.1rem] nxxx:text-[1.1rem]'>₦1000</p>
            </div>
            <div className='text-gray-400 md:text-[1.3rem] lg:text-[1.4rem] sm:text-[1.1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]'>Zobo meets pineapple, orange, or mango for a sweet twist.</div>
        </div>
        <div className='flex flex-col'>
            <div className='flex gap-1 flex-wrap'>
                {modalFour && (
                <div className="modal">
                  <div onClick={toggleModalFour} className="overlay"></div>
                  <div className="modal-content">
                    <DetailFour />
                    <button className="close-modal cursor-pointer" onClick={toggleModalFour}>
                      X
                    </button>
                  </div>
                </div>
                )}
                <h3 className='text-white font-bold cursor-pointer md:text-[1.3rem] lg:text-[1.5rem] sm:text-[1.2rem] nx:text-[1.1rem] nxx:text-[1.1rem] nxxx:text-[1rem]' onClick={toggleModalFour}>Dry Blends Zobo</h3>
                <p className='text-gray-400'>.....................</p>
                <p className='text-yellow-500 spice-text md:text-[1.3rem] lg:text-[1.5rem] nx:text-[1.1rem] nxx:text-[1.1rem] nxxx:text-[1.1rem]'>₦1200</p>
            </div>
            <div className='text-gray-400 md:text-[1.3rem] lg:text-[1.4rem] sm:text-[1.1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]'>DIY Zobo kits with dried leaves and spices.</div>
        </div>
    </div>
    </div>
  )
}

export default MenuSectionTwo;