import React, { Component , useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

// Interface Observer
interface Observer {
    update(data: string): void;
    render(): JSX.Element;
}

export default Observer; 
