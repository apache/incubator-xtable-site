"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2804],{5867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(5893),s=a(1151),r=a(4866),l=a(5162);const o={sidebar_position:4,title:"BigLake Metastore"},i="Syncing to BigLake Metastore",c={id:"biglake-metastore",title:"BigLake Metastore",description:"This document walks through the steps to register an Apache XTable\u2122 (Incubating) synced Iceberg table in BigLake Metastore on GCP.",source:"@site/docs/biglake-metastore.md",sourceDirName:".",slug:"/biglake-metastore",permalink:"/docs/biglake-metastore",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"BigLake Metastore"},sidebar:"docs",previous:{title:"Unity Catalog",permalink:"/docs/unity-catalog"},next:{title:"Query Engines",permalink:"/docs/query-engines-index"}},u={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Create BigLake Catalog",id:"create-biglake-catalog",level:3},{value:"Create BigLake Database",id:"create-biglake-database",level:3},{value:"Running sync",id:"running-sync",level:3},{value:"Validating the results",id:"validating-the-results",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"syncing-to-biglake-metastore",children:"Syncing to BigLake Metastore"}),"\n",(0,n.jsx)(t.p,{children:"This document walks through the steps to register an Apache XTable\u2122 (Incubating) synced Iceberg table in BigLake Metastore on GCP."}),"\n",(0,n.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Source (Hudi/Delta) table(s) already written to Google Cloud Storage.\nIf you don't have the source table written in GCS,\nyou can follow the steps in ",(0,n.jsx)(t.a,{href:"/docs/how-to#create-dataset",children:"this"})," tutorial to set it up."]}),"\n",(0,n.jsxs)(t.li,{children:["To ensure that the BigLake API's caller (your service account used by Apache XTable\u2122 (Incubating)) has the\nnecessary permissions to create a BigLake table, ask your administrator to grant ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/iam/docs/understanding-roles#biglake.admin",children:"BigLake Admin"})," (roles/bigquery.admin)\naccess to the service account."]}),"\n",(0,n.jsxs)(t.li,{children:["To ensure that the Storage Account API's caller (your service account used by Apache XTable\u2122 (Incubating)) has the\nnecessary permissions to write log/metadata files in GCS, ask your administrator to grant ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/storage/docs/access-control/iam-roles",children:"Storage Object User"})," (roles/storage.objectUser)\naccess to the service account."]}),"\n",(0,n.jsxs)(t.li,{children:["If you're running Apache XTable\u2122 (Incubating) outside GCP, you need to provide the machine access to interact with BigLake and GCS.\nTo do so, store the permissions key for your service account in your machine using","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service_account_key.json\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Clone the Apache XTable\u2122 (Incubating) ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-xtable",children:"repository"})," and create the\n",(0,n.jsx)(t.code,{children:"xtable-utilities-0.1.0-SNAPSHOT-bundled.jar"})," by following the steps on the ",(0,n.jsx)(t.a,{href:"/docs/setup",children:"Installation page"})]}),"\n",(0,n.jsxs)(t.li,{children:["Download the ",(0,n.jsx)(t.a,{href:"gs://spark-lib/biglake/biglake-catalog-iceberg1.2.0-0.1.0-with-dependencies.jar",children:"BigLake Iceberg JAR"})," locally.\nApache XTable\u2122 (Incubating) requires the JAR to be present in the classpath."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsxs)(t.admonition,{title:"Important:",type:"danger",children:[(0,n.jsxs)(t.p,{children:["Currently BigLake Metastore is only accessible through Google's\n",(0,n.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/reference/biglake/rest",children:"BigLake Rest APIs"}),", and as such\nApache XTable\u2122 (Incubating) requires you to setup the below items prior to running sync on your source dataset."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"BigLake Catalog"}),"\n",(0,n.jsx)(t.li,{children:"BigLake Database"}),"\n"]})]}),"\n",(0,n.jsx)(t.h3,{id:"create-biglake-catalog",children:"Create BigLake Catalog"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"Try this method"})," on Google's REST reference docs for\n",(0,n.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/reference/biglake/rest/v1/projects.locations.catalogs/create",children:(0,n.jsx)(t.code,{children:"projects.locations.catalogs.create"})}),"\nmethod to create a catalog."]}),"\n",(0,n.jsxs)(t.p,{children:["In this tutorial we'll use ",(0,n.jsx)(t.code,{children:"us-west1"})," region."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rest",metastring:'md title="parent"',children:"projects/<yourProjectName>/locations/us-west1/catalogs\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rest",metastring:'md title="catalogId"',children:"xtable\n"})}),"\n",(0,n.jsx)(t.h3,{id:"create-biglake-database",children:"Create BigLake Database"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"Try this method"})," on Google's REST reference docs for\n",(0,n.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/reference/biglake/rest/v1/projects.locations.catalogs/create",children:(0,n.jsx)(t.code,{children:"projects.locations.catalogs.databases.create"})}),"\nmethod to create a database."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rest",metastring:'md title="parent"',children:"projects/<yourProjectName>/locations/us-west1/catalogs/xtable/databases\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rest",metastring:'md title="databaseId"',children:"xtable_synced_db\n"})}),"\n",(0,n.jsx)(t.h3,{id:"running-sync",children:"Running sync"}),"\n",(0,n.jsxs)(r.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"sourceFormat: HUDI",value:"hudi"},{label:"sourceFormat: DELTA",value:"delta"}],children:[(0,n.jsx)(l.Z,{value:"hudi",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'md title="yaml"',children:"sourceFormat: HUDI\ntargetFormats:\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: gs://path/to/source/data\n    tableName: table_name\n    namespace: database_name\n"})})}),(0,n.jsx)(l.Z,{value:"delta",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'md title="yaml"',children:"sourceFormat: DELTA\ntargetFormats:\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: gs://path/to/source/data\n    tableName: table_name\n    namespace: xtable_synced_db\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["The catalog information can be specified in a yaml file and passed in with the ",(0,n.jsx)(t.code,{children:"--icebergCatalogConfig"})," option.\nAn example ",(0,n.jsx)(t.code,{children:"catalog.yaml"})," file to sync with BigLake Metastore:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'md title="yaml"',children:"catalogImpl: org.apache.iceberg.gcp.biglake.BigLakeCatalog\ncatalogName: xtable\ncatalogOptions:\n  gcp_project: <yourProjectName>\n  gcp_location: us-west1\n  warehouse: gs://path/to/warehouse\n"})}),"\n",(0,n.jsx)(t.p,{children:"From your terminal under the cloned Apache XTable\u2122 (Incubating) directory, run the sync process using the below command."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:"java -cp xtable-utilities/target/xtable-utilities-0.1.0-SNAPSHOT-bundled.jar:/path/to/downloaded/biglake-catalog-iceberg1.2.0-0.1.0-with-dependencies.jar org.apache.xtable.utilities.RunSync  --datasetConfig my_config.yaml --icebergCatalogConfig catalog.yaml\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Note:",type:"tip",children:(0,n.jsxs)(t.p,{children:["At this point, if you check your bucket path, you will be able to see the ",(0,n.jsx)(t.code,{children:"metadata"})," directory\nwith metadata files which contains the information that helps query engines\nto interpret the data as an Iceberg table."]})}),"\n",(0,n.jsx)(t.h3,{id:"validating-the-results",children:"Validating the results"}),"\n",(0,n.jsxs)(t.p,{children:["Once the sync succeeds, Apache XTable\u2122 (Incubating) would have written the table directly to BigLake Metastore.\nWe can use ",(0,n.jsx)(t.code,{children:"Try this method"})," option on Google's REST reference docs for\n",(0,n.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/reference/biglake/rest/v1/projects.locations.catalogs.databases.tables/get",children:(0,n.jsx)(t.code,{children:"projects.locations.catalogs.databases.tables.get"})}),"\nmethod to view the created table."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rest",metastring:'md title="name"',children:"projects/<yourProjectName>/locations/us-west1/catalogs/xtable/databases/xtable_synced_db/tables/table_name\n"})}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"In this guide we saw how to,"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"sync a source table to create Iceberg metadata with Apache XTable\u2122 (Incubating)"}),"\n",(0,n.jsx)(t.li,{children:"catalog the data as an Iceberg table in BigLake Metastore"}),"\n",(0,n.jsxs)(t.li,{children:["validate the table creation using ",(0,n.jsx)(t.code,{children:"projects.locations.catalogs.databases.tables.get"})," method"]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>l});a(7294);var n=a(6010);const s={tabItem:"tabItem_Ymn6"};var r=a(5893);function l(e){let{children:t,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,l),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7294),s=a(6010),r=a(2466),l=a(6550),o=a(469),i=a(1980),c=a(7392),u=a(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const s=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,r=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=b({queryString:a,groupId:s}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Nk)(a);return[s,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),j=(()=>{const e=c??p;return g({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=a(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(5893);function f(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),s=o[a].value;s!==n&&(c(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(f,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function k(e){const t=(0,m.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>l});var n=a(7294);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);