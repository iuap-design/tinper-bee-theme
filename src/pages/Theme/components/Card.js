import React, { Component } from 'react';
import { Col, Row ,Label} from 'tinper-bee';
import './Card.scss';

export const ColItem = (props) => {
    let {md,height=106,title='card title',content} = props;
  
    return (
      <Col className="col-item" md={md} xs={12} sm={12} style={{height:height}}>
        <div className="card-item">
          <Label className="card-title">{title}</Label>
          <div className="card-content">
              {props.children}
          </div>
        </div>
      </Col>
    )
}