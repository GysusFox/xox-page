/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Hipodromo from './../IMG/fiesta.jpg'

import "./css/Tickets.css";

function BtnCompra(){
    return(
        <div className="btnCompra">
            <button>BUY</button>
        </div>
    )
}

function Tickets(props) {
    const [lugar, setLugar] = useState(false);
    const [pago, setPago] = useState(false);

    const [radioLugar, setRadioLugar] = useState(0);
    const [radioPago, setRadioPago] = useState('');
    
    const changeRadioLugar=e=>{
        setRadioLugar(e.target.value);
    }
    const changeRadioPago=e=>{
        setRadioPago(e.target.value);
        console.log(radioPago);
    }

    const [cantidad, setCantidad] = useState(0);

    const changeCantidadMas = () => {
        if(cantidad == 4){

        }else{
            setCantidad(cantidad + 1);
        }
    }
    const changeCantidadMenos = () => {
        if(cantidad == 0){

        }else{
            setCantidad(cantidad - 1);
        }
    }

    if (props.active === 3) {
        return (
            <div className="contenedorTickets">
                <div className="ticketsDetail">
                    <div className="tituloPrincipal">
                        {/* <h5>VIP</h5>
                        <p>
                            1 : extended treatment<br/> 2 : a part of a whole
                        </p>
                        <h5>GENERAL</h5>
                        <p>
                            1 : extended treatment of or attention to particular items explaining without going into detail giving careful attention to detail. 2 : a part of a whole: such as. a : a small and subordinate part : particular planned the wedding down to the smallest detail also : a reproduction of such a part of a work of art.
                        </p> */}
                        <img src={Hipodromo} />
                    </div>
                </div>
                <div className="ticketsCompra">
                    <div className="title ">
                        <h4>06/27/2022</h4>
                    </div>
                    <div className="title ">
                        <h4>00:00 - 07:00 AM</h4>
                    </div>
                    <div className="title ">
                        <h4>HIPODROMO DE PALERMO</h4>
                    </div>
                    <div className={lugar ? "title lugar on" : "title lugar off"}>
                        <div
                            onClick={() => setLugar(!lugar)}
                            className={
                                lugar ? "btnOption active" : " btnOption inactive"
                            }
                        >
                            <h4>SITE</h4>
                        </div>
                        <div className="contenedorOption">
                            <FormGroup className="option">
                                <Input 
                                    type="radio" 
                                    id="vip" 
                                    value="1" 
                                    name="tipoEntrada" 
                                    onChange={changeRadioLugar} 
                                />
                                <Label for="vip">VIP</Label>                                
                            </FormGroup>
                            <FormGroup className="option">
                                <Input
                                    type="radio"
                                    id="general"
                                    value="2"
                                    name="tipoEntrada"
                                    onChange={changeRadioLugar}
                                />
                                <Label for="general">General</Label>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="title cantidad">
                        <h4>COUNT</h4>
                        <FormGroup>
                            <Input
                                type="text"
                                id="cantEntradas"
                                name="cantEntradas"
                                placeholder="1 - 4"
                                value={cantidad == 0? 0 : cantidad}
                                disabled
                                // onChange={changeCantidad}
                            />      
                            <i className="fa-solid fa-minus" onClick={changeCantidadMenos}></i>                      
                            <i className="fa-solid fa-plus" onClick={changeCantidadMas}></i>                      
                        </FormGroup>                        
                    </div>
                    <div className="title totalPrice">
                        <h4>$ {radioLugar == 1 ? 3500 * cantidad : ''}{radioLugar == 2 ? 2500 * cantidad : ''}</h4>
                    </div>
                    <div
                        
                        className={
                            pago ? "title metodoPago on" : "title metodoPago off"
                        }
                    >
                        <div
                            onClick={() => setPago(!pago)}
                            className={
                                pago ? "btnOption active" : " btnOption inactive"
                            }
                        >
                            <h4 >PAYMENT METHOD</h4>
                        </div>
                        <div className="contenedorOption">
                            <FormGroup className="option">
                                <Input
                                    type="radio"
                                    id="efectivo"
                                    value="efectivo"
                                    name="tipoPago"
                                    onChange={changeRadioPago}
                                />
                                <Label for="efectivo">CASH</Label>
                            </FormGroup>

                            <FormGroup className="option">
                                <Input
                                    type="radio"
                                    id="tarjetaCredito"
                                    value="tarjetaCredito"
                                    name="tipoPago"
                                    onChange={changeRadioPago}
                                />
                                <Label for="tarjetaCredito">CREDIT CARD</Label>
                            </FormGroup>

                            <FormGroup className="option">
                                <Input
                                    type="radio"
                                    id="tarjetaDebito"
                                    value="tarjetaDebito"
                                    name="tipoPago"
                                    onChange={changeRadioPago}
                                />
                                <Label for="tarjetaDebito">DEBIT CARD</Label>
                            </FormGroup>

                            <FormGroup className="option">
                                <Input
                                    type="radio"
                                    id="transferencia"
                                    value="transferencia"
                                    name="tipoPago"
                                    onChange={changeRadioPago}
                                />
                                <Label for="transferencia">TRANSFER</Label>
                            </FormGroup>
                        </div>
                    </div>
                    
                    {radioLugar > 0 && radioPago !== '' && cantidad > 0 ? <BtnCompra /> : '' }

                </div>
                
            </div>
        );
    } else {
        return;
    }
}

export default Tickets;
