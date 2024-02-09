import React from 'react'
import { Button } from '../components/elements/Button'
import './style.css'

export const CreateNft = () => {
  return (
    <div className='create ptb5'>
      <div className='container '>
        <h1 className='text-center'>
          Create <span className='highlight'>NFT</span>
        </h1>
        <div className='row p-12'>
          <div className='col p-12'>
            <h3>Upload File</h3>

            <div className='box'>
              <svg
                width='120'
                height='120'
                viewBox='0 0 158 124'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M138.443 40.6166C140.562 40.7229 142.43 40.689 144.265 40.9258C153.825 42.1676 160.134 51.5559 157.331 60.8282C152.033 78.2761 146.582 95.6659 141.067 113.036C138.852 120.004 133.145 123.903 125.565 123.937C114.151 123.981 102.738 123.937 91.324 123.937C66.5125 123.937 41.7203 123.845 16.8895 123.99C8.29793 124.039 2.70186 118.748 0.9585 113.36C0.384717 111.646 0.0777112 109.853 0.0482948 108.045C-0.00949603 77.4273 -0.025549 46.8046 0.000135771 16.177C0.0242153 6.99166 6.55939 0.173911 15.6759 0.0724416C27.6289 -0.0676823 39.5868 0.0386186 51.5303 0.0386186C53.6417 0.0232816 55.7341 0.440474 57.6792 1.26465C59.6244 2.08884 61.3815 3.30266 62.8428 4.83182C64.9281 6.91435 67.0663 8.94857 69.1035 11.1132C71.4825 13.6355 74.3335 14.7371 77.7721 14.7226C92.3065 14.6695 106.846 14.6985 121.385 14.7226C131.912 14.7226 138.433 21.2891 138.438 31.8902L138.443 40.6166ZM70.9672 118.158C89.1135 118.158 107.253 118.158 125.387 118.158C130.858 118.158 134.205 115.684 135.823 110.49C141.059 93.7171 146.28 76.9393 151.484 60.1566C153.772 52.7639 149.235 46.5356 141.539 46.5308C105.07 46.5114 68.5962 46.5114 32.1174 46.5308C27.1714 46.5259 23.598 49.0917 22.1533 53.8027C16.8558 70.7432 11.5583 87.6837 6.35712 104.658C5.8154 106.442 5.70154 108.33 6.02483 110.166C6.98801 115.23 11.0526 118.158 16.7065 118.163C34.7854 118.176 52.8723 118.174 70.9672 118.158ZM5.73106 85.7848H6.0778C6.22709 85.3403 6.3812 84.9006 6.52086 84.4512C9.81173 73.9339 13.0962 63.4197 16.3742 52.9088C18.9459 44.7285 24.4264 40.7277 32.9939 40.7277H132.683V31.7888C132.683 24.4588 128.729 20.4677 121.467 20.4677C106.928 20.4677 92.3883 20.4146 77.8443 20.4677C72.7298 20.4967 68.4774 18.7911 64.957 15.0899C63.1366 13.1571 61.1717 11.3838 59.3609 9.45591C56.953 6.88053 54.0634 5.74021 50.5189 5.75954C39.2256 5.83685 27.9275 5.75954 16.6343 5.80303C15.502 5.77074 14.3701 5.8762 13.2631 6.1171C8.44722 7.32506 5.75032 11.2195 5.75032 16.8438C5.75032 39.3345 5.75032 61.8252 5.75032 84.3159L5.73106 85.7848Z'
                  fill='url(#paint0_linear_1_2672)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_1_2672'
                    x1='-0.0117188'
                    y1='0'
                    x2='177.718'
                    y2='43.5818'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-col p-12or='#00C9FA' />
                    <stop offset='1' stop-col p-12or='#7740E2' />
                  </linearGradient>
                </defs>
              </svg>
              <span>Click to Upload</span>
            </div>
            <h3>Image, Video, Audio, or 3D Model</h3>
            <div className='box box2'>
              <span>
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF. Max size: 100 MB
              </span>
            </div>
          </div>
          <div className='col p-12'>
            <form>
              <div className='row p-12'>
                <div className='col p-12'>
                  <label htmlFor='name'>Name</label>
                  <div className='input'>
                    <input
                      className='input-field'
                      type='text'
                      placeholder='Enter Name for your NFT'
                      name='name'
                    />
                  </div>
                </div>
              </div>
              <div className='row p-12'>
                <div className='col p-12'>
                  <label htmlFor='category'>Category</label>
                  <div className='input'>
                    <input
                      className='input-field'
                      type='text'
                      placeholder='Select NFT Category'
                      name='name'
                    />
                  </div>
                </div>
                <div className='col p-12'>
                  <label htmlFor='name'>External Link</label>
                  <div className='input'>
                    <input
                      className='input-field'
                      type='text'
                      placeholder='Enter external website link  for your file'
                      name='name'
                    />
                  </div>
                </div>
              </div>
              <div className='row p-12'>
                <div className='col p-12'>
                  <label>Description</label>
                  <textarea
                    type='text'
                    aria-multiline
                    placeholder='Enter  Description for your NFT'
                  />
                </div>
              </div>
              <div className='row p-12'>
                <div className='col p-12'>
                  <label htmlFor='name'>Name</label>
                  <div className='input'>
                    <input
                      className='input-field'
                      type='text'
                      placeholder='Enter Name for your NFT'
                      name='name'
                    />
                  </div>
                </div>
                <div className='col p-12'>
                  <label htmlFor='name'>Name</label>
                  <div className='input'>
                    <input
                      className='input-field'
                      type='text'
                      placeholder='Enter Name for your NFT'
                      name='name'
                    />
                  </div>
                </div>
                <div className='col p-12 justify-end'>
                  <Button label='Coming Soon' variant='primary' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
