import React from "react";
import "./wallet.css";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
// modal component to access wallet
import { Modal, Button } from "antd";
import MnemonicModal from "./modal/mnemonic-modal";
import PrivateKeyModal from "./modal/privatekey-modal";


export default class WalletComponent extends React.Component {
  state = { mnemonic_visible: false, privatekey_visible : false };

  showMnemonicModal = () => {
    this.setState({
      mnemonic_visible: true,
    });
  };
  showModalPrivateKey = () => {
    this.setState({
      privatekey_visible: true,
    });
  };
  handleOkMnemonic = e => {
    console.log(e);
    this.setState({
      mnemonic_visible: false,
    });
  };
  handleOkPrivateKey = e => {
    console.log(e);
    this.setState({
      privatekey_visible: false,
    });
  };

  handleCancelMnemonic = e => {
    console.log(e);
    this.setState({
      mnemonic_visible: false,
    });
  };

  handleCancelPrivateKey = e => {
    console.log(e);
    this.setState({
      privatekey_visible: false,
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
                  <Button type="primary" onClick={this.showMnemonicModal}>
                    Access by Mnemonic Phrase
                  </Button>
                  <Modal
                    title="Access by Mnemonic Phrase"
                    visible={this.state.mnemonic_visible}
                    onOk={this.handleOkMnemonic}
                    onCancel={this.handleCancelMnemonic}
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
              <div>
                  <Button type="primary" onClick={this.showModalPrivateKey}>
                  Access wallet with Private Key
                  </Button>
                  <Modal
                    title="Access by PK"
                    visible={this.state.privatekey_visible}
                    onOk={this.handleOkPrivateKey}
                     onCancel={this.handleCancelPrivateKey}
                    cancelButtonProps={{ style: { display: "none" } }}
                    okButtonProps={{ style: { display: "none" } }}
                  >
                    <PrivateKeyModal></PrivateKeyModal>
                  </Modal>
                </div>
              </Card>
            </Col>
          </Row>
        </div>{" "}
      </div>
    );
  }
}
