"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/OneTable-is-now-Apache-XTable","metadata":{"permalink":"/blog/OneTable-is-now-Apache-XTable","source":"@site/blog/OneTable-is-now-Apache-XTable.md","title":"OneTable is now \u201cApache XTable\u2122 (Incubating)\u201d","description":"Data Lakehouse table formats such as Apache Hudi, Delta Lake, and","date":"2024-11-27T19:30:11.000Z","formattedDate":"November 27, 2024","tags":[{"label":"apache xtable","permalink":"/blog/tags/apache-xtable"},{"label":"community","permalink":"/blog/tags/community"}],"readingTime":3.09,"hasTruncateMarker":false,"authors":[{"name":"Dipankar Mazumdar, JB Onofr\xe9"}],"frontMatter":{"title":"OneTable is now \u201cApache XTable\u2122 (Incubating)\u201d","excerpt":"Apache XTable\u2122 (Incubating) is now Incubating in the Apache Software Foundation","author":"Dipankar Mazumdar, JB Onofr\xe9","category":"blog","image":"/images/blog/XTable/xtable-cover.png","tags":["apache xtable","community"]},"unlisted":false,"nextItem":{"title":"Sync Tables in Hudi|Delta|Iceberg with XTable and AWS Lambda: Automate, Schedule, or Trigger On-Demand","permalink":"/blog/soumil_sync"}},"content":"Data Lakehouse table formats such as [Apache Hudi](https://hudi.apache.org/), [Delta Lake](https://delta.io/), and \\n[Apache Iceberg](https://iceberg.apache.org/) have enabled users to establish open foundations for their data architecture. \\nThis \'openness\' supports using the right compute engine for the right workload in a cost-efficient way. While this \\nflexibility has been rewarding, navigating the decision to select a single table format has unfolded as a new challenge. \\nOneTable, an open-source project [released last year](https://venturebeat.com/data-infrastructure/exclusive-microsoft-and-google-join-forces-on-onetable-an-open-source-solution-for-data-lake-challenges/), \\ntargets _\'interoperability\'_ among different lakehouse table formats. By being a lightweight translation layer, \\nOneTable allows users to seamlessly translate metadata between the source and target table formats, without the need to \\nrewrite or duplicate the actual data files.\\n\\n<img src=\\"/images/blog/XTable/xtable-github.png\\" alt=\\"drawing\\" style={{width:\'80%\', display:\'block\', marginLeft:\'auto\', marginRight:\'auto\', marginTop:\'18pt\', marginBottom:\'18pt\'}} />\\n\\nThe goal of OneTable was to anchor its success in neutrality, guided by strong community values. From the very beginning, \\nthe project[ expressed its desire](https://cwiki.apache.org/confluence/display/INCUBATOR/XTable+Proposal) to be incubated \\nunder the [Apache Software Foundation](https://www.apache.org/). Today, we are excited to announce that OneTable has been \\naccepted as an incubating project by Apache and will henceforth be known as **Apache XTable\u2122**. As part of the incubation, \\nthe project has transitioned the code repository to the Apache infrastructure and adopted the \\n[community-driven development principles](https://community.apache.org/) of the Apache Foundation.\\n\\nWhile XTable is in its early phases, it has quickly been gaining significant momentum within the lakehouse community. \\nThe project has already garnered over [560 GitHub stars](https://x.com/apachextable/status/1725247462280196465?s=20), \\nmore than 1000 clones and 70 forks, indicating a rapidly \\n[growing interest](https://x.com/apachextable/status/1725685237215322294?s=20). Additionally, XTable has a diverse set \\nof contributors from organizations such as Microsoft, Onehouse, Google, Walmart, Adobe, Cloudera, and Dremio. With the \\nApache incubation, we are also looking forward to connecting with more contributors who have similar interests in this space.\\n\\nIncubating XTable at the Apache Software Foundation (ASF) signifies more than just the technical evolution of a project; \\nit\'s a step towards fostering a vibrant community around it. This milestone is exciting for several reasons. Firstly, \\nthe ASF\'s incubation process is renowned for its emphasis on community development and open governance, aligning \\nperfectly with our vision for XTable. By embracing the Apache way, we\'re not just contributing code; we\'re building a \\nfoundation for a project that\'s open, inclusive, and sustainable. The incubation phase will equip XTable with the \\nmentoring and services necessary to thrive as a Top Level Project (TLP), ensuring it benefits from the ASF\'s vendor-neutral \\nenvironment.\\n\\nThis environment encourages innovation, collaboration, and the sharing of ideas, making it an ideal breeding ground for \\nXTable to grow. Moreover, the ASF\'s global reach and reputation will enhance XTable\'s visibility and adoption, creating \\nnew opportunities for collaboration with other projects and communities. We\'re excited about the journey ahead and the \\npotential for XTable to become a key part of the ASF ecosystem, contributing to its mission of providing software for \\nthe public good.\\n\\n<img src=\\"/images/blog/XTable/xtable-docs.png\\" alt=\\"drawing\\" style={{width:\'80%\', display:\'block\', marginLeft:\'auto\', \\nmarginRight:\'auto\', marginTop:\'18pt\', marginBottom:\'18pt\'}} />\\n\\nFor those interested in exploring Apache XTable\u2122, the official website is a good starting point. The documentation \\nsection hosts a great hands-on [quickstart](https://xtable.apache.org/docs/how-to) guide to getting acquainted with XTable, \\nproviding a straightforward way to experience its interoperability capabilities firsthand. If you have specific ideas, \\nquestions, or seek direct interaction, the [discussions](https://github.com/apache/incubator-xtable/discussions) section \\nis available for more in-depth exchanges. We invite you to contribute to the project by submitting pull requests or \\nfilling issues to the [XTable GitHub repository](https://github.com/apache/incubator-xtable). Contributions in the early \\nphase of the project are going to be critical as we build XTable together. Joining the \\n[XTable mailing list](mailto:dev-subscribe@xtable.apache.org) is another excellent way to stay informed and engage with \\nthe project. We are really excited about the future of Apache XTable\u2122 and building it together with the vibrant data community.\\n\\nFollow Apache XTable\u2122 on [LinkedIn](https://www.linkedin.com/company/apache-xtable/) and [Twitter](https://twitter.com/apachextable) \\nto keep up with the latest updates!"},{"id":"/soumil_sync","metadata":{"permalink":"/blog/soumil_sync","source":"@site/blog/soumil_sync.mdx","title":"Sync Tables in Hudi|Delta|Iceberg with XTable and AWS Lambda: Automate, Schedule, or Trigger On-Demand","description":"Redirecting... please wait!!","date":"2024-11-22T00:00:00.000Z","formattedDate":"November 22, 2024","tags":[{"label":"xtable","permalink":"/blog/tags/xtable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"hudi","permalink":"/blog/tags/hudi"},{"label":"iceberg","permalink":"/blog/tags/iceberg"},{"label":"delta","permalink":"/blog/tags/delta"},{"label":"AWS","permalink":"/blog/tags/aws"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Soumil Shah"}],"frontMatter":{"title":"Sync Tables in Hudi|Delta|Iceberg with XTable and AWS Lambda: Automate, Schedule, or Trigger On-Demand","author":"Soumil Shah","category":"blog","image":"images/blog/soumil_aws/1732278614623.png","tags":["xtable","interoperability","hudi","iceberg","delta","AWS"],"date":"2024-11-22T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"OneTable is now \u201cApache XTable\u2122 (Incubating)\u201d","permalink":"/blog/OneTable-is-now-Apache-XTable"},"nextItem":{"title":"Store and access your Iceberg data in OneLake using Snowflake and shortcuts (via Apache XTable)","permalink":"/blog/microsoft_fabric"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://www.linkedin.com/pulse/sync-tables-all-three-formatshudideltaiceberg-xtable-aws-soumil-shah-3znxf/?trackingId=kU48ZQ7XTi2whOMw0tuHIg%3D%3D\\">Redirecting... please wait!! </Redirect>"},{"id":"/microsoft_fabric","metadata":{"permalink":"/blog/microsoft_fabric","source":"@site/blog/microsoft_fabric.mdx","title":"Store and access your Iceberg data in OneLake using Snowflake and shortcuts (via Apache XTable)","description":"Redirecting... please wait!!","date":"2024-11-14T00:00:00.000Z","formattedDate":"November 14, 2024","tags":[{"label":"xtable","permalink":"/blog/tags/xtable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"iceberg","permalink":"/blog/tags/iceberg"},{"label":"delta","permalink":"/blog/tags/delta"},{"label":"Microsoft Fabric","permalink":"/blog/tags/microsoft-fabric"},{"label":"Snowflake","permalink":"/blog/tags/snowflake"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Matthew Hicks"}],"frontMatter":{"title":"Store and access your Iceberg data in OneLake using Snowflake and shortcuts (via Apache XTable)","author":"Matthew Hicks","category":"blog","image":"images/blog/ms_fabric/iceberg-shortcut-diagram-1024x576-3.png","tags":["xtable","interoperability","iceberg","delta","Microsoft Fabric","Snowflake"],"date":"2024-11-14T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Sync Tables in Hudi|Delta|Iceberg with XTable and AWS Lambda: Automate, Schedule, or Trigger On-Demand","permalink":"/blog/soumil_sync"},"nextItem":{"title":"Unity Catalog OSS with Hudi, Delta, Iceberg, and EMR + DuckDB","permalink":"/blog/xtable-unity"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://blog.fabric.microsoft.com/en-us/blog/store-and-use-your-snowflake-iceberg-data-in-onelake?ft=All\\">Redirecting... please wait!! </Redirect>"},{"id":"/xtable-unity","metadata":{"permalink":"/blog/xtable-unity","source":"@site/blog/xtable-unity.mdx","title":"Unity Catalog OSS with Hudi, Delta, Iceberg, and EMR + DuckDB","description":"Redirecting... please wait!!","date":"2024-07-14T00:00:00.000Z","formattedDate":"July 14, 2024","tags":[{"label":"xtable","permalink":"/blog/tags/xtable"},{"label":"Unity Catalog","permalink":"/blog/tags/unity-catalog"},{"label":"hudi","permalink":"/blog/tags/hudi"},{"label":"delta","permalink":"/blog/tags/delta"},{"label":"iceberg","permalink":"/blog/tags/iceberg"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Kyle Weller"}],"frontMatter":{"title":"Unity Catalog OSS with Hudi, Delta, Iceberg, and EMR + DuckDB","author":"Kyle Weller","category":"blog","image":"images/blog/xtable-unity/xtable_unity.jpg","tags":["xtable","Unity Catalog","hudi","delta","iceberg"],"date":"2024-07-14T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Store and access your Iceberg data in OneLake using Snowflake and shortcuts (via Apache XTable)","permalink":"/blog/microsoft_fabric"},"nextItem":{"title":"Run Apache XTable on Amazon MWAA to translate open table formats","permalink":"/blog/aws-mwaa"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://medium.com/@kywe665/unity-catalog-oss-with-hudi-delta-iceberg-and-emr-duckdb-710ab8f8a7dc\\">Redirecting... please wait!! </Redirect>"},{"id":"/aws-mwaa","metadata":{"permalink":"/blog/aws-mwaa","source":"@site/blog/aws-mwaa.mdx","title":"Run Apache XTable on Amazon MWAA to translate open table formats","description":"Redirecting... please wait!!","date":"2024-07-09T00:00:00.000Z","formattedDate":"July 9, 2024","tags":[{"label":"xtable","permalink":"/blog/tags/xtable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"airflow","permalink":"/blog/tags/airflow"},{"label":"delta","permalink":"/blog/tags/delta"},{"label":"iceberg","permalink":"/blog/tags/iceberg"},{"label":"Amazon MWAA","permalink":"/blog/tags/amazon-mwaa"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Matthias Rudolph and Stephen Said"}],"frontMatter":{"title":"Run Apache XTable on Amazon MWAA to translate open table formats","author":"Matthias Rudolph and Stephen Said","category":"blog","image":"images/blog/aws-mwaa/aws_mwaa.jpg","tags":["xtable","interoperability","airflow","delta","iceberg","Amazon MWAA"],"date":"2024-07-09T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Unity Catalog OSS with Hudi, Delta, Iceberg, and EMR + DuckDB","permalink":"/blog/xtable-unity"},"nextItem":{"title":"Using Apache Hudi & Iceberg tables in Databricks with Apache XTable","permalink":"/blog/xtable-databricks"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://aws.amazon.com/blogs/big-data/run-apache-xtable-on-amazon-mwaa-to-translate-open-table-formats/\\">Redirecting... please wait!! </Redirect>"},{"id":"/xtable-databricks","metadata":{"permalink":"/blog/xtable-databricks","source":"@site/blog/xtable-databricks.mdx","title":"Using Apache Hudi & Iceberg tables in Databricks with Apache XTable","description":"Redirecting... please wait!!","date":"2024-06-04T00:00:00.000Z","formattedDate":"June 4, 2024","tags":[{"label":"databricks","permalink":"/blog/tags/databricks"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"hudi","permalink":"/blog/tags/hudi"},{"label":"delta","permalink":"/blog/tags/delta"},{"label":"iceberg","permalink":"/blog/tags/iceberg"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Dipankar Mazumdar"}],"frontMatter":{"title":"Using Apache Hudi & Iceberg tables in Databricks with Apache XTable","author":"Dipankar Mazumdar","category":"blog","image":"images/blog/xtable-db/xtable-db-use.jpg","tags":["databricks","interoperability","hudi","delta","iceberg"],"date":"2024-06-04T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Run Apache XTable on Amazon MWAA to translate open table formats","permalink":"/blog/aws-mwaa"},"nextItem":{"title":"Using XTable to translate from Iceberg to Hudi & Delta Lake with a File System Catalog like S3","permalink":"/blog/xtable-iceberg-fs-catalog"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://dipankar-tnt.medium.com/using-apache-hudi-iceberg-tables-in-databricks-with-apache-xtable-253f411be637\\">Redirecting... please wait!! </Redirect>"},{"id":"/xtable-iceberg-fs-catalog","metadata":{"permalink":"/blog/xtable-iceberg-fs-catalog","source":"@site/blog/xtable-iceberg-fs-catalog.mdx","title":"Using XTable to translate from Iceberg to Hudi & Delta Lake with a File System Catalog like S3","description":"Redirecting... please wait!!","date":"2024-05-15T00:00:00.000Z","formattedDate":"May 15, 2024","tags":[{"label":"s3","permalink":"/blog/tags/s-3"},{"label":"iceberg","permalink":"/blog/tags/iceberg"},{"label":"hudi","permalink":"/blog/tags/hudi"},{"label":"delta","permalink":"/blog/tags/delta"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Dipankar Mazumdar"}],"frontMatter":{"title":"Using XTable to translate from Iceberg to Hudi & Delta Lake with a File System Catalog like S3","author":"Dipankar Mazumdar","category":"blog","image":"images/blog/iceberg-fs-catalog/ice-fs.jpg","tags":["s3","iceberg","hudi","delta"],"date":"2024-05-15T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Using Apache Hudi & Iceberg tables in Databricks with Apache XTable","permalink":"/blog/xtable-databricks"},"nextItem":{"title":"E-commerce Funnel Analysis with StarRocks: 87 Million Records, Apache Hudi, Apache Iceberg, Delta Lake (MinIO, Apache HMS, Apache XTable)","permalink":"/blog/ecommerce-funnel-analysis-with-starrocks"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://dipankar-tnt.medium.com/using-xtable-to-translate-from-iceberg-to-hudi-delta-lake-with-a-file-system-catalog-like-s3-4b72653836f8\\">Redirecting... please wait!! </Redirect>"},{"id":"/ecommerce-funnel-analysis-with-starrocks","metadata":{"permalink":"/blog/ecommerce-funnel-analysis-with-starrocks","source":"@site/blog/ecommerce-funnel-analysis-with-starrocks.mdx","title":"E-commerce Funnel Analysis with StarRocks: 87 Million Records, Apache Hudi, Apache Iceberg, Delta Lake (MinIO, Apache HMS, Apache XTable)","description":"Redirecting... please wait!!","date":"2024-03-01T00:00:00.000Z","formattedDate":"March 1, 2024","tags":[{"label":"onetable","permalink":"/blog/tags/onetable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"hudi","permalink":"/blog/tags/hudi"},{"label":"delta","permalink":"/blog/tags/delta"},{"label":"iceberg","permalink":"/blog/tags/iceberg"},{"label":"starrocks","permalink":"/blog/tags/starrocks"},{"label":"minio","permalink":"/blog/tags/minio"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Albert Wong"}],"frontMatter":{"title":"E-commerce Funnel Analysis with StarRocks: 87 Million Records, Apache Hudi, Apache Iceberg, Delta Lake (MinIO, Apache HMS, Apache XTable)","author":"Albert Wong","category":"blog","image":"images/blog/ecommerce-funnel-analysis-with-starrocks/starrocks-xtable.png","tags":["onetable","interoperability","hudi","delta","iceberg","starrocks","minio"],"date":"2024-03-01T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Using XTable to translate from Iceberg to Hudi & Delta Lake with a File System Catalog like S3","permalink":"/blog/xtable-iceberg-fs-catalog"},"nextItem":{"title":"OneTable: A Catalyst for an Open and Interoperable Lakehouse","permalink":"/blog/interop-lakehouse"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://atwong.medium.com/e-commerce-funnel-analysis-with-starrocks-87-million-records-apache-hudi-apache-iceberg-delta-ebf0923c149a\\">Redirecting... please wait!! </Redirect>"},{"id":"/interop-lakehouse","metadata":{"permalink":"/blog/interop-lakehouse","source":"@site/blog/interop-lakehouse.mdx","title":"OneTable: A Catalyst for an Open and Interoperable Lakehouse","description":"Redirecting... please wait!!","date":"2023-12-26T00:00:00.000Z","formattedDate":"December 26, 2023","tags":[{"label":"onetable","permalink":"/blog/tags/onetable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Sushil K."}],"frontMatter":{"title":"OneTable: A Catalyst for an Open and Interoperable Lakehouse","author":"Sushil K.","category":"blog","image":"images/blog/onetable-launch/onetable-cover.png","tags":["onetable","interoperability"],"date":"2023-12-26T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"E-commerce Funnel Analysis with StarRocks: 87 Million Records, Apache Hudi, Apache Iceberg, Delta Lake (MinIO, Apache HMS, Apache XTable)","permalink":"/blog/ecommerce-funnel-analysis-with-starrocks"},"nextItem":{"title":"OneTable: Interoperability for Apache Hudi, Iceberg and Delta Lake","permalink":"/blog/onetable-intro-dip"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://www.linkedin.com/pulse/onetable-catalyst-open-interoperable-lakehouse-sushil-kumar-xprre/\\">Redirecting... please wait!! </Redirect>"},{"id":"/onetable-intro-dip","metadata":{"permalink":"/blog/onetable-intro-dip","source":"@site/blog/onetable-intro-dip.mdx","title":"OneTable: Interoperability for Apache Hudi, Iceberg and Delta Lake","description":"Redirecting... please wait!!","date":"2023-12-07T00:00:00.000Z","formattedDate":"December 7, 2023","tags":[{"label":"onetable","permalink":"/blog/tags/onetable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"hudi","permalink":"/blog/tags/hudi"},{"label":"delta","permalink":"/blog/tags/delta"},{"label":"iceberg","permalink":"/blog/tags/iceberg"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Dipankar Mazumdar"}],"frontMatter":{"title":"OneTable: Interoperability for Apache Hudi, Iceberg and Delta Lake","author":"Dipankar Mazumdar","category":"blog","image":"images/blog/onetable-intro-dip/Onetable_thumb.png","tags":["onetable","interoperability","hudi","delta","iceberg"],"date":"2023-12-07T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"OneTable: A Catalyst for an Open and Interoperable Lakehouse","permalink":"/blog/interop-lakehouse"},"nextItem":{"title":"Hands-on guide to omni-directional interop with OneTable","permalink":"/blog/breaking-data-silos"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://dipankar-tnt.medium.com/onetable-interoperability-for-apache-hudi-iceberg-delta-lake-bb8b27dd288d\\">Redirecting... please wait!! </Redirect>"},{"id":"/breaking-data-silos","metadata":{"permalink":"/blog/breaking-data-silos","source":"@site/blog/breaking-data-silos.mdx","title":"Hands-on guide to omni-directional interop with OneTable","description":"Redirecting... please wait!!","date":"2023-11-16T00:00:00.000Z","formattedDate":"November 16, 2023","tags":[{"label":"onetable","permalink":"/blog/tags/onetable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"hands-on-guide","permalink":"/blog/tags/hands-on-guide"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Soumil S."}],"frontMatter":{"title":"Hands-on guide to omni-directional interop with OneTable","author":"Soumil S.","category":"blog","image":"images/blog/handson-guide/omni-dir.png","tags":["onetable","interoperability","hands-on-guide"],"date":"2023-11-16T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"OneTable: Interoperability for Apache Hudi, Iceberg and Delta Lake","permalink":"/blog/onetable-intro-dip"},"nextItem":{"title":"Microsoft and Google join forces on OneTable","permalink":"/blog/onetable-launch"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://www.linkedin.com/pulse/breaking-down-data-silos-hands-on-guide-conversion-onetable-shah-tpbpe/\\">Redirecting... please wait!! </Redirect>"},{"id":"/onetable-launch","metadata":{"permalink":"/blog/onetable-launch","source":"@site/blog/onetable-launch.mdx","title":"Microsoft and Google join forces on OneTable","description":"Redirecting... please wait!!","date":"2023-11-15T00:00:00.000Z","formattedDate":"November 15, 2023","tags":[{"label":"onetable","permalink":"/blog/tags/onetable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"venturebeat","permalink":"/blog/tags/venturebeat"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Sean Michael Kerner"}],"frontMatter":{"title":"Microsoft and Google join forces on OneTable","author":"Sean Michael Kerner","category":"blog","image":"images/blog/onetable-launch/onetable-cover.png","tags":["onetable","interoperability","venturebeat"],"date":"2023-11-15T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Hands-on guide to omni-directional interop with OneTable","permalink":"/blog/breaking-data-silos"},"nextItem":{"title":"OneTable is Now Open Source","permalink":"/blog/onetable-now-oss"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://venturebeat.com/data-infrastructure/exclusive-microsoft-and-google-join-forces-on-onetable-an-open-source-solution-for-data-lake-challenges/\\">Redirecting... please wait!! </Redirect>"},{"id":"/onetable-now-oss","metadata":{"permalink":"/blog/onetable-now-oss","source":"@site/blog/onetable-now-oss.mdx","title":"OneTable is Now Open Source","description":"Redirecting... please wait!!","date":"2023-11-15T00:00:00.000Z","formattedDate":"November 15, 2023","tags":[{"label":"onetable","permalink":"/blog/tags/onetable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"hudi","permalink":"/blog/tags/hudi"},{"label":"delta","permalink":"/blog/tags/delta"},{"label":"iceberg","permalink":"/blog/tags/iceberg"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Kyle Weller and Tim Brown"}],"frontMatter":{"title":"OneTable is Now Open Source","author":"Kyle Weller and Tim Brown","category":"blog","image":"images/blog/onetable-now-oss/onetable-now-oss.png","tags":["onetable","interoperability","hudi","delta","iceberg"],"date":"2023-11-15T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Microsoft and Google join forces on OneTable","permalink":"/blog/onetable-launch"},"nextItem":{"title":"Onehouse open-sources OneTable with support from Google and Microsoft","permalink":"/blog/siliconangle-onetable"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://www.onehouse.ai/blog/onetable-is-now-open-source\\">Redirecting... please wait!! </Redirect>"},{"id":"/siliconangle-onetable","metadata":{"permalink":"/blog/siliconangle-onetable","source":"@site/blog/siliconangle-onetable.mdx","title":"Onehouse open-sources OneTable with support from Google and Microsoft","description":"Redirecting... please wait!!","date":"2023-11-15T00:00:00.000Z","formattedDate":"November 15, 2023","tags":[{"label":"onetable","permalink":"/blog/tags/onetable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"siliconangle","permalink":"/blog/tags/siliconangle"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Maria Deutscher"}],"frontMatter":{"title":"Onehouse open-sources OneTable with support from Google and Microsoft","author":"Maria Deutscher","category":"blog","image":"images/blog/siliconangle-onetable/onetable-sa.png","tags":["onetable","interoperability","siliconangle"],"date":"2023-11-15T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"OneTable is Now Open Source","permalink":"/blog/onetable-now-oss"},"nextItem":{"title":"The Road to an Open and Interoperable Lakehouse","permalink":"/blog/road-to-interoperable-lakehouse"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://siliconangle.com/2023/11/15/onehouse-open-sources-onetable-data-tool-support-google-microsoft/\\">Redirecting... please wait!! </Redirect>"},{"id":"/road-to-interoperable-lakehouse","metadata":{"permalink":"/blog/road-to-interoperable-lakehouse","source":"@site/blog/road-to-interoperable-lakehouse.mdx","title":"The Road to an Open and Interoperable Lakehouse","description":"Redirecting... please wait!!","date":"2023-07-10T00:00:00.000Z","formattedDate":"July 10, 2023","tags":[{"label":"onetable","permalink":"/blog/tags/onetable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"hudi","permalink":"/blog/tags/hudi"},{"label":"delta","permalink":"/blog/tags/delta"},{"label":"iceberg","permalink":"/blog/tags/iceberg"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Kyle Weller"}],"frontMatter":{"title":"The Road to an Open and Interoperable Lakehouse","author":"Kyle Weller","category":"blog","image":"images/blog/road-to-interoperable-lakehouse/road-to-interoperable-lakehouse.png","tags":["onetable","interoperability","hudi","delta","iceberg"],"date":"2023-07-10T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Onehouse open-sources OneTable with support from Google and Microsoft","permalink":"/blog/siliconangle-onetable"},"nextItem":{"title":"Announcing OneTable","permalink":"/blog/announcing-onetable"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://www.onehouse.ai/blog/the-road-to-an-open-and-interoperable-lakehouse\\">Redirecting... please wait!! </Redirect>"},{"id":"/announcing-onetable","metadata":{"permalink":"/blog/announcing-onetable","source":"@site/blog/announcing-onetable.mdx","title":"Announcing OneTable","description":"Redirecting... please wait!!","date":"2023-02-02T00:00:00.000Z","formattedDate":"February 2, 2023","tags":[{"label":"onetable","permalink":"/blog/tags/onetable"},{"label":"interoperability","permalink":"/blog/tags/interoperability"},{"label":"hudi","permalink":"/blog/tags/hudi"},{"label":"delta","permalink":"/blog/tags/delta"},{"label":"iceberg","permalink":"/blog/tags/iceberg"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Tim Brown"}],"frontMatter":{"title":"Announcing OneTable","author":"Tim Brown","category":"blog","image":"images/blog/announcing-onetable/announcing-onetable.png","tags":["onetable","interoperability","hudi","delta","iceberg"],"date":"2023-02-02T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"The Road to an Open and Interoperable Lakehouse","permalink":"/blog/road-to-interoperable-lakehouse"}},"content":"import Redirect from \'@site/src/components/Redirect\';\\n\\n<Redirect url=\\"https://www.onehouse.ai/blog/onetable-hudi-delta-iceberg\\">Redirecting... please wait!! </Redirect>"}]}')}}]);