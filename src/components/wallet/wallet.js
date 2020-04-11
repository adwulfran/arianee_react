import React from "react";
import { Arianee } from "@arianee/arianeejs";
import "./wallet.css";
import { Card, Col, Row } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// modal component to access wallet
import { Modal, Button } from "antd";
import MnemonicModal from "./modal/mnemonic-modal";

export default class WalletComponent extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    return (
      <div>
        <h2> Access My Wallet {/*this.state.All*/}</h2>
        <div>
          Do not have a wallet?{" "}
          <Link to="/create-wallet">Create A New Wallet</Link>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={12}>
              <Card title="Mnemonic" bordered={true}>
                <div>
                  <Button type="primary" onClick={this.showModal}>
                    Access by Mnemonic Phrase
                  </Button>
                  <Modal
                    title="Access by Mnemonic Phrase"
                    visible={this.state.visible}
                    cancelButtonProps={{ style: { display: "none" } }}
                    okButtonProps={{ style: { display: "none" } }}
                  >
                    <MnemonicModal></MnemonicModal>
                  </Modal>
                </div>
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
