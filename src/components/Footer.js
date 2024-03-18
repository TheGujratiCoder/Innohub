import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  return (
    <MDBFooter color='black' bgColor='white' className='text-center text-lg-start text-black'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Innohub
              </h6>
              <p>
              InnoHub is a startup that provides innovative solutions to its clients. 
              The website serves as the online presence for the startup, showcasing its services, 
              introducing the team, and providing contact information.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='https://angular.io/' rel="noreferrer" target='_blank' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='https://react.dev' rel="noreferrer" target='_blank' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='https://vuejs.org' rel="noreferrer" target='_blank' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='https://laravel.com' rel="noreferrer" target='_blank' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' rel="noreferrer" className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Ahmedabad , GJ , 388721, IN
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@innohub.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 8243682932
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 91 937459832
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className=''>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='https://facebook.com' rel="noreferrer" target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f'/>
          </a>
          <a href='https://twitter.com' rel="noreferrer" target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter'/>
          </a>
          <a href='https://google.com' rel="noreferrer" target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google'/>
          </a>
          <a href='https://instagram.com' rel="noreferrer" target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram'/>
          </a>
          <a href='https://linkedin.com' rel="noreferrer" target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin'/>
          </a>
          <a href='https://github.com' rel="noreferrer" target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github'/>
          </a>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          TheGujratiCoder
        </a>
      </div>
    </MDBFooter>
  );
}