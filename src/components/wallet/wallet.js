import React from "react";
import { Arianee } from "@arianee/arianeejs";
import "./wallet.css";
import { Card, Col, Row } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class WalletComponent extends React.Component {
  

  render() {
    
    return (
      <div>
        <h2> Access My Wallet {/*this.state.All*/}</h2>
        <div>
          Do not have a wallet?{" "}
          
            {" "}
           
            <Link to="/create-wallet" >Create A New Wallet</Link>
          
        </div>
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={12}>
              <Card title="Mnemonic" bordered={true}>
                Access wallet with Mnemonic
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Private Key" bordered={true}>
                Access wallet with Private Key
              </Card>
            </Col>
          </Row>
        </div>{" "}
      </div>
    );
  }
}
