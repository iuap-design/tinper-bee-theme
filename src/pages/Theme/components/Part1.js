import React, { Component } from 'react';
import { ColItem } from './Card';
import styled from 'styled-components';
import {
    Row,
    Button,
    ButtonGroup,
    ProgressBar,
} from 'tinper-bee';

export const PartOne = (props) => {
    if(props.customed){
        let {styleJs:{all:_primary,button:_button},clsPrefix,theme} = props;
        // const PrimaryButton = styled(Button)`${_primary}`;
        const PrimaryButton = styled(Button)`${_primary}
            background-color:${theme["primary-color"]} !important;
            border-color:${theme["primary-color"]} !important;
            :hover{
                background-color:${theme["primary-color-light"]} !important;
            }
            :active{
                background-color:${theme["primary-color-dark"]} !important;
            }
        `;
    
        const SecondaryButton = styled(Button)`${_button}`;
        const PrimaryProgressBar = styled(ProgressBar)`{
            .u-progress-bar{
              background-color:${theme["primary-color"]} !important;
            }
        }`;
        return(
            <Row>
                <ColItem md={3} title={'按钮 Button'}>
                    <PrimaryButton colors="primary" >主按钮</PrimaryButton>
                    <SecondaryButton colors="secondary">次按钮</SecondaryButton>
                </ColItem>
                <ColItem md={3} title={'按钮组 ButtonGroup'}>
                    <ButtonGroup >
                        <PrimaryButton colors="primary">左侧</PrimaryButton>
                        <PrimaryButton colors="primary">中间</PrimaryButton>
                        <PrimaryButton colors="primary">右侧</PrimaryButton>
                    </ButtonGroup>
                </ColItem>
                <ColItem md={6} title={'进度条 ProgressBar'}>
                    <PrimaryProgressBar  now={40} />
                </ColItem>
            </Row>
        )
    }
    return (
        <Row>
            <ColItem md={3} title={'按钮 Button'}>
                <Button colors="primary" >主按钮</Button>
                <Button colors="secondary">次按钮</Button>
            </ColItem>
            <ColItem md={3} title={'按钮组 ButtonGroup'}>
                <ButtonGroup >
                    <Button colors="primary">左侧</Button>
                    <Button colors="primary">中间</Button>
                    <Button colors="primary">右侧</Button>
                </ButtonGroup>
            </ColItem>
            <ColItem md={6} title={'进度条 ProgressBar'}>
                <ProgressBar  now={40} />
            </ColItem>
        </Row>
    )
}

