# App Features

- loading an OBJ Model into a scene
- Three.js OrbitControls integration
- scene resize on window resize
- display loading progress on Three Model in React app

# How to Run an App Locally
### Install
- [Node.js](https://nodejs.org/es/download/)
- [yarn](https://classic.yarnpkg.com/en/docs/install)
### Commands in bash
- Install dependencies
```
yarn install
```
- Run program
```
yarn run
```
### Deploy App in AWS S3

- Install [awscli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- Go to [AWS Educate Console](https://labs.vocareum.com/)
- Copy Account Details to _~/.aws/credentials_
- Fill aws configure (bash) with account details and default region name (in my case us-east-1):
```
AWS Access Key ID [********************]:
AWS Secret Access Key [********************]:
Default region name [us-east-1]: us-east-1
Default output format [None]:   
```
- Set a public AWS S3 named 3d-viewer-react. [How?](https://medium.com/serverlessguru/deploy-reactjs-app-with-s3-static-hosting-f640cb49d7e6)
- Copy permissions to bucket politics
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicReadAccess",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::3d-viewer-react/*"
      ]
    }
  ]
}
```
- Build app
```
yarn build
```
- Deploy app
```
yarn deploy
``




