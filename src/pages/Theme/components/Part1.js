import React, { Component } from 'react';
import { ColItem } from './Card';
import {
    Row,
    Button,
    ButtonGroup,
    ProgressBar,
} from 'tinper-bee';

export const PartOne = (props) => {

    return (
        <Row>
            <ColItem md="3" title={'按钮 Button'}>
                <Button colors="primary" >主按钮</Button>
                <Button colors="secondary">次按钮</Button>
            </ColItem>
            <ColItem md="3" title={'按钮组 ButtonGroup'}>
                <ButtonGroup >
                    <Button colors="primary">左侧</Button>
                    <Button colors="primary">中间</Button>
                    <Button colors="primary">右侧</Button>
                </ButtonGroup>
            </ColItem>
            <ColItem md="6" title={'进度条 ProgressBar'}>
                <ProgressBar  now={40} />
            </ColItem>
        </Row>
    )
}

