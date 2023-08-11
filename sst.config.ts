import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { type SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "website-2",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          isExternalDomain: true,
          domainName: "qnext.ai",
          cdk: {
            certificate: Certificate.fromCertificateArn(
              stack,
              "11AugCert",
              "arn:aws:acm:us-east-1:255823186087:certificate/eff5ce75-d6b9-4467-93cd-0a2898f9b996"
            ),
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
