---
template: "gsoc"

title: "Gsoc 2021"
mainImage: /logos/gsocLogo.png
description: Welcome to the Leopards Lab Google Summer of Code (GSoC) 2021 project ideas page. We are a dynamic and enthusiastic nonprofit research group pioneering in Internet of Things (IoT), Computer Security, and Software Tools, and is one of the best groups in South Asia. This is the 6th time that we are participating in the GSoC, we will use this page to develop possible project ideas that have on the above mentioned areas. Please note that anyone who is interested can participate in this process. You do not have to be a GSoC student or mentor to suggest possible project ideas. You can also talk to us about possible project ideas and we are happy to improve or help you with them. Please keep in mind that projects need to be realistically something that is able to be functionally completed by a student working full time for about eight weeks. Thanks!
links:
  - name: Mailing List
    url: https://groups.google.com/forum/#!forum/score-community
  - name: Gitter Channel
    url: https://gitter.im/LeaopardLabs
  - name: Proposal Template
    url: https://goo.gl/KXcqAL

guidelinesHeading: Important Guidelines on Submitting Ideas
guidelinesDescription: There are some important guidelines to submit ideas, please read these carefully before adding your ideas!
guidelines:
  - There is a fixed time period for implementing and coding your ideas
  - Come up with attainable goals and you will be able to complete what you set out to do. You can always contact   our mentors and community and get an idea about the workload and whether you might be able to complete them.
  - You are free to come up with your own ideas. The ideas should be about Internet of Things (IOT), Embedded Systems, Computer Security, Software Tools and ‘Wireless Adhoc and Sensor Networks’. Also if you love to work on any of these subjects but do not have an idea you can always contact us.
  - Lets Talk! The best way to solve problems that you might have is to contact our mentors and also our community.
  - We encourage you to do documentation so that we can keep track of your progress and also help you if things are not going according to plan. Although not compulsory we have a strong belief that this method can cut down your time to code and also the workload of the mentors drastically.

projectListHeading: Leopards Lab Project List
projectListButtonText: View Project List
projectListUrl: /projects

ideaListHeading: Idea List for 2021
ideaListDescription: The following is the idea list for Google Summer of Code 2021
ideaList:
  - title: Clocal GCP - Core
    description: Clocal GCP can be separated into core CLI application and a list of providers. Currently it resides in the same repository but having separate docker containers. Student can discuss the best approaches with the mentors and start implementing. What is expected is a well written CLI application which can be integrated with plugins. For an example a user can install the clocal GCP cli application and add separate plugins as necessary. example - Cloud Function plugin. This task involves creating the core CLI application and converting existing cloud emulation services to plugins. And adding the below services as plugins.
    expectedresults: Completion of the development milestones listed in the project.
    githuburl: https://github.com/leopardslab/clocal-gcp
    requiredknowledge: node.js, docker, general idea of gcp cloud and services.
    possiblementors: Rumesh Hapuarachchi, Rajika Imal, Dilantha Prasanjith

  - title: Clocal GCP - Services
    description: Here the task is to implement the emulation services for below Google Cloud platform products. These has to be implemented as individual services as docker containers, so that in a later phase these will be used as plugins for clocal gcp core CLI application. And students are free to choose the technology stack they are most familiar with to implement the emulation services.But NodeJS and python are preferred.
    expectedresults: Completion of the development milestones listed in the project.
    githuburl: https://github.com/leopardslab/clocal-gcp
    requiredknowledge: node.js, docker, general idea of gcp cloud and services.
    possiblementors: Rumesh Hapuarachchi, Rajika Imal, Dilantha Prasanjith

  - title: Clocal Azure - Services
    description: Clocal Azure is an emulation engine for azure services. The student is expected to identify the azure services which is practical to apply on Clocal Azure and implement the services. New services are expected from the student to implement. Later on, the student is expected to update the existing services and implement more features on the existing services. When implementing new services, student is free to propose any service with the approval of the mentor to implement during the period. Below are few suggested services.
    expectedresults: Completion of the development milestones listed in the project.
    githuburl: https://github.com/leopardslab/clocal-azure
    requiredknowledge: node.js, docker, general idea of azure cloud and services.
    possiblementors: Rumesh Hapuarachchi, Rajika Imal, Lakindu Gunasekara

  - title: Clocal Azure - Services
    description: Clocal Azure is an emulation engine for azure services. The student is expected to identify the azure services which is practical to apply on Clocal Azure and implement the services. New services are expected from the student to implement. Later on, the student is expected to update the existing services and implement more features on the existing services. When implementing new services, student is free to propose any service with the approval of the mentor to implement during the period. Below are few suggested services.
    expectedresults: Completion of the development milestones listed in the project.
    githuburl: https://github.com/leopardslab/clocal-azure
    requiredknowledge: node.js, docker, general idea of azure cloud and services.
    possiblementors: Rumesh Hapuarachchi, Rajika Imal, Lakindu Gunasekara

  - title: NodeCloud - Ali Cloud Provider
    description: Ali-cloud is a rising cloud provider in the cloud arena. Currently, NodeJS only supports only AWS and GCP. Students task is to implement the major services of Ali-cloud in the NodeJS. The student will have to discuss with mentors for the potential project scope as implementing entire provider will be a bigger task and may require multiple students.
    expectedresults: Completion of the development milestones listed in the project.
    githuburl: https://github.com/cloudlibz/nodecloud
    requiredknowledge: nodejs, ali-cloud
    possiblementors: Rumesh Hapuarachchi, Rajika Imal

  - title: NodeCloud - Digital Ocean Provider
    description: Digital Ocean is a key cloud provider. However current D.O. NodeJs wrapper is not actively maintaining. Therefore this project is a two part project. First you have to identify what are key components already developed in current wrapper and take necessary actions to implement the rest. Next part is using the developed SDK to implement following in the NodeCloud.
    expectedresults: Completion of the development milestones listed in the project.
    githuburl: https://github.com/cloudlibz/nodecloud
    requiredknowledge: nodejs, digital-ocean
    possiblementors: Rumesh Hapuarachchi, Rajika Imal

  - title: NodeCloud - Rackspace Provider
    description: Rackspace Provider is another key provider which we are missing at the moment. Student has a bigger task to do here as Rackspace does not offer their own NodeJS SDK. What they offer is pkgcloud binding for Rackspace. Student will have to implement the NodeSDK using REST API and will have to use the developed SDK to support Rackspace provider for Nodecloud.
    expectedresults: Completion of the development milestones listed in the project.
    githuburl: https://github.com/cloudlibz/nodecloud
    requiredknowledge: nodejs, rackspace
    possiblementors: Rumesh Hapuarachchi, Rajika Imal

  - title: CrawlerX - Improve CrawlerX web application
    description: The CrawlerX is a platform which we can use for crawl web URLs in different kind of protocols in a distributed way. With this iteration, we need to address capabilities such as Guaranteed delivery, a set of APIs to retrieve data, multi-protocol support, etc.
    expectedresults: Completion of the development milestones listed in the project.
    githuburl: https://github.com/leopardslab/CrawlerX
    requiredknowledge: Vue JS, Scrapy, Django, MongoDB
    possiblementors: TBD

  - title: CrawlerX - On-demand auto-scaling platform on Kubernetes
    description: The CrawlerX is a platform which we can use for crawl web URLs in different kind of protocols in a distributed way. Currently, it is running on Docker and we need to deploy it on Kubernetes as an on-demand, auto-scaling platform. Here on-demand means, users should have the capability to save their crawlers and schedule jobs in preferred frequencies.
    expectedresults: Completion of the development milestones listed in the project.
    githuburl: https://github.com/leopardslab/CrawlerX
    requiredknowledge: Vue JS, Scrapy, Django, Kubernetes
    possiblementors: TBD
---