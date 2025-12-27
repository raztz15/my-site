# AWS Deployment Guide

This guide will help you migrate your site from Netlify to AWS and set up your custom domain.

## Option 1: AWS Amplify (Recommended for Easy Migration)

AWS Amplify is the easiest option and most similar to Netlify. It handles CI/CD, SSL certificates, and custom domains automatically.

### Steps:

1. **Create AWS Account**

   - Go to https://aws.amazon.com/
   - Sign up for an account (you'll need a credit card, but there's a free tier)

2. **Connect Your Repository**

   - Go to AWS Amplify Console: https://console.aws.amazon.com/amplify/
   - Click "New app" → "Host web app"
   - Connect your Git repository (GitHub, GitLab, Bitbucket, or deploy directly)
   - Or choose "Deploy without Git" to upload your build folder

3. **Configure Build Settings**

   - Build command: `npm run build` (or `pnpm run build`)
   - Output directory: `dist`
   - Amplify will auto-detect Vite settings

4. **Set Up Custom Domain**

   - In Amplify Console, go to your app → Domain management
   - Click "Add domain"
   - Enter your domain name
   - Follow the DNS configuration instructions
   - Amplify will automatically provision an SSL certificate via AWS Certificate Manager

5. **Update DNS Records**
   - Go to your domain registrar (where you bought the domain)
   - Add the CNAME or A record as instructed by Amplify
   - Wait for DNS propagation (can take up to 48 hours, usually much faster)

---

## Option 2: S3 + CloudFront (More Control, Lower Cost)

This option gives you more control and is typically cheaper for high-traffic sites.

### Prerequisites:

- AWS Account
- Domain name (you can buy one on Route 53 or use an existing one)

### Steps:

#### 1. Build Your Site

```bash
npm run build
# or
pnpm run build
```

#### 2. Create S3 Bucket

- Go to S3 Console: https://console.aws.amazon.com/s3/
- Create bucket with your domain name (e.g., `yourdomain.com`)
- **Important**: Uncheck "Block all public access" and enable static website hosting
- Set index document: `index.html`
- Set error document: `index.html` (for React Router)

#### 3. Upload Files

- Upload all files from `dist/` folder to the S3 bucket
- Make sure to set public read permissions

#### 4. Create CloudFront Distribution

- Go to CloudFront Console: https://console.aws.amazon.com/cloudfront/
- Create distribution
- Origin: Select your S3 bucket
- Viewer protocol policy: Redirect HTTP to HTTPS
- Default root object: `index.html`
- Price class: Choose based on your needs

#### 5. Request SSL Certificate

- Go to AWS Certificate Manager (ACM): https://console.aws.amazon.com/acm/
- Request certificate for your domain (e.g., `yourdomain.com` and `*.yourdomain.com`)
- Choose DNS validation
- Add the CNAME records to your domain's DNS

#### 6. Configure CloudFront with Custom Domain

- In CloudFront distribution settings, add your custom domain
- Select the SSL certificate from ACM
- Update the distribution

#### 7. Configure DNS

- Go to Route 53 (or your domain registrar)
- Create an A record (Alias) pointing to your CloudFront distribution
- Or create a CNAME record pointing to the CloudFront domain

#### 8. Set Up Error Pages (Important for React Router)

- In CloudFront, go to Error Pages tab
- Create custom error response for 403 and 404
- Response page path: `/index.html`
- HTTP response code: 200

---

## Cost Comparison

### AWS Amplify:

- Free tier: 15 GB storage, 5 GB served per month
- After free tier: ~$0.15/GB served

### S3 + CloudFront:

- S3: First 50 GB free, then ~$0.023/GB
- CloudFront: First 1 TB free, then ~$0.085/GB (varies by region)
- Route 53: $0.50/hosted zone/month + $0.40/million queries

**For most personal sites, both options are very affordable (often under $1/month).**

---

## Recommended Next Steps

1. **Choose your option** (Amplify is easier, S3+CloudFront is more flexible)
2. **Set up AWS account** if you don't have one
3. **Buy/configure your domain** if you don't have one yet
4. **Deploy using one of the methods above**
5. **Test thoroughly** before canceling Netlify

---

## Additional Tips

- **Keep Netlify running** until AWS is fully set up and tested
- **Set up CI/CD** - You can use GitHub Actions to auto-deploy on push
- **Monitor costs** - Set up billing alerts in AWS
- **Enable CloudWatch** for monitoring and logs
- **Consider using AWS WAF** for additional security

---

## Need Help?

- AWS Amplify Docs: https://docs.amplify.aws/
- S3 Static Website Hosting: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html
- CloudFront Docs: https://docs.aws.amazon.com/cloudfront/
