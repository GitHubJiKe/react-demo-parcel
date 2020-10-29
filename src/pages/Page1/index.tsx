import React, { useState } from "react";
import { Button, Modal } from "antd";
import { LinkButton } from "../../components";

export default function Page1() {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      Page1
      <LinkButton to="/page2">Page2</LinkButton>
      <Button type="primary" onClick={() => setOpened(true)}>
        open modal
      </Button>
      <Modal title="modal" visible={opened} onCancel={() => setOpened(false)}>
        <h1>Modal Content</h1>
      </Modal>
    </div>
  );
}
