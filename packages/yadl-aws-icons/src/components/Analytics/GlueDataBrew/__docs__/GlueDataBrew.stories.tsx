import type { Meta, StoryObj } from "@storybook/react";
import GlueDataBrew from "../GlueDataBrew";

const meta: Meta<typeof GlueDataBrew> = { title: "AWS/Analytics/GlueDataBrew", component: GlueDataBrew };

export default meta;
type Story = StoryObj<typeof GlueDataBrew>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
