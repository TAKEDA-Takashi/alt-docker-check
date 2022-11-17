import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";

import { AltDockerCheckStack } from "../lib/alt-docker-check-stack";

test("Snapshot Test", () => {
  const altDockerCheckStack = new AltDockerCheckStack(
    new App({}),
    "AltDockerCheckStack"
  );

  const template = Template.fromStack(altDockerCheckStack).toJSON();
  expect(template).toMatchSnapshot();
});
