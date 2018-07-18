import React, { Component } from "react";
import { Input, Icon ,Avatar} from "antd";
import "./index.css";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="layout-container clearfix">
          <div className="logo logo-enterprise">
            <a href="/" className="logo-link">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/cptBhNjKeyaBDrfnMKwC.svg"
                className="image image-default"
                alt="语雀"
              />
            </a>
          </div>
          <div className="layout-search">
            <Input
              placeholder="输入你想要知道的"
              prefix={
                <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
              }
            />
          </div>
            <div className='header-nav header-nav-left nav-extra'>
            
            <ul class="ant-menu ant-menu-light ant-menu-root ant-menu-horizontal" role="menu"><li class="ant-menu-item header-nav-item header-nav-home ant-menu-item-selected" role="menuitem"><a href="/">首页</a></li><li class="ant-menu-item header-nav-item" role="menuitem"><a href="/topics">讨论</a></li><li class="ant-menu-item header-nav-item" role="menuitem"><a href="/explore">发现</a></li><li class="ant-menu-item header-nav-item" role="menuitem"><a href="https://yuque.com/help" target="_blank">帮助</a></li><li class="ant-menu-item header-nav-item" role="menuitem"><a href="https://yuque.com/yuque/topics" target="_blank">反馈</a></li></ul>
            </div>
            
            <div className='layout_avater'>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

            </div>

        </div>
      </div>
    );
  }
}

export default Header;
