(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return h}));a(78);var n=a(7),o=a.n(n),i=a(0),r=a.n(i),s=a(4),l=a.n(s),c=a(164),d=a(336),p=a(186),m=a(184),u=function(e){function t(){var t;return(t=e.call(this)||this).state={selectedProject:{},modalOpen:!1},t}o()(t,e),t.getDerivedStateFromProps=function(e,t){var a,n=t,o=e.data.allCosmicjsProjects.edges;for(var i in"undefined"!=typeof window&&(a=decodeURI(window.location.search).substring(1)),o)o[i].node.title===a&&(n.selectedProject=o[i].node,n.modalOpen=!0);return n};var a=t.prototype;return a.render=function(){var e,t=this,a=this.props.data.cosmicjsPages.metadata,n=this.props.data.allCosmicjsProjects.edges,o=this.props.data.allCosmicjsConnects.edges,i=this.props.data.cosmicjsContacts.metadata,s=this.props.data.cosmicjsSettings.metadata;"undefined"!=typeof window&&(e=window.innerHeight/3);var l={header:{padding:"0"},modal:{top:"50px"},gallery:{marginTop:"15px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}};return a.splash_image&&(l.header.background="url("+a.splash_image.url+")",l.header.backgroundSize="cover",l.header.backgroundPosition="center"),r.a.createElement(p.a,{siteTitle:s.site_title,siteLogo:s.site_logo,contact:i,connect:o,headerBreakpoint:e},r.a.createElement(m.a,{title:"Projects"}),r.a.createElement("section",{className:"page-container"},r.a.createElement("header",{className:"page-header projects",style:l.header},r.a.createElement("div",{className:"header-filter"},r.a.createElement("h3",null,"Check Out Our Work"),r.a.createElement("p",{className:"page-header-description"},a.summary))),r.a.createElement("div",{className:"project-gallery"},n.map((function(e){return r.a.createElement(d.a,{key:e.node.title,title:e.node.title,description:e.node.metadata.summary,image:e.node.metadata.image.url,size:"tall"})}))),r.a.createElement(c.Modal,{style:l.modal,show:this.state.modalOpen,onHide:this.handleClose,size:"md"},this.state.selectedProject.title?r.a.createElement(c.Modal.Header,null,r.a.createElement(c.Modal.Title,null,this.state.selectedProject.title),r.a.createElement("p",null,this.state.selectedProject.metadata.date)):null,this.state.selectedProject.title?r.a.createElement(c.Modal.Body,null,this.state.selectedProject.metadata.description,r.a.createElement("div",{className:"modal-gallery",style:l.gallery},this.state.selectedProject.metadata.gallery.map((function(e){return r.a.createElement("img",{key:e,alt:t.state.selectedProject.title,src:e})})))):null)))},a.handleClose=function(){"undefined"!=typeof window&&(window.location.href=window.location.protocol+window.location.pathname)},t}(r.a.Component),h="3210302716";u.propTypes={data:l.a.object.isRequired},t.default=u},163:function(e,t,a){var n;e.exports=(n=a(180))&&n.default||n},172:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(35),l=a.n(s);a.d(t,"a",(function(){return l.a}));a(163),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},180:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(56),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},184:function(e,t,a){"use strict";var n=a(185),o=a(0),i=a.n(o),r=a(4),s=a.n(r),l=a(237),c=a.n(l);function d(e){var t=e.description,a=e.lang,o=e.meta,r=e.keywords,s=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},185:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Agency Portfolio",description:"A portfolio for your creative shop",author:"@JacobKnaack"}}}}},186:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(164),l=(a(76),a(77),a(34)),c=a.n(l),d=a(7),p=a.n(d),m=a(172),u=function(e){function t(){var t;return(t=e.call(this)||this).state={scrollTop:!0,activeKey:""},t.handleScroll=t.handleScroll.bind(c()(t)),t}p()(t,e);var a=t.prototype;return a.componentWillMount=function(){"undefined"!=typeof window&&(window.location.hash?this.setState({activeKey:window.location.hash}):this.setState({activeKey:window.location.pathname}))},a.componentDidMount=function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleScroll)},a.render=function(){var e={container:{position:"fixed",width:"100%",zIndex:100,background:"none",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",transition:"0.75s ease-in-out"},navheader:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"100%"},link:{color:"#728f99",textShadow:"0px 0px 1px #ffffff",margin:"0 0 0 30px",textDecoration:"none"},logo:{width:"50px",padding:"10px",margin:"0"}};this.state.scrollTop||(e.container.background="#000000",e.container.color="#ffffff",e.link.color="#ffffff",e.link.textShadow="none");var t=this.props,a=t.siteTitle,n=t.logo;return o.a.createElement(s.Navbar,{style:e.container},o.a.createElement(s.Navbar.Header,{style:e.navheader},n?o.a.createElement("img",{src:n.url,style:e.logo}):o.a.createElement("h5",null,"GAP"),o.a.createElement("h1",null,o.a.createElement(m.a,{to:"/",style:e.link},a))),o.a.createElement(s.Navbar.Body,null,o.a.createElement(s.Nav,null,o.a.createElement(s.Nav.Item,{className:this.state.activeKey.includes("work")?"active":"",componentClass:m.a,to:"/work"},"Work"),o.a.createElement(s.Nav.Item,{className:this.state.activeKey.includes("projects")?"active":"",componentClass:m.a,to:"/projects"},"Projects"),o.a.createElement(s.Nav.Item,{className:this.state.activeKey.includes("about")?"active":"",componentClass:m.a,to:"/about"},"About"),o.a.createElement(s.Nav.Item,{className:this.state.activeKey.includes("contact")?"active":"",componentClass:m.a,to:"/#contact"},"Contact"))))},a.handleScroll=function(){var e=window.innerHeight/2;this.props.breakpoint&&(e=this.props.breakpoint),window.scrollY>e?this.setState({scrollTop:!1}):this.setState({scrollTop:!0})},t}(o.a.Component);u.propTypes={siteTitle:r.a.string,logo:r.a.object,breakpoint:r.a.number},u.defaultProps={siteTitle:""};var h=u,f=(a(143),function(e){var t=e.children,a=e.siteTitle,n=e.siteLogo,i=e.contact,r=e.connect,l=e.headerBreakpoint,c={main:{minheight:"calc(100vh - 185px)"},footer:{width:"100%",height:"200px",position:"relative",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"black",color:"white"},linkContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},link:{margin:"0 15px"},span:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},contactLine:{marginBottom:"10px"}};return o.a.createElement(s.Container,null,o.a.createElement(h,{siteTitle:a,logo:n,breakpoint:l}),o.a.createElement("main",{style:c.main},t),o.a.createElement("footer",{style:c.footer},i?o.a.createElement("div",null,o.a.createElement("h6",{style:c.contactLine},i.address1),o.a.createElement("h6",{style:c.contactLine},i.address2),o.a.createElement("h6",{style:c.contactLine},i.city+" "+i.region+", "+i.postal_code),o.a.createElement("h6",{style:c.contactLine},"Phone: "+(i.country_code?i.country_code:null)+" "+i.phone_number),o.a.createElement("h6",{style:c.contactLine},"Email: "+i.email)):null,o.a.createElement("span",{style:c.span},"© ",(new Date).getFullYear(),", Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"}," Gatsby"),o.a.createElement("a",{style:{height:"35px",margin:"0 20px"},href:"https://cosmicjs.com/add-bucket?import_bucket=5cbf745a10d5c22da1f9b3e2"},o.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/cosmicjs/51fe54d0-4f6e-11e9-9f32-8d001da69630-powered-by-cosmicjs.svg"}))),r?o.a.createElement("div",{style:c.linkContainer},r.map((function(e){return o.a.createElement("a",{key:e.node.title,href:"https://"+e.node.metadata.url,style:c.link},o.a.createElement(s.Icon,{size:"3x",icon:e.node.title}))}))):null))});f.propTypes={children:r.a.node.isRequired,siteTitle:r.a.string,siteLogo:r.a.object,contact:r.a.object,connect:r.a.array,headerBreakpoint:r.a.number};t.a=f},336:function(e,t,a){"use strict";var n=a(34),o=a.n(n),i=a(7),r=a.n(i),s=a(0),l=a.n(s),c=a(4),d=a.n(c),p=a(172),m=function(e){function t(){var t;return(t=e.call(this)||this).state={hover:!1},t.handleHover=t.handleHover.bind(o()(t)),t.handleUnHover=t.handleUnHover.bind(o()(t)),t}r()(t,e);var a=t.prototype;return a.render=function(){var e={container:{margin:"10px 0 0 10px",minWidth:"400px",minHeight:"400px",height:"400px",overflow:"hidden",textDecoration:"none"},details:{height:"400px",width:"400px",padding:"30px",opacity:"0",color:"#d3d3d3",background:"rgba(0, 0, 0, 0.6)",position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-start",overflowY:"auto",transition:"0.3s ease-in-out"},title:{fontSize:"2rem",alignText:"center"},description:{fontSize:"1rem"}};return this.props.image&&(e.container.background="url("+this.props.image+")",e.container.backgroundSize="cover",e.container.backgroundPosition="center"),"tall"===this.props.size&&(e.container.height="600px",e.details.height="600px"),this.state.hover&&(e.details.opacity="1"),l.a.createElement(p.a,{to:"/projects?"+encodeURI(this.props.title),style:e.container,onMouseEnter:this.handleHover,onMouseLeave:this.handleUnHover},l.a.createElement("div",{style:e.details},l.a.createElement("h5",{style:e.title},this.props.title),l.a.createElement("p",{style:e.description},this.props.description)))},a.handleHover=function(){this.setState({hover:!0})},a.handleUnHover=function(){this.setState({hover:!1})},t}(l.a.Component);m.propTypes={title:d.a.string,description:d.a.string,image:d.a.string,size:d.a.string},t.a=m}}]);
//# sourceMappingURL=component---src-pages-projects-js-9dd7af06da0be0ff8df2.js.map