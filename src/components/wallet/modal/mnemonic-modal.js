import React from "react";
import { Form, Row, Col, Input, Button } from "antd";
import { Arianee } from "@arianee/arianeejs";
import "./mnemonic-modal.css";
import { useHistory, useLocation } from "react-router-dom";
import {fakeAuth} from "../../../services/canActivate"; 

const MnemonicModal = () => {
  let history = useHistory();
  let location = useLocation();

  const [form] = Form.useForm();

  const getFields = () => {
    //const count = expand ? 10 : 6;
    const count = 12;
    const children = [];

    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`${i + 1}`}
            rules={[
              {
                required: false,
                message: "Input something!",
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
      );
    }

    return children;
  };

  const onFinish = (values) => {
    function createVariables() {
      var mnemonicInput = "";
      for (var i = 0; i < 12; ++i) {
        mnemonicInput = mnemonicInput + values["field-" + i] + " ";
      }

      var k = Math.abs(mnemonicInput.length - 1);
      console.log(mnemonicInput.slice(0, k));
      return mnemonicInput.slice(0, k);
    }

    const $wallet = new Arianee()
      .init()
      .then((arianee) => arianee.fromMnemonic(createVariables()));

    $wallet.then(async (w) => {
      
      const b = await w.publicKey;
      console.log("b is " + b);
      let { from } = location.state || {
        from: { pathname: "/interface/" + b },
      };
      let login = () => {
        fakeAuth.authenticate(() => {
          history.replace(from);
        });
      };
      await login();
      //this.setState({
      //  mnemonic: w.mnemnonic,
      // private_key : w.privateKey
      //});
    });
    
    
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: "right",
          }}
        >
          <Button type="primary" htmlType="submit">
            CONTINUE
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MnemonicModal;


