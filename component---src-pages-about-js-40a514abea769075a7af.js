(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return h}));var n=a(7),o=a.n(n),i=a(0),r=a.n(i),s=a(4),c=a.n(s),l=a(164),d=a(186),p=a(184),m=l.Progress.Line,u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e,t=this.props.data.cosmicjsPages.metadata,a=this.props.data.allCosmicjsPeople.edges,n=this.props.data.allCosmicjsSkills.edges,o=this.props.data.cosmicjsSettings.metadata,i=this.props.data.cosmicjsContacts.metadata,s=this.props.data.allCosmicjsConnects.edges;"undefined"!=typeof window&&(e=window.innerHeight/3);var c={pageHeader:{padding:"0"},summary:{width:"25%",maxWidth:"300px",paddingRight:"50px",margin:"0 20px",textAlign:"right",fontSize:"1.5rem",borderRight:"thin solid black"},description:{width:"40%",marginRight:"30px",fontSize:"1.0rem"},skills:{maxWidth:"1000px",padding:"0 15px",marginLeft:"auto",marginRight:"auto"},skillDetails:{width:"90%",marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},skillName:{width:"200px",marginRight:"50px",borderRight:"thin solid black"},skillDescription:{maxWidth:"300px"},person:{width:"25%",padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textDecoration:"none"},personName:{marginTop:"0",color:"black",fontSize:"1rem"},personTitle:{color:"grey",fontSize:"0.8rem"}};return t.splash_image&&(c.pageHeader.background="url("+t.splash_image.url+")",c.pageHeader.backgroundSize="cover",c.pageHeader.backgroundPosition="center"),r.a.createElement(d.a,{siteTitle:o.site_title,siteLogo:o.site_logo,contact:i,connect:s,headerBreakpoint:e},r.a.createElement(p.a,{title:"About"}),r.a.createElement("section",{className:"page-container about"},r.a.createElement("header",{className:"page-header about",style:c.pageHeader},r.a.createElement("div",{className:"header-filter"},r.a.createElement("h3",null,"Who We Are"),t.splash_phrase?r.a.createElement("p",{className:"page-header-description"},t.splash_phrase):null)),r.a.createElement("section",{className:"section-container short row"},r.a.createElement("h4",{className:"intro-summary",style:c.summary},t.intro_summary),r.a.createElement("p",{className:"intro-description",style:c.description},t.intro_description)),r.a.createElement("section",{className:"section-container short",style:c.skills},n.map((function(e){return r.a.createElement("div",{key:e.node.title},r.a.createElement("div",{style:c.skillDetails},r.a.createElement("h4",{style:c.skillName},e.node.title),r.a.createElement("p",{style:c.skillDescription},e.node.metadata.description)),r.a.createElement(m,{percent:e.node.metadata.progress,showInfo:!1,strokeColor:"black"}))}))),r.a.createElement("section",{className:"section-container content medium"},r.a.createElement("div",{className:"wrapper-content people"},a.map((function(e){return r.a.createElement("div",{key:e.node.title,style:c.person},r.a.createElement("div",{style:{background:"url("+e.node.metadata.image.url+")",backgroundSize:"cover",backgroundPosition:"center",marginBottom:"14px",width:"100%",height:"200px"}}),r.a.createElement("h5",{style:c.personName},e.node.title),r.a.createElement("h6",{style:c.personTitle},e.node.metadata.job_title))}))))))},t}(r.a.Component),h="463735251";u.propTypes={data:c.a.object,pageContext:c.a.object.isRequired},t.default=u},163:function(e,t,a){var n;e.exports=(n=a(180))&&n.default||n},172:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(35),c=a.n(s);a.d(t,"a",(function(){return c.a}));a(163),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},180:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},184:function(e,t,a){"use strict";var n=a(185),o=a(0),i=a.n(o),r=a(4),s=a.n(r),c=a(237),l=a.n(c);function d(e){var t=e.description,a=e.lang,o=e.meta,r=e.keywords,s=e.title,c=n.data.site,d=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},185:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Agency Portfolio",description:"A portfolio for your creative shop",author:"@JacobKnaack"}}}}},186:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(164),c=(a(76),a(77),a(34)),l=a.n(c),d=a(7),p=a.n(d),m=a(172),u=function(e){function t(){var t;return(t=e.call(this)||this).state={scrollTop:!0,activeKey:""},t.handleScroll=t.handleScroll.bind(l()(t)),t}p()(t,e);var a=t.prototype;return a.componentWillMount=function(){"undefined"!=typeof window&&(window.location.hash?this.setState({activeKey:window.location.hash}):this.setState({activeKey:window.location.pathname}))},a.componentDidMount=function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleScroll)},a.render=function(){var e={container:{position:"fixed",width:"100%",zIndex:100,background:"none",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",transition:"0.75s ease-in-out"},navheader:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"100%"},link:{color:"#728f99",textShadow:"0px 0px 1px #ffffff",margin:"0 0 0 30px",textDecoration:"none"},logo:{width:"50px",padding:"10px",margin:"0"}};this.state.scrollTop||(e.container.background="#000000",e.container.color="#ffffff",e.link.color="#ffffff",e.link.textShadow="none");var t=this.props,a=t.siteTitle,n=t.logo;return o.a.createElement(s.Navbar,{style:e.container},o.a.createElement(s.Navbar.Header,{style:e.navheader},n?o.a.createElement("img",{src:n.url,style:e.logo}):o.a.createElement("h5",null,"GAP"),o.a.createElement("h1",null,o.a.createElement(m.a,{to:"/",style:e.link},a))),o.a.createElement(s.Navbar.Body,null,o.a.createElement(s.Nav,null,o.a.createElement(s.Nav.Item,{className:this.state.activeKey.includes("work")?"active":"",componentClass:m.a,to:"/work"},"Work"),o.a.createElement(s.Nav.Item,{className:this.state.activeKey.includes("projects")?"active":"",componentClass:m.a,to:"/projects"},"Projects"),o.a.createElement(s.Nav.Item,{className:this.state.activeKey.includes("about")?"active":"",componentClass:m.a,to:"/about"},"About"),o.a.createElement(s.Nav.Item,{className:this.state.activeKey.includes("contact")?"active":"",componentClass:m.a,to:"/#contact"},"Contact"))))},a.handleScroll=function(){var e=window.innerHeight/2;this.props.breakpoint&&(e=this.props.breakpoint),window.scrollY>e?this.setState({scrollTop:!1}):this.setState({scrollTop:!0})},t}(o.a.Component);u.propTypes={siteTitle:r.a.string,logo:r.a.object,breakpoint:r.a.number},u.defaultProps={siteTitle:""};var h=u,f=(a(143),function(e){var t=e.children,a=e.siteTitle,n=e.siteLogo,i=e.contact,r=e.connect,c=e.headerBreakpoint,l={main:{minheight:"calc(100vh - 185px)"},footer:{width:"100%",height:"200px",position:"relative",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"black",color:"white"},linkContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},link:{margin:"0 15px"},span:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},contactLine:{marginBottom:"10px"}};return o.a.createElement(s.Container,null,o.a.createElement(h,{siteTitle:a,logo:n,breakpoint:c}),o.a.createElement("main",{style:l.main},t),o.a.createElement("footer",{style:l.footer},i?o.a.createElement("div",null,o.a.createElement("h6",{style:l.contactLine},i.address1),o.a.createElement("h6",{style:l.contactLine},i.address2),o.a.createElement("h6",{style:l.contactLine},i.city+" "+i.region+", "+i.postal_code),o.a.createElement("h6",{style:l.contactLine},"Phone: "+(i.country_code?i.country_code:null)+" "+i.phone_number),o.a.createElement("h6",{style:l.contactLine},"Email: "+i.email)):null,o.a.createElement("span",{style:l.span},"© ",(new Date).getFullYear(),", Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"}," Gatsby"),o.a.createElement("a",{style:{height:"35px",margin:"0 20px"},href:"https://cosmicjs.com/add-bucket?import_bucket=5cbf745a10d5c22da1f9b3e2"},o.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/cosmicjs/51fe54d0-4f6e-11e9-9f32-8d001da69630-powered-by-cosmicjs.svg"}))),r?o.a.createElement("div",{style:l.linkContainer},r.map((function(e){return o.a.createElement("a",{key:e.node.title,href:"https://"+e.node.metadata.url,style:l.link},o.a.createElement(s.Icon,{size:"3x",icon:e.node.title}))}))):null))});f.propTypes={children:r.a.node.isRequired,siteTitle:r.a.string,siteLogo:r.a.object,contact:r.a.object,connect:r.a.array,headerBreakpoint:r.a.number};t.a=f}}]);
//# sourceMappingURL=component---src-pages-about-js-40a514abea769075a7af.js.map