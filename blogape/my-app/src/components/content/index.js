import React, { Component } from "react";
import "./index.css";
class Content extends Component {
  render() {
    return (
      <div className="protal-wrapper">
        <section className="banner">
          <div className="layout-container">
            <div
              className="ant-row-flex ant-row-flex-middle"
              style={{ marginLeft: "-20px", marginRight: " -20px" }}
            >
              <div
                className="ant-col-xs-24 ant-col-lg-12"
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              >
                <div className="text slogan">
                  <h1 className="banner-title">写文档，就用语雀</h1>
                  <p>
                    优雅高效的在线文档编辑与协同工具
                    <br />让每个企业轻松拥有文档中心 <br />
                    阿里巴巴集团内部使用多年，众多中小企业首选<br />
                  </p>
                  <a
                    href="/register"
                    className="ant-btn register ant-btn-primary ant-btn-lg"
                  >
                    <span>加入语雀</span>
                  </a>
                </div>
              </div>
              <div
                className="ant-col-xs-24 ant-col-lg-12"
                style={{ paddingLeft: " 20px", paddingRright: "20px" }}
              >
                <div class="banner-img">
                  <img src="https://gw.alipayobjects.com/zos/rmsportal/jxncnQDqKKpHVizaZvHM.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 描述  */}
        <section className="inuse">
        <div className="layout-container">
        <h2 className="section-title">为中小企业量身定做</h2>
        <p>阿里巴巴集团内部使用多年，众多中小企业首选，可靠的基础能力，灵活的定制化用法</p>
        <div className="ant-row-flex ant-row-flex-space-between ant-row-flex-bottom enterprise-list" style={{marginLeft: '-8px', marginRight: '-8px'}}>
        <div className="ant-col-xs-12 ant-col-sm-8 ant-col-lg-4" style={{paddingLeft: '8px',paddingRight: '8px'}}>
        <a href="http://www.alibabagroup.com/" title="阿里巴巴集团" target="_blank">
        <img 
        src="https://gw.alipayobjects.com/zos/rmsportal/dwlrvOkSqPmsSoehKOrx.svg" alt="阿里巴巴集团"/></a></div>
        <div className="ant-col-xs-12 ant-col-sm-8 ant-col-lg-4" 
        style={{paddingLeft: '8px',paddingRight:' 8px'}}>
        <a href="https://www.antfin.com/" title="蚂蚁金服" target="_blank">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/ljQLGlUQvYyzLaiLlHCE.svg" alt="蚂蚁金服" /></a>
        </div>
        <div className="ant-col-xs-12 ant-col-sm-8 ant-col-lg-4" 
        style={{paddingLeft:" 8px",paddingRight:"8px"}}>
        <a href="https://www.cainiao.com/" title="菜鸟" target="_blank">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/JKViaaybOivKJoUYVACM.svg" alt="菜鸟"/></a></div>
        <div className="ant-col-xs-12 ant-col-sm-8 ant-col-lg-4" style={{paddingLeft: '8px', paddingRight:'8px'}}>
        <a href="http://www.freshhema.com/" title="盒马" target="_blank">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/DVqEkKmCrIrSNRrnFXMN.svg" alt="盒马" /></a></div>
        <div className="ant-col-xs-12 ant-col-sm-8 ant-col-lg-4" style={{paddingLeft:'8px',paddingRight:'8px'}}>
        <a href="https://www.dingtalk.com" title="钉钉" target="_blank">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/EZnIljgXlQOiQonTTfaT.svg" alt="钉钉"/></a></div>
        <div className="ant-col-xs-12 ant-col-sm-8 ant-col-lg-4" style={{paddingLeft:'8px', paddingRight:'8px'}}>
        <a href="http://ditu.amap.com/" title="高德地图" target="_blank">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/DsMTWefAGxpJRRUcyBhj.svg" alt="高德地图"/></a>
        </div></div></div></section>
      </div>
    );
  }
}

export default Content;
