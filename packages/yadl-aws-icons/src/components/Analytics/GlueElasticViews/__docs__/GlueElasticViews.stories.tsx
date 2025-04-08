import type { Meta, StoryObj } from "@storybook/react";
import GlueElasticViews from "../GlueElasticViews";

const meta: Meta<typeof GlueElasticViews> = { title: "AWS/Analytics/GlueElasticViews", component: GlueElasticViews };

export default meta;
type Story = StoryObj<typeof GlueElasticViews>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
