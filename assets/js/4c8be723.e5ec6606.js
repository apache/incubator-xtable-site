"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4262],{3154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var l=a(5893),n=a(1151),r=a(4866),s=a(5162);const i={sidebar_position:2,title:"Glue Data Catalog"},o="Syncing to Glue Data Catalog",c={id:"glue-catalog",title:"Glue Data Catalog",description:"This document walks through the steps to register an Apache XTable\u2122 (Incubating) synced table in Glue Data Catalog on AWS.",source:"@site/docs/glue-catalog.md",sourceDirName:".",slug:"/glue-catalog",permalink:"/docs/glue-catalog",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Glue Data Catalog"},sidebar:"docs",previous:{title:"Hive Metastore",permalink:"/docs/hms"},next:{title:"Unity Catalog",permalink:"/docs/unity-catalog"}},u={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Running sync",id:"running-sync",level:3},{value:"Register the target table in Glue Data Catalog",id:"register-the-target-table-in-glue-data-catalog",level:3},{value:"Validating the results",id:"validating-the-results",level:3},{value:"Validating the results",id:"validating-the-results-1",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"syncing-to-glue-data-catalog",children:"Syncing to Glue Data Catalog"}),"\n",(0,l.jsx)(t.p,{children:"This document walks through the steps to register an Apache XTable\u2122 (Incubating) synced table in Glue Data Catalog on AWS."}),"\n",(0,l.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Source table(s) (Hudi/Delta/Iceberg) already written to Amazon S3.\nIf you don't have the source table written in S3 already,\nyou can follow the steps in ",(0,l.jsx)(t.a,{href:"/docs/how-to#create-dataset",children:"this"})," tutorial to set it up"]}),"\n",(0,l.jsxs)(t.li,{children:["Setup access to interact with AWS APIs from the command line.\nIf you haven\u2019t installed AWSCLIv2, you do so by following the steps outlined in\n",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"AWS docs"})," and\nalso set up access credentials by following the steps\n",(0,l.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html",children:"here"})]}),"\n",(0,l.jsxs)(t.li,{children:["Clone the Apache XTable\u2122 (Incubating) ",(0,l.jsx)(t.a,{href:"https://github.com/apache/incubator-xtable",children:"repository"})," and create the\n",(0,l.jsx)(t.code,{children:"utilities-0.1.0-SNAPSHOT-bundled.jar"})," by following the steps on the ",(0,l.jsx)(t.a,{href:"/docs/setup",children:"Installation page"})]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,l.jsx)(t.h3,{id:"running-sync",children:"Running sync"}),"\n",(0,l.jsxs)(t.p,{children:["Create ",(0,l.jsx)(t.code,{children:"my_config.yaml"})," in the cloned Apache XTable\u2122 (Incubating) directory."]}),"\n",(0,l.jsxs)(r.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"targetFormat: HUDI",value:"hudi"},{label:"targetFormat: DELTA",value:"delta"},{label:"targetFormat: ICEBERG",value:"iceberg"}],children:[(0,l.jsx)(s.Z,{value:"hudi",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-yaml",metastring:'md title="yaml"',children:"sourceFormat: DELTA|ICEBERG # choose only one\ntargetFormats:\n  - HUDI\ndatasets:\n  -\n    tableBasePath: s3://path/to/source/data\n    tableName: table_name\n"})})}),(0,l.jsx)(s.Z,{value:"delta",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-yaml",metastring:'md title="yaml"',children:"sourceFormat: HUDI|ICEBERG # choose only one\ntargetFormats:\n  - DELTA\ndatasets:\n  -\n    tableBasePath: s3://path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE # you only need to specify partitionSpec for HUDI sourceFormat\n"})})}),(0,l.jsx)(s.Z,{value:"iceberg",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-yaml",metastring:'md title="yaml"',children:"sourceFormat: HUDI|DELTA # choose only one\ntargetFormats:\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: s3://path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE # you only need to specify partitionSpec for HUDI sourceFormat\n"})})})]}),"\n",(0,l.jsx)(t.admonition,{title:"Note:",type:"note",children:(0,l.jsxs)(t.p,{children:["Replace with appropriate values for ",(0,l.jsx)(t.code,{children:"sourceFormat"}),", ",(0,l.jsx)(t.code,{children:"tableBasePath"})," and ",(0,l.jsx)(t.code,{children:"tableName"})," fields."]})}),"\n",(0,l.jsx)(t.p,{children:"From your terminal under the cloned xtable directory, run the sync process using the below command."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:"java -jar utilities/target/utilities-0.1.0-SNAPSHOT-bundled.jar --datasetConfig my_config.yaml\n"})}),"\n",(0,l.jsx)(t.admonition,{title:"Note:",type:"tip",children:(0,l.jsxs)(t.p,{children:["At this point, if you check your bucket path, you will be able to see the ",(0,l.jsx)(t.code,{children:".hoodie"})," or ",(0,l.jsx)(t.code,{children:"_delta_log"})," or ",(0,l.jsx)(t.code,{children:"metadata"})," directory\nwith metadata files which contains the information that helps query engines interpret the data as the target table."]})}),"\n",(0,l.jsx)(t.h3,{id:"register-the-target-table-in-glue-data-catalog",children:"Register the target table in Glue Data Catalog"}),"\n",(0,l.jsx)(t.p,{children:"From your terminal, create a glue database."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:'aws glue create-database --database-input "{\\"Name\\":\\"xtable_synced_db\\"}"\n'})}),"\n",(0,l.jsxs)(t.p,{children:["From your terminal, create a glue crawler. Modify the ",(0,l.jsx)(t.code,{children:"<yourAccountId>"}),", ",(0,l.jsx)(t.code,{children:"<yourRoleName>"}),"\nand ",(0,l.jsx)(t.code,{children:"<path/to/your/data>"}),", with appropriate values."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:"export accountId=<yourAccountId>\nexport roleName=<yourRoleName>\nexport s3DataPath=s3://<path/to/source/data>\n"})}),"\n",(0,l.jsxs)(r.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"targetFormat: HUDI",value:"hudi"},{label:"targetFormat: DELTA",value:"delta"},{label:"targetFormat: ICEBERG",value:"iceberg"}],children:[(0,l.jsx)(s.Z,{value:"hudi",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:'aws glue create-crawler --name xtable_crawler --role arn:aws:iam::${accountId}:role/service-role/${roleName} --database xtable_synced_db --targets "{\\"HudiTargets\\":[{\\"Paths\\":[\\"${s3DataPath}\\"]}]}"\n'})})}),(0,l.jsx)(s.Z,{value:"delta",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:'aws glue create-crawler --name xtable_crawler --role arn:aws:iam::${accountId}:role/service-role/${roleName} --database xtable_synced_db --targets "{\\"DeltaTargets\\":[{\\"Paths\\":[\\"${s3DataPath}\\"]}]}"\n'})})}),(0,l.jsx)(s.Z,{value:"iceberg",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:'aws glue create-crawler --name xtable_crawler --role arn:aws:iam::${accountId}:role/service-role/${roleName} --database xtable_synced_db --targets "{\\"IcebergTargets\\":[{\\"Paths\\":[\\"${s3DataPath}\\"]}]}"\n'})})})]}),"\n",(0,l.jsx)(t.p,{children:"From your terminal, run the glue crawler."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:" aws glue start-crawler --name xtable_crawler\n"})}),"\n",(0,l.jsx)(t.p,{children:"Once the crawler succeeds, you\u2019ll be able to query this Iceberg table from Athena,\nEMR and/or Redshift query engines."}),"\n",(0,l.jsxs)(r.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"targetFormat: HUDI",value:"hudi"},{label:"targetFormat: DELTA",value:"delta"},{label:"targetFormat: ICEBERG",value:"iceberg"}],children:[(0,l.jsx)(s.Z,{value:"hudi",children:(0,l.jsx)(t.admonition,{title:"LIMITATION for Hudi target format:",type:"danger",children:(0,l.jsxs)(t.p,{children:["To validate the Hudi targetFormat table results, you need to ensure that the query engine that you're using\nsupports Hudi version 0.14.0 as mentioned ",(0,l.jsx)(t.a,{href:"/docs/features-and-limitations#hudi",children:"here"})]})})}),(0,l.jsxs)(s.Z,{value:"delta",children:[(0,l.jsx)(t.h3,{id:"validating-the-results",children:"Validating the results"}),(0,l.jsx)(t.p,{children:"After the crawler runs successfully, you can inspect the catalogued tables in Glue\nand also query the table in Amazon Athena like below:"}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM xtable_synced_db.<table_name>;\n"})})]}),(0,l.jsxs)(s.Z,{value:"iceberg",children:[(0,l.jsx)(t.h3,{id:"validating-the-results-1",children:"Validating the results"}),(0,l.jsx)(t.p,{children:"After the crawler runs successfully, you can inspect the catalogued tables in Glue\nand also query the table in Amazon Athena like below:"}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM xtable_synced_db.<table_name>;\n"})})]})]}),"\n",(0,l.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,l.jsx)(t.p,{children:"In this guide we saw how to,"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"sync a source table to create metadata for the desired target table formats using Apache XTable\u2122 (Incubating)"}),"\n",(0,l.jsx)(t.li,{children:"catalog the data in the target table format in Glue Data Catalog"}),"\n",(0,l.jsx)(t.li,{children:"query the target table using Amazon Athena"}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var l=a(6010);const n={tabItem:"tabItem_Ymn6"};var r=a(5893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.Z)(n.tabItem,s),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var l=a(7294),n=a(6010),r=a(2466),s=a(6550),i=a(469),o=a(1980),c=a(7392),u=a(12);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=h(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),x=(()=>{const e=c??p;return g({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=a(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(5893);function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const t=e.currentTarget,a=o.indexOf(t),n=i[a].value;n!==l&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,n.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":l===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function v(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,n.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(y,{...e,...t}),(0,f.jsx)(j,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,f.jsx)(v,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var l=a(7294);const n={},r=l.createContext(n);function s(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);