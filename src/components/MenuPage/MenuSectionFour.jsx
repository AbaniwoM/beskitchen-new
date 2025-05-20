import {React, useState} from 'react'
import './Modal.css'
import DetailFive from './DetailFive'
import DetailSix from './DetailSix'
import DetailSeven from './DetailSeven'
import DetailEight from './DetailEight'

const MenuSectionFour = () => {
    const [modalFive, setModalFive] = useState(false);
    const [modalSix, setModalSix] = useState(false);
    const [modalSeven, setModalSeven] = useState(false);
    const [modalEight, setModalEight] = useState(false);

    const toggleModalFive = () => {
      setModalFive(!modalFive);
    };

    const toggleModalSix = () => {
        setModalSix(!modalSix);
    };

    const toggleModalSeven = () => {
        setModalSeven(!modalSeven);
    };

    const toggleModalEight = () => {
        setModalEight(!modalEight);
    };
  
    if(modalFive) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    if(modalSix) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
    }

    if(modalSeven) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
    }

    if(modalEight) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
    }


  return (
    <div className='flex flex-col m-[4rem] sm:m-[2rem] gap-[3rem]'>
    <div className='flex flex-wrap justify-between sm:gap-[3rem] md:gap-[3rem] lg:gap-[3rem]'>
        <div className='flex flex-col'>
            <div className='flex gap-1 flex-wrap'>
                {modalFive && (
                <div className="modal">
                  <div onClick={toggleModalFive} className="overlay"></div>
                  <div className="modal-content">
                    <DetailFive />
                    <button className="close-modal cursor-pointer" onClick={toggleModalFive}>
                      X
                    </button>
                  </div>
                </div>
                )}
                <button className='text-white font-bold cursor-pointer md:text-[1.3rem] lg:text-[1.5rem]' onClick={toggleModalFive}>Partminger</button>
                <p className='text-gray-400'>........................................................</p>
                <p className='text-yellow-500 spice-text md:text-[1.3rem] lg:text-[1.5rem]'>₦500</p>
            </div>
            <div className='text-gray-400 md:text-[1.3rem] lg:text-[1.4rem]'>Maecenas interdum lorem eleifend orci aliquam mollis.</div>
        </div>
        <div className='flex flex-col'>
            <div className='flex gap-1 flex-wrap'>
               {modalSix && (
                <div className="modal">
                  <div onClick={toggleModalSix} className="overlay"></div>
                  <div className="modal-content">
                    <DetailSix />
                    <button className="close-modal cursor-pointer" onClick={toggleModalSix}>
                      X
                    </button>
                  </div>
                </div>
                )}
                <button className='text-white font-bold cursor-pointer md:text-[1.3rem] lg:text-[1.5rem]' onClick={toggleModalSix}>Garlic</button>
                <p className='text-gray-400'>...............................................................</p>
                <p className='text-yellow-500 spice-text md:text-[1.3rem] lg:text-[1.5rem]'>₦1500</p>
            </div>
            <div className='text-gray-400 md:text-[1.3rem] lg:text-[1.4rem]'>Maecenas interdum lorem eleifend orci aliquam mollis.</div>
        </div>
    </div>
    <div className='flex flex-wrap justify-between sm:gap-[3rem] md:gap-[3rem] lg:gap-[3rem]'>
        <div className='flex flex-col'>
            <div className='flex gap-1 flex-wrap'>
               {modalSeven && (
                <div className="modal">
                  <div onClick={toggleModalSeven} className="overlay"></div>
                  <div className="modal-content">
                    <DetailSeven />
                    <button className="close-modal cursor-pointer" onClick={toggleModalSeven}>
                      X
                    </button>
                  </div>
                </div>
                )}
                <h3 className='text-white font-bold cursor-pointer md:text-[1.3rem] lg:text-[1.5rem]' onClick={toggleModalSeven}>Ginger</h3>
                <p className='text-gray-400'>.............................................................</p>
                <p className='text-yellow-500 spice-text md:text-[1.3rem] lg:text-[1.5rem]'>₦1000</p>
            </div>
            <div className='text-gray-400 md:text-[1.3rem] lg:text-[1.4rem]'>Maecenas interdum lorem eleifend orci aliquam mollis.</div>
        </div>
        <div className='flex flex-col'>
            <div className='flex gap-1 flex-wrap'>
                {modalEight && (
                <div className="modal">
                  <div onClick={toggleModalEight} className="overlay"></div>
                  <div className="modal-content">
                    <DetailEight />
                    <button className="close-modal cursor-pointer" onClick={toggleModalEight}>
                      X
                    </button>
                  </div>
                </div>
                )}
                <h3 className='text-white font-bold cursor-pointer md:text-[1.3rem] lg:text-[1.5rem]' onClick={toggleModalEight}>Scent Leaves</h3>
                <p className='text-gray-400'>..................................................</p>
                <p className='text-yellow-500 spice-text md:text-[1.3rem] lg:text-[1.5rem]'>₦1200</p>
            </div>
            <div className='text-gray-400 md:text-[1.3rem] lg:text-[1.4rem]'>Maecenas interdum lorem eleifend orci aliquam mollis.</div>
        </div>
    </div>
    </div>
  )
}

export default MenuSectionFour;