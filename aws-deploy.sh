#!/bin/bash

# AWS Deployment Script
# This script builds and deploys your site to AWS S3 + CloudFront

set -e

echo "🚀 Starting AWS deployment..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first:"
    echo "   https://aws.amazon.com/cli/"
    exit 1
fi

# Check if environment variables are set
if [ -z "$S3_BUCKET_NAME" ]; then
    echo "❌ S3_BUCKET_NAME environment variable is not set"
    exit 1
fi

if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "⚠️  CLOUDFRONT_DISTRIBUTION_ID not set, skipping CloudFront invalidation"
fi

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to S3
echo "☁️  Deploying to S3 bucket: $S3_BUCKET_NAME"
aws s3 sync dist/ s3://$S3_BUCKET_NAME --delete

# Invalidate CloudFront cache
if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*"
fi

echo "✅ Deployment complete!"

