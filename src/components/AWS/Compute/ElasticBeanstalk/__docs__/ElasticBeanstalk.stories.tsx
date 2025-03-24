import type { Meta, StoryObj } from "@storybook/react";
import ElasticBeanstalk from "../ElasticBeanstalk";

const meta: Meta<typeof ElasticBeanstalk> = { title: "AWS/Compute/ElasticBeanstalk", component: ElasticBeanstalk };

export default meta;
type Story = StoryObj<typeof ElasticBeanstalk>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
