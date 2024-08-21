"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2880],{9634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(5893),i=a(1151);const s={sidebar_position:3,title:"Unity Catalog"},l="Syncing to Unity Catalog",o={id:"unity-catalog",title:"Unity Catalog",description:"This document walks through the steps to register an Apache XTable\u2122 (Incubating) synced Delta table in Unity Catalog on Databricks and open-source Unity Catalog.",source:"@site/docs/unity-catalog.md",sourceDirName:".",slug:"/unity-catalog",permalink:"/docs/unity-catalog",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Unity Catalog"},sidebar:"docs",previous:{title:"Glue Data Catalog",permalink:"/docs/glue-catalog"},next:{title:"BigLake Metastore",permalink:"/docs/biglake-metastore"}},r={},c=[{value:"Pre-requisites (for Databricks Unity Catalog)",id:"pre-requisites-for-databricks-unity-catalog",level:2},{value:"Pre-requisites (for open-source Unity Catalog)",id:"pre-requisites-for-open-source-unity-catalog",level:2},{value:"Steps",id:"steps",level:2},{value:"Running sync",id:"running-sync",level:3},{value:"Register the target table in Databricks Unity Catalog",id:"register-the-target-table-in-databricks-unity-catalog",level:3},{value:"Validating the results",id:"validating-the-results",level:3},{value:"Register the target table in open-source Unity Catalog using the CLI",id:"register-the-target-table-in-open-source-unity-catalog-using-the-cli",level:3},{value:"Validating the results",id:"validating-the-results-1",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"syncing-to-unity-catalog",children:"Syncing to Unity Catalog"}),"\n",(0,n.jsx)(t.p,{children:"This document walks through the steps to register an Apache XTable\u2122 (Incubating) synced Delta table in Unity Catalog on Databricks and open-source Unity Catalog."}),"\n",(0,n.jsx)(t.h2,{id:"pre-requisites-for-databricks-unity-catalog",children:"Pre-requisites (for Databricks Unity Catalog)"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Source table(s) (Hudi/Iceberg) already written to external storage locations like S3/GCS/ADLS.\nIf you don't have a source table written in S3/GCS/ADLS,\nyou can follow the steps in ",(0,n.jsx)(t.a,{href:"/docs/hms",children:"this"})," tutorial to set it up."]}),"\n",(0,n.jsxs)(t.li,{children:["Setup connection to external storage locations from Databricks.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Follow the steps outlined ",(0,n.jsx)(t.a,{href:"https://docs.databricks.com/en/storage/amazon-s3.html",children:"here"})," for Amazon S3"]}),"\n",(0,n.jsxs)(t.li,{children:["Follow the steps outlined ",(0,n.jsx)(t.a,{href:"https://docs.databricks.com/en/storage/gcs.html",children:"here"})," for Google Cloud Storage"]}),"\n",(0,n.jsxs)(t.li,{children:["Follow the steps outlined ",(0,n.jsx)(t.a,{href:"https://docs.databricks.com/en/storage/azure-storage.html",children:"here"})," for Azure Data Lake Storage Gen2 and Blob Storage."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Create a Unity Catalog metastore in Databricks as outlined ",(0,n.jsx)(t.a,{href:"https://docs.gcp.databricks.com/data-governance/unity-catalog/create-metastore.html#create-a-unity-catalog-metastore",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Create an external location in Databricks as outlined ",(0,n.jsx)(t.a,{href:"https://docs.databricks.com/en/sql/language-manual/sql-ref-syntax-ddl-create-location.html",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Clone the Apache XTable\u2122 (Incubating) ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-xtable",children:"repository"})," and create the\n",(0,n.jsx)(t.code,{children:"xtable-utilities-0.2.0-SNAPSHOT-bundled.jar"})," by following the steps on the ",(0,n.jsx)(t.a,{href:"/docs/setup",children:"Installation page"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"pre-requisites-for-open-source-unity-catalog",children:"Pre-requisites (for open-source Unity Catalog)"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Source table(s) (Hudi/Iceberg) already written to external storage locations like S3/GCS/ADLS or local.\nIn this guide, we will use the local file system.\nBut for S3/GCS/ADLS, you must add additional properties related to the respective cloud object storage system you're working with as mentioned ",(0,n.jsx)(t.a,{href:"https://github.com/unitycatalog/unitycatalog/blob/main/docs/server.md",children:"here"})]}),"\n",(0,n.jsxs)(t.li,{children:["Clone the Unity Catalog repository from ",(0,n.jsx)(t.a,{href:"https://github.com/unitycatalog/unitycatalog",children:"here"})," and build the project by following the steps outlined ",(0,n.jsx)(t.a,{href:"https://github.com/unitycatalog/unitycatalog?tab=readme-ov-file#prerequisites",children:"here"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(t.h3,{id:"running-sync",children:"Running sync"}),"\n",(0,n.jsxs)(t.p,{children:["Create ",(0,n.jsx)(t.code,{children:"my_config.yaml"})," in the cloned Apache XTable\u2122 (Incubating) directory."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'md title="yaml"',children:"sourceFormat: HUDI|ICEBERG # choose only one\ntargetFormats:\n  - DELTA\ndatasets:\n  -\n    tableBasePath: s3://path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE # you only need to specify partitionSpec for HUDI sourceFormat\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Note:",type:"note",children:(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Replace ",(0,n.jsx)(t.code,{children:"s3://path/to/source/data"})," to ",(0,n.jsx)(t.code,{children:"gs://path/to/source/data"})," if you have your source table in GCS\nand ",(0,n.jsx)(t.code,{children:"abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<path-to-data>"})," if you have your source table in ADLS."]}),"\n",(0,n.jsxs)(t.li,{children:["And replace with appropriate values for ",(0,n.jsx)(t.code,{children:"sourceFormat"}),", and ",(0,n.jsx)(t.code,{children:"tableName"})," fields."]}),"\n"]})}),"\n",(0,n.jsx)(t.p,{children:"From your terminal under the cloned Apache XTable\u2122 (Incubating) directory, run the sync process using the below command."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:"java -jar xtable-utilities/target/xtable-utilities-0.2.0-SNAPSHOT-bundled.jar --datasetConfig my_config.yaml\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Note:",type:"tip",children:(0,n.jsxs)(t.p,{children:["At this point, if you check your bucket path, you will be able to see ",(0,n.jsx)(t.code,{children:"_delta_log"})," directory with\n00000000000000000000.json which contains the logs that helps query engines to interpret the source table as a Delta table."]})}),"\n",(0,n.jsx)(t.h3,{id:"register-the-target-table-in-databricks-unity-catalog",children:"Register the target table in Databricks Unity Catalog"}),"\n",(0,n.jsx)(t.p,{children:"(After making sure you complete the pre-requisites mentioned for Databricks Unity Catalog above) In your Databricks workspace, under SQL editor, run the following queries."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'md title="SQL"',children:"CREATE CATALOG xtable;\n\nCREATE SCHEMA xtable.synced_delta_schema;\n\nCREATE TABLE xtable.synced_delta_schema.<table_name>\nUSING DELTA\nLOCATION 's3://path/to/source/data';\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Note:",type:"note",children:(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"s3://path/to/source/data"})," to ",(0,n.jsx)(t.code,{children:"gs://path/to/source/data"})," if you have your source table in GCS\nand ",(0,n.jsx)(t.code,{children:"abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<path-to-data>"})," if you have your source table in ADLS."]})}),"\n",(0,n.jsx)(t.h3,{id:"validating-the-results",children:"Validating the results"}),"\n",(0,n.jsxs)(t.p,{children:["You can now see the created delta table in ",(0,n.jsx)(t.strong,{children:"Unity Catalog"})," under ",(0,n.jsx)(t.strong,{children:"Catalog"})," as ",(0,n.jsx)(t.code,{children:"<table_name>"})," under\n",(0,n.jsx)(t.code,{children:"synced_delta_schema"})," and also query the table in the SQL editor:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM xtable.synced_delta_schema.<table_name>;\n"})}),"\n",(0,n.jsx)(t.h3,{id:"register-the-target-table-in-open-source-unity-catalog-using-the-cli",children:"Register the target table in open-source Unity Catalog using the CLI"}),"\n",(0,n.jsxs)(t.p,{children:["(After making sure you complete the pre-requisites mentioned for open-source Unity Catalog above) In your terminal start the UC server by following the steps outlined ",(0,n.jsx)(t.a,{href:"https://github.com/unitycatalog/unitycatalog/tree/main?tab=readme-ov-file#quickstart---hello-uc",children:"here"})]}),"\n",(0,n.jsx)(t.p,{children:"In a different terminal, run the following commands to register the target table in Unity Catalog."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:'bin/uc table create --full_name unity.default.people --columns "id INT, name STRING, age INT, city STRING, create_ts STRING" --storage_location /tmp/delta-dataset/people\n'})}),"\n",(0,n.jsx)(t.h3,{id:"validating-the-results-1",children:"Validating the results"}),"\n",(0,n.jsx)(t.p,{children:"You can now read the table registered in Unity Catalog using the below command."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:"bin/uc table read --full_name unity.default.people\n"})}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"In this guide we saw how to,"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"sync a source table to create metadata for the desired target table formats using Apache XTable\u2122 (Incubating)"}),"\n",(0,n.jsx)(t.li,{children:"catalog the data in Delta format in Unity Catalog on Databricks, and also open-source Unity Catalog"}),"\n",(0,n.jsx)(t.li,{children:"query the Delta table using Databricks SQL editor, and open-source Unity Catalog CLI."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>l});var n=a(7294);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);