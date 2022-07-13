import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function ProfessionalSkill() {
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div className='progresses' >
            <label>HTML</label>
            <ProgressBar variant="success" animated now={75} />
            <label>CSS</label>
            <ProgressBar animated now={60} />
            <label >JavaScript</label>
            <ProgressBar variant="warning" animated now={65} />
        </div>
        <div className='progresses2'>
            <label>ReactJs</label>
            <ProgressBar variant="danger" animated now={55} />
       </div>
    </div>
    </div>
  )
}
