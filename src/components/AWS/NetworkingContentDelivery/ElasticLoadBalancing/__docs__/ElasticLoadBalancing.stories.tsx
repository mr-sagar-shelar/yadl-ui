import type { Meta, StoryObj } from "@storybook/react";
import ElasticLoadBalancing from "../ElasticLoadBalancing";

const meta: Meta<typeof ElasticLoadBalancing> = { title: "AWS/NetworkingContentDelivery/ElasticLoadBalancing", component: ElasticLoadBalancing };

export default meta;
type Story = StoryObj<typeof ElasticLoadBalancing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
