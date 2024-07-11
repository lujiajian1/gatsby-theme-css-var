import React, { useState } from "react";
import { Radio, RadioChangeEvent, Button } from "antd";
import "./style.scss";
import styles from "./demo.module.scss";
import { Button as IButton, DatePicker } from "ljj-lxui";

const localKey = "theme-mode";

const onChange = (date: any, dateString: any) => {
  console.log(date, dateString);
};

const Demo: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const switchModeHandler = (value) => {
    if (value === "auto") {
      const color = getThemeMode();
      value = color;
    } else {
      value = value === 'dark' ? "lx-theme-dark" : "lx-theme-light";
    } 
    const doc = document.querySelector("body");
    if (doc) {
      doc.removeAttribute("class");
      doc.classList.add(value);
    }
  };

  const getThemeMode = () => {
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "lx-theme-light"
      : "lx-theme-dark";
  };

  const setStorage = (value: string) => {
    localStorage.removeItem(localKey);
    localStorage.setItem(localKey, value);
  };

  const onThemeChange = (e: RadioChangeEvent) => {
    setTheme(e.target.value);
    setStorage(e.target.value);
    switchModeHandler(e.target.value);
  };

  return (
    <>
      <p className="testp"></p>
      <p className={styles.testp}></p>
      <p className={styles.testpOpacity}></p>
      <div className={styles.testpOpacityBox}>
        <p className={styles.testpOpacity}></p>
      </div>
      <div className={styles.testImg}></div>    
      <Radio.Group onChange={onThemeChange} value={theme}>
        <Radio value="light">浅色</Radio>
        <Radio value="dark">深色</Radio>
        <Radio value="auto">跟随系统</Radio>
      </Radio.Group>
      <h3>测试 antd 组件暗黑模式</h3>
      <Button type="primary" block>Primary</Button>
      <Button block>Default</Button>
      <Button type="dashed" block>Dashed</Button>
      <Button type="link" block>Link</Button>
      <br></br>
      {/* <Tooltip title="文字气泡" trigger="click">
          <Button>Tooltip目标元素-top</Button>
        </Tooltip> */}
        <IButton btnType="primary" inline>
          常规按钮
        </IButton>
        <DatePicker onChange={onChange} />
    </>
  );
};

export default Demo;
