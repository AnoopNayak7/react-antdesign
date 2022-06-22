import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
  };

const TabsEx = () => {
  return (
    <div>
        <h1>Tabs Example</h1>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Tab Number 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab Number 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab Number 3" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab Number 4" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab Number 5" key="5">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab Number 6" key="6">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab Number 7" key="7">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab Number 8" key="8">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab Number 9" key="9">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab Number 10" key="10">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab Number 11" key="11">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab Number 12" key="12">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabsEx;
