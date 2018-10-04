# This is an app bases on Nextcloud Files Access Control App
The different point is that it only denies modifications instead of blocking all access. So I call it Files Edit Control App.

Below is description of File Access Control:

Nextcloud's File Access Control app enables administrators to protect data from unauthorized access or modifications.

## How it works
The administrator can create and manage a set of rule groups. Each of the rule groups consists of one or more rules. If all rules of a group hold true, the group matches the request and access is being denied or the upload is blocked. The rules criteria range from IP address, mimetype and request time to group membership, tags, user agent and more.
		
An example would be to deny access to Excell/XLSX files owned by the "Human Resources" group accessed from an IP not on the internal company network or to block uploads of files bigger than 512 mb by students in the "1st year" group.
	
Learn more about File Access Control on [https://nextcloud.com/workflow](https://nextcloud.com/workflow)

## Installation
In the server, enter to folder /var/www/nextcloud/apps/ and clone the project:

```
cd /var/www/nextcloud/apps/
git clone https://github.com/linhtinh11/files_editcontrol.git
```

Then, as admin go to the Nextcloud configuration -> applications, find the app in the disabled tab and enable it.

## QA metrics on master branch:

[![Build Status](https://travis-ci.org/nextcloud/files_accesscontrol.svg?branch=master)](https://travis-ci.org/nextcloud/files_accesscontrol/branches)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/nextcloud/files_accesscontrol/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/nextcloud/files_accesscontrol/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/nextcloud/files_accesscontrol/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/nextcloud/files_accesscontrol/?branch=master)

