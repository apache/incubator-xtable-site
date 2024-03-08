"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5369],{5665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(5893),r=a(1151),s=a(4866),l=a(5162);const o={sidebar_position:1,title:"Hive Metastore"},i="Syncing to Hive Metastore",c={id:"hms",title:"Hive Metastore",description:"This document walks through the steps to register an Apache XTable\u2122 (Incubating) synced table on Hive Metastore (HMS).",source:"@site/docs/hms.md",sourceDirName:".",slug:"/hms",permalink:"/docs/hms",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Hive Metastore"},sidebar:"docs",previous:{title:"Catalogs",permalink:"/docs/catalogs-index"},next:{title:"Glue Data Catalog",permalink:"/docs/glue-catalog"}},d={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Running sync",id:"running-sync",level:3},{value:"Register the target table in Hive Metastore",id:"register-the-target-table-in-hive-metastore",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"syncing-to-hive-metastore",children:"Syncing to Hive Metastore"}),"\n",(0,n.jsx)(t.p,{children:"This document walks through the steps to register an Apache XTable\u2122 (Incubating) synced table on Hive Metastore (HMS)."}),"\n",(0,n.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Source table(s) (Hudi/Delta/Iceberg) already written to your local storage or external storage locations like S3/GCS/ADLS.\nIf you don't have the source table written in place already,\nyou can follow the steps in ",(0,n.jsx)(t.a,{href:"/docs/how-to#create-dataset",children:"this"})," tutorial to set it up."]}),"\n",(0,n.jsx)(t.li,{children:"A compute instance where you can run Apache Spark. This can be your local machine, docker,\nor a distributed system like Amazon EMR, Google Cloud's Dataproc, Azure HDInsight etc.\nThis is a required step to register the table in HMS using a Spark client."}),"\n",(0,n.jsxs)(t.li,{children:["Clone the XTable\u2122 (Incubating) ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-xtable",children:"repository"})," and create the\n",(0,n.jsx)(t.code,{children:"utilities-0.1.0-SNAPSHOT-bundled.jar"})," by following the steps on the ",(0,n.jsx)(t.a,{href:"/docs/setup",children:"Installation page"})]}),"\n",(0,n.jsx)(t.li,{children:"This guide also assumes that you have configured the Hive Metastore locally or on EMR/Dataproc/HDInsight\nand is already running."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(t.h3,{id:"running-sync",children:"Running sync"}),"\n",(0,n.jsxs)(t.p,{children:["Create ",(0,n.jsx)(t.code,{children:"my_config.yaml"})," in the cloned Apache XTable\u2122 (Incubating) directory."]}),"\n",(0,n.jsxs)(s.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"targetFormat: HUDI",value:"hudi"},{label:"targetFormat: DELTA",value:"delta"},{label:"targetFormat: ICEBERG",value:"iceberg"}],children:[(0,n.jsx)(l.Z,{value:"hudi",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'md title="yaml"',children:"sourceFormat: DELTA|ICEBERG # choose only one\ntargetFormats:\n  - HUDI\ndatasets:\n  -\n    tableBasePath: file:///path/to/source/data\n    tableName: table_name\n"})})}),(0,n.jsx)(l.Z,{value:"delta",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'md title="yaml"',children:"sourceFormat: HUDI|ICEBERG # choose only one\ntargetFormats:\n  - DELTA\ndatasets:\n  -\n    tableBasePath: file:///path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE # you only need to specify partitionSpec for HUDI sourceFormat\n"})})}),(0,n.jsx)(l.Z,{value:"iceberg",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'md title="yaml"',children:"sourceFormat: HUDI|DELTA # choose only one\ntargetFormats:\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: file:///path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE # you only need to specify partitionSpec for HUDI sourceFormat\n"})})})]}),"\n",(0,n.jsx)(t.admonition,{title:"Note:",type:"note",children:(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Replace with appropriate values for ",(0,n.jsx)(t.code,{children:"sourceFormat"}),", ",(0,n.jsx)(t.code,{children:"tableBasePath"})," and ",(0,n.jsx)(t.code,{children:"tableName"})," fields."]}),"\n",(0,n.jsxs)(t.li,{children:["Replace ",(0,n.jsx)(t.code,{children:"file:///path/to/source/data"})," to appropriate source data path\nif you have your source table in S3/GCS/ADLS i.e.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["S3 - ",(0,n.jsx)(t.code,{children:"s3://path/to/source/data"})]}),"\n",(0,n.jsxs)(t.li,{children:["GCS - ",(0,n.jsx)(t.code,{children:"gs://path/to/source/data"})," or"]}),"\n",(0,n.jsxs)(t.li,{children:["ADLS - ",(0,n.jsx)(t.code,{children:"abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<path-to-data>"})]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(t.p,{children:"From your terminal under the cloned Apache XTable\u2122 (Incubating) directory, run the sync process using the below command."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:"java -jar utilities/target/utilities-0.1.0-SNAPSHOT-bundled.jar --datasetConfig my_config.yaml\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Note:",type:"tip",children:(0,n.jsxs)(t.p,{children:["At this point, if you check your bucket path, you will be able to see ",(0,n.jsx)(t.code,{children:".hoodie"})," or ",(0,n.jsx)(t.code,{children:"_delta_log"})," or ",(0,n.jsx)(t.code,{children:"metadata"}),"\ndirectory with relevant metadata files that helps query engines to interpret the data as a Hudi/Delta/Iceberg table."]})}),"\n",(0,n.jsx)(t.h3,{id:"register-the-target-table-in-hive-metastore",children:"Register the target table in Hive Metastore"}),"\n",(0,n.jsx)(t.p,{children:"Now you need to register the Apache XTable\u2122 (Incubating) synced target table in Hive Metastore."}),"\n",(0,n.jsxs)(s.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"targetFormat: HUDI",value:"hudi"},{label:"targetFormat: DELTA",value:"delta"},{label:"targetFormat: ICEBERG",value:"iceberg"}],children:[(0,n.jsxs)(l.Z,{value:"hudi",children:[(0,n.jsxs)(t.p,{children:["A Hudi table can directly be synced to the Hive Metastore using Hive Sync Tool\nand subsequently be queried by different query engines. For more information on the Hive Sync Tool, check\n",(0,n.jsx)(t.a,{href:"https://hudi.apache.org/docs/syncing_metastore",children:"Hudi Hive Metastore"})," docs."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:"cd $HUDI_HOME/hudi-sync/hudi-hive-sync\n\n./run_sync_tool.sh  \\\n--jdbc-url <jdbc_url> \\\n--user <username> \\\n--pass <password> \\\n--partitioned-by <partition_field> \\\n--base-path <'/path/to/synced/hudi/table'> \\\n--database <database_name> \\\n--table <tableName>\n"})}),(0,n.jsxs)(t.admonition,{title:"Note:",type:"note",children:[(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"file:///path/to/source/data"})," to appropriate source data path\nif you have your source table in S3/GCS/ADLS i.e."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["S3 - ",(0,n.jsx)(t.code,{children:"s3://path/to/source/data"})]}),"\n",(0,n.jsxs)(t.li,{children:["GCS - ",(0,n.jsx)(t.code,{children:"gs://path/to/source/data"})," or"]}),"\n",(0,n.jsxs)(t.li,{children:["ADLS - ",(0,n.jsx)(t.code,{children:"abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<path-to-data>"})]}),"\n"]})]}),(0,n.jsxs)(t.p,{children:["Now you will be able to query the created table directly as a Hudi table from the same ",(0,n.jsx)(t.code,{children:"spark"})," session or\nusing query engines like ",(0,n.jsx)(t.code,{children:"Presto"})," and/or ",(0,n.jsx)(t.code,{children:"Trino"}),". Check out the guides for querying the Apache XTable\u2122 (Incubating) synced tables on\n",(0,n.jsx)(t.a,{href:"/docs/presto",children:"Presto"})," or ",(0,n.jsx)(t.a,{href:"/docs/trino",children:"Trino"})," query engines for more information."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'md title="sql"',children:"SELECT * FROM <database_name>.<table_name>;\n"})})]}),(0,n.jsxs)(l.Z,{value:"delta",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:'spark-sql --packages io.delta:delta-core_2.12:2.0.0 \\\n--conf "spark.sql.extensions=io.delta.sql.DeltaSparkSessionExtension" \\\n--conf "spark.sql.catalog.spark_catalog=org.apache.spark.sql.delta.catalog.DeltaCatalog" \\\n--conf "spark.sql.catalogImplementation=hive"\n'})}),(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"spark-sql"})," shell, you need to create a schema and table like below."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'md title="sql"',children:"CREATE SCHEMA delta_db;\n\nCREATE TABLE delta_db.<table_name> USING DELTA LOCATION '/path/to/synced/delta/table';\n"})}),(0,n.jsxs)(t.admonition,{title:"Note:",type:"note",children:[(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"file:///path/to/source/data"})," to appropriate source data path\nif you have your source table in S3/GCS/ADLS i.e."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["S3 - ",(0,n.jsx)(t.code,{children:"s3://path/to/source/data"})]}),"\n",(0,n.jsxs)(t.li,{children:["GCS - ",(0,n.jsx)(t.code,{children:"gs://path/to/source/data"})," or"]}),"\n",(0,n.jsxs)(t.li,{children:["ADLS - ",(0,n.jsx)(t.code,{children:"abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<path-to-data>"})]}),"\n"]})]}),(0,n.jsxs)(t.p,{children:["Now you will be able to query the created table directly as a Delta table from the same ",(0,n.jsx)(t.code,{children:"spark"})," session or\nusing query engines like ",(0,n.jsx)(t.code,{children:"Presto"})," and/or ",(0,n.jsx)(t.code,{children:"Trino"}),". Check out the guides for querying the Apache XTable\u2122 (Incubating) synced tables on\n",(0,n.jsx)(t.a,{href:"/docs/presto",children:"Presto"})," or ",(0,n.jsx)(t.a,{href:"/docs/trino",children:"Trino"})," query engines for more information."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'md title="sql"',children:"SELECT * FROM delta_db.<table_name>;\n"})})]}),(0,n.jsxs)(l.Z,{value:"iceberg",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:'spark-sql --packages org.apache.iceberg:iceberg-spark-runtime-3.2_2.12:1.2.1 \\\n--conf "spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions" \\\n--conf "spark.sql.catalog.spark_catalog=org.apache.iceberg.spark.SparkSessionCatalog" \\\n--conf "spark.sql.catalog.spark_catalog.type=hive" \\\n--conf "spark.sql.catalog.hive_prod=org.apache.iceberg.spark.SparkCatalog" \\\n--conf "spark.sql.catalog.hive_prod.type=hive"\n'})}),(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"spark-sql"})," shell, you need to create a schema and table like below."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'md title="sql"',children:"CREATE SCHEMA iceberg_db;\n\nCALL hive_prod.system.register_table(\n   table => 'hive_prod.iceberg_db.<table_name>',\n   metadata_file => '/path/to/synced/iceberg/table/metadata/<VERSION>.metadata.json'\n);\n\n"})}),(0,n.jsxs)(t.admonition,{title:"Note:",type:"note",children:[(0,n.jsx)(t.p,{children:"Replace the dataset path while creating a dataframe to appropriate data path if you have your table\nin S3/GCS/ADLS i.e."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["S3 - ",(0,n.jsx)(t.code,{children:"s3://path/to/source/data"})]}),"\n",(0,n.jsxs)(t.li,{children:["GCS - ",(0,n.jsx)(t.code,{children:"gs://path/to/source/data"})," or"]}),"\n",(0,n.jsxs)(t.li,{children:["ADLS - ",(0,n.jsx)(t.code,{children:"abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<path-to-data>"})]}),"\n"]})]}),(0,n.jsxs)(t.p,{children:["Now you will be able to query the created table directly as an Iceberg table from the same ",(0,n.jsx)(t.code,{children:"spark"})," session or\nusing query engines like ",(0,n.jsx)(t.code,{children:"Presto"})," and/or ",(0,n.jsx)(t.code,{children:"Trino"}),". Check out the guides for querying the Apache XTable\u2122 (Incubating) synced tables on\n",(0,n.jsx)(t.a,{href:"/docs/presto",children:"Presto"})," or ",(0,n.jsx)(t.a,{href:"/docs/trino",children:"Trino"})," query engines for more information."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'md title="sql"',children:"SELECT * FROM iceberg_db.<table_name>;\n"})})]})]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"In this guide we saw how to,"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"sync a source table to create metadata for the desired target table formats using Apache XTable\u2122 (Incubating)"}),"\n",(0,n.jsx)(t.li,{children:"catalog the data in the target table format in Hive Metastore"}),"\n",(0,n.jsx)(t.li,{children:"query the target table using Spark"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>l});a(7294);var n=a(6010);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(7294),r=a(6010),s=a(2466),l=a(6550),o=a(469),i=a(1980),c=a(7392),d=a(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,u]=g({queryString:a,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),x=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=a(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(5893);function f(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),r=o[a].value;r!==n&&(c(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...e,...t}),(0,j.jsx)(y,{...e,...t})]})}function S(e){const t=(0,m.Z)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>l});var n=a(7294);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);