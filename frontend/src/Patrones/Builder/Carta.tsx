import React from "react";
import { Col, Card } from "react-bootstrap";

class Carta {
  private img: string;
  private text: string;
  private price?: number;
  private worker?: string;
  private style?: string;
  private cardBody: JSX.Element;
  private cardText: JSX.Element;
  private createImg: JSX.Element;
  private createCard: JSX.Element;
  private createCol: JSX.Element;

  constructor() {
    this.img = "";
    this.text = "";
    this.price = undefined;
    this.worker = undefined;
    this.style = undefined;
    this.cardBody = <></>;
    this.cardText = <></>;
    this.createImg = <></>;
    this.createCard = <></>;
    this.createCol = <></>;
  }

  setPropiedades({ img, text, price, worker, style }: { img: string, text: string, price?: number, worker?: string, style?: string }) {
    this.img = img;
    this.text = text;
    this.price = price;
    this.worker = worker;
    this.style = style;
  }

  getPropiedades() {
    return {
      img: this.img,
      text: this.text,
      price: this.price,
      worker: this.worker,
      style: this.style,
    };
  }

  // Getters
  getCardBody(): JSX.Element {
    return this.cardBody;
  }

  getCardText(): JSX.Element {
    return this.cardText;
  }

  getCreateImg(): JSX.Element {
    return this.createImg;
  }

  getCreateCard(): JSX.Element {
    return this.createCard;
  }

  getCreateCol(): JSX.Element {
    return this.createCol;
  }

  // Setters
  setCardBody(cardBody: JSX.Element) {
    this.cardBody = cardBody;
  }

  setCardText(cardText: JSX.Element) {
    this.cardText = cardText;
  }

  setCreateImg(createImg: JSX.Element) {
    this.createImg = createImg;
  }

  setCreateCard(createCard: JSX.Element) {
    this.createCard = createCard;
  }

  setCreateCol(createCol: JSX.Element) {
    this.createCol = createCol;
  }
}

export default Carta;
