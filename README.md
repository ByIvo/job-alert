# job-alert
[![Build application](https://github.com/ByIvo/job-alert/actions/workflows/build.yaml/badge.svg)](https://github.com/ByIvo/job-alert/actions/workflows/build.yaml)

Search and alert on jobs for my personl usage.

It is schedule to look for jobs daily at 9AM, 12PM, 15PM and can be manually triggered.

If you wish to set up your own, fork this repo and create the following secrets:

SMTP_FROM
SMTP_TO
SMTP_PASSWORD
SMTP_USERNAME

If you do not know where to start, create an account at sendGrid and configure an [SMPT account](https://app.sendgrid.com/guide/integrate/langs/smtp).
the SMTP_FROM value must a verified sender [identify](https://www.twilio.com/docs/sendgrid/for-developers/sending-email/sender-identity). Create your own at [here](https://app.sendgrid.com/settings/sender_auth/senders)


Feel free to contribute and add your desired companies.