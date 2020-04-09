import React from "react";
import { Card } from "antd";
import { Arianee } from "@arianee/arianeejs";

export default class TabsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "By Mnemonic Phrase"
    };
  }
  componentWillMount() {
    const $wallet = new Arianee().init().then(
      arianee => arianee.fromRandomKey()
    );

    $wallet.then(async w => {
      this.setState({
        mnemonic: w.mnemnonic,
        private_key : w.privateKey
      });
    });
  }


  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    this.tabList = [
      {
        key: "By Mnemonic Phrase",
        tab: "By Mnemonic Phrase"
      },
      {
        key: "By Private Key",
        tab: "By Private Key"
      }
    ];

    this.contentList = {
      "By Mnemonic Phrase": <p>{this.state.mnemonic}</p>,
      "By Private Key": <p>{this.state.private_key}</p>
    };
    return (
      <div>
        <Card
          style={{ width: "100%" }}
          title="Get a New Wallet"
          extra={<a href="#">More</a>}
          tabList={this.tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, "key");
          }}
        >
          {this.contentList[this.state.key]}
        </Card>
        <br />
        <br />
      </div>
    );
  }
}
