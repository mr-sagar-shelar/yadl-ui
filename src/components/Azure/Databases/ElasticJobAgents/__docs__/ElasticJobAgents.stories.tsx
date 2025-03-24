import type { Meta, StoryObj } from "@storybook/react";
import ElasticJobAgents from "../ElasticJobAgents";

const meta: Meta<typeof ElasticJobAgents> = { title: "Azure/Databases/ElasticJobAgents", component: ElasticJobAgents };

export default meta;
type Story = StoryObj<typeof ElasticJobAgents>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
